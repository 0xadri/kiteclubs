import { http, HttpResponse } from 'msw';

import { getEnrichedTrips } from '../utils/tripHelpers';

export const tripHandlers = [
  http.get('/api/trips', ({ request }) => {
    const url = new URL(request.url);
    const departure = url.searchParams.get('departure');
    const destination = url.searchParams.get('destination');
    const dateRange = url.searchParams.get('dateRange');

    const enrichedTrips = getEnrichedTrips({
      departure: departure || undefined,
      destination: destination || undefined,
      status: 'upcoming', // Only show upcoming trips in search
    });

    let filteredTrips = enrichedTrips;

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

  http.get('/api/trips/:id', ({ params }) => {
    const { id } = params;
    const enrichedTrips = getEnrichedTrips();
    const trip = enrichedTrips.find((t) => t.id === id);

    if (!trip) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(trip, { status: 200 });
  }),
];
