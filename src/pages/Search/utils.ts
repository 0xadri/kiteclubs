import type { TripSearchParams } from '../../features/trip-search/types';

const toPascalCase = (str: string): string => {
  if (!str) return '';
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export const getTripFilters = (
  searchParams: URLSearchParams,
  params?: { tripRoute?: string; date?: string },
): TripSearchParams => {
  if (params?.tripRoute && params?.date) {
    const [departure, destination] = params.tripRoute.split('-');
    return {
      departure: departure === 'ANYWHERE' ? '' : toPascalCase(departure || ''),
      destination: destination === 'ANYWHERE' ? '' : toPascalCase(destination || ''),
      date: params.date || '',
    };
  }

  return {
    departure: searchParams.get('departure') ?? '',
    destination: searchParams.get('destination') ?? '',
    date: searchParams.get('date') ?? '',
  };
};

export const buildSearchPath = (filters: TripSearchParams): string => {
  const departure = filters.departure?.trim().toUpperCase() || 'ANYWHERE';
  const destination = filters.destination?.trim().toUpperCase() || 'ANYWHERE';
  const date = filters.date?.trim() || '';

  // Always use the new URL format if we have a date
  if (date) {
    return `/search/${departure}-${destination}/${date}`;
  }

  // Fallback to query params only if no date is provided
  const searchParams = new URLSearchParams();

  if (filters.departure) {
    searchParams.set('departure', filters.departure);
  }

  if (filters.destination) {
    searchParams.set('destination', filters.destination);
  }

  return `/search?${searchParams.toString()}`;
};

