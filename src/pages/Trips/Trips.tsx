import { useState } from 'react';
import TripResults from '../../features/trip-search/components/TripResults';
import TripSearch from '../../features/trip-search/components/TripSearch';
import type { TripSearchParams } from '../../features/trip-search/types';

const Trips = () => {
  const [filters, setFilters] = useState<TripSearchParams>({
    departure: 'Barcelona',
  });

  const handleSearch = (term: string) => {
    setFilters((filters) => ({
      ...filters, // Clone object for immutability (Shallow Clone)
      ['departure']: term, // Add/Update Property
    }));
  };

  return (
    <>
      <TripSearch filters={filters} handleSearch={handleSearch} />
      <TripResults filters={filters} />
    </>
  );
};

export default Trips;
