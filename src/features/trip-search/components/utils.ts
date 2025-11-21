import type { Trip } from '../types';

export const formatDateDisplay = (value: string) => {
  if (!value) {
    return 'Date';
  }

  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return 'Date';
  }

  const weekdayFormatter = new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
  });
  const dayFormatter = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
  });
  const monthFormatter = new Intl.DateTimeFormat('en-GB', {
    month: '2-digit',
  });

  const weekday = weekdayFormatter.format(date);
  const day = dayFormatter.format(date);
  const month = monthFormatter.format(date);

  return `${weekday}. ${day}/${month}`;
};

export const getCurrencySymbol = (currency: string): string => {
  const currencyMap: Record<string, string> = {
    euro: '€',
    eur: '€',
    dollar: '$',
    usd: '$',
    pound: '£',
    gbp: '£',
  };

  const normalized = currency.toLowerCase();
  return currencyMap[normalized] || currency.toUpperCase();
};

export const truncateDescription = (
  description: string,
  wordLimit: number = 10,
): string => {
  const words = description.trim().split(/\s+/);
  if (words.length <= wordLimit) {
    return description;
  }
  return `${words.slice(0, wordLimit).join(' ')}...`;
};

export const getFirstName = (fullName: string): string => {
  const nameParts = fullName.trim().split(/\s+/);
  if (nameParts.length === 1) {
    return nameParts[0];
  }
  const firstName = nameParts[0];
  const lastNameInitial = nameParts[nameParts.length - 1].charAt(0);
  return `${firstName} ${lastNameInitial}.`;
};

export const formatDepartureTime = (timeString: string): string => {
  const timeMatch = timeString.match(/^(\d{2}):(\d{2})/);
  if (timeMatch) {
    return `${timeMatch[1]}:${timeMatch[2]}`;
  }
  return timeString;
};

export const formatReturnTripETA = (returnTripETA: {
  start: string;
  end: string;
}): string => {
  const startTimeMatch = returnTripETA.start.match(/^(\d{2}):(\d{2})/);
  const endTimeMatch = returnTripETA.end.match(/^(\d{2}):(\d{2})/);

  if (startTimeMatch && endTimeMatch) {
    const startTime = `${startTimeMatch[1]}:${startTimeMatch[2]}`;
    const endTime = `${endTimeMatch[1]}:${endTimeMatch[2]}`;
    return `${startTime} - ${endTime}`;
  }

  return `${returnTripETA.start} - ${returnTripETA.end}`;
};

export const groupTrips = <T extends Trip>(trips: T[]) => {
  return trips
    .sort((a, b) => {
      const dateComparison = a.startDate.localeCompare(b.startDate);
      if (dateComparison !== 0) return dateComparison;
      const timeComparison = a.departureTime.localeCompare(b.departureTime);
      if (timeComparison !== 0) return timeComparison;
      const departureComparison = a.departure.localeCompare(b.departure);
      if (departureComparison !== 0) return departureComparison;
      return a.destination.localeCompare(b.destination);
    })
    .reduce((acc: { date: string; trips: T[] }[], trip: T) => {
      const lastGroup = acc[acc.length - 1];
      if (lastGroup && lastGroup.date === trip.startDate) {
        lastGroup.trips.push(trip);
      } else {
        acc.push({ date: trip.startDate, trips: [trip] });
      }
      return acc;
    }, []);
};
