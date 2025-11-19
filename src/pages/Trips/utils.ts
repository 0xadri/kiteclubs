import type { TripSearchParams } from '../../features/trip-search/types';

export const getTripFilters = (
  searchParams: URLSearchParams,
): TripSearchParams => ({
  departure: searchParams.get('departure') ?? '',
  destination: searchParams.get('destination') ?? '',
  date: searchParams.get('date') ?? '',
});

export const buildSearchParamsFromFilters = (
  filters: TripSearchParams,
): URLSearchParams => {
  const next = new URLSearchParams();

  if (filters.departure) {
    next.set('departure', filters.departure);
  }

  if (filters.destination) {
    next.set('destination', filters.destination);
  }

  if (filters.date) {
    next.set('date', filters.date);
  }

  return next;
};

