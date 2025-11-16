import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import TripResults from '../../features/trip-search/components/TripResults';
import TripSearch from '../../features/trip-search/components/TripSearch';
import type { TripSearchParams } from '../../features/trip-search/types';

const Trips = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<TripSearchParams>(() => ({
    departure: searchParams.get('departure') ?? '',
    destination: searchParams.get('destination') ?? '',
    date: searchParams.get('date') ?? '',
  }));

  const handleSearch = (field: keyof TripSearchParams, value: string) => {
    setFilters((filters) => ({
      ...filters,
      [field]: value,
    }));

    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      if (value) {
        next.set(field, value);
      } else {
        next.delete(field);
      }

      return next;
    });
  };

  useEffect(() => {
    const departureParam = searchParams.get('departure') ?? '';
    const destinationParam = searchParams.get('destination') ?? '';
    const dateParam = searchParams.get('date') ?? '';

    setFilters((filters) => {
      const nextFilters: TripSearchParams = {
        departure: departureParam,
        destination: destinationParam,
        date: dateParam,
      };

      if (
        filters.departure === nextFilters.departure &&
        filters.destination === nextFilters.destination &&
        filters.date === nextFilters.date
      ) {
        return filters;
      }

      return nextFilters;
    });
  }, [searchParams]);

  return (
    <div className="min-h-screen">
      <TripSearch filters={filters} handleSearch={handleSearch} />
      <TripResults filters={filters} />
    </div>
  );
};

export default Trips;
