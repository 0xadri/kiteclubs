import { useSearchParams } from 'react-router';
import TripResults from '../../features/trip-search/components/TripResults';
import TripSearch from '../../features/trip-search/components/TripSearch';
import type { TripSearchParams } from '../../features/trip-search/types';

const Trips = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const filters: TripSearchParams = {
    departure: searchParams.get('departure') ?? '',
    destination: searchParams.get('destination') ?? '',
    date: searchParams.get('date') ?? '',
  };

  const handleSubmit = (newFilters: TripSearchParams) => {
    const next = new URLSearchParams();

    if (newFilters.departure) {
      next.set('departure', newFilters.departure);
    }
    if (newFilters.destination) {
      next.set('destination', newFilters.destination);
    }
    if (newFilters.date) {
      next.set('date', newFilters.date);
    }

    setSearchParams(next);
  };

  return (
    <div className="min-h-screen">
      <TripSearch filters={filters} handleSubmit={handleSubmit} />
      <TripResults filters={filters} />
    </div>
  );
};

export default Trips;
