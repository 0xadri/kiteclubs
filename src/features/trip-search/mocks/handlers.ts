import { http, HttpResponse } from 'msw';

import { mockTrips } from './mockTrips';

export const tripHandlers = [
  http.get('/api/trips', ({ request }) => {
    const url = new URL(request.url);
    const departure = url.searchParams.get('departure');
    const destination = url.searchParams.get('destination');
    const dateRange = url.searchParams.get('dateRange');

    let filteredTrips = [...mockTrips];

    if (departure) {
      filteredTrips = filteredTrips.filter((trip) =>
        trip.departure.toLowerCase().includes(departure.toLowerCase()),
      );
    }

    if (destination) {
      filteredTrips = filteredTrips.filter((trip) =>
        trip.destination.toLowerCase().includes(destination.toLowerCase()),
      );
    }

    if (dateRange) {
      const [rangeStart, rangeEnd] = dateRange.split(':');

      filteredTrips = filteredTrips.filter((trip) => {
        const tripStart = new Date(trip.startDate);
        const tripEnd = new Date(trip.endDate);

        return (
          (!rangeStart || tripEnd >= new Date(rangeStart)) &&
          (!rangeEnd || tripStart <= new Date(rangeEnd))
        );
      });
    }

    return HttpResponse.json(filteredTrips, {
      status: 200,
    });
  }),
];
