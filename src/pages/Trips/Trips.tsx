import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import TripResults from '../../features/trip-search/components/TripResults';
import TripSearch from '../../features/trip-search/components/TripSearch';
import type { TripSearchParams } from '../../features/trip-search/types';

const Trips = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<TripSearchParams>(() => ({
    departure: searchParams.get('departure') ?? '',
  }));

  const handleSearch = (term: string) => {
    setFilters((filters) => ({
      ...filters, // Clone object for immutability (Shallow Clone)
      ['departure']: term, // Add/Update Property
    }));

    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      if (term) {
        next.set('departure', term);
      } else {
        next.delete('departure');
      }

      return next;
    });
  };

  useEffect(() => {
    const departureParam = searchParams.get('departure');

    setFilters((filters) => {
      const nextDeparture = departureParam ?? '';

      if (filters.departure === nextDeparture) {
        return filters;
      }

      return { ...filters, departure: nextDeparture };
    });
  }, [searchParams]);

  return (
    <>
      <TripSearch filters={filters} handleSearch={handleSearch} />
      <TripResults filters={filters} />
    </>
  );
};

export default Trips;
