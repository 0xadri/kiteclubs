import { useNavigate, useParams, useSearchParams } from 'react-router';
import TripResults from '../../features/trip-search/components/TripResults';
import TripSearch from '../../features/trip-search/components/TripSearch';
import type { TripSearchParams } from '../../features/trip-search/types';
import { buildSearchPath, getTripFilters } from './utils';

const Search = () => {
  const [searchParams] = useSearchParams();
  const params = useParams();
  const navigate = useNavigate();

  const filters = getTripFilters(searchParams, params);

  const handleSubmit = (newFilters: TripSearchParams) => {
    const path = buildSearchPath(newFilters);
    navigate(path);
  };

  return (
    <div className="min-h-screen">
      <TripSearch
        key={`${filters.departure}-${filters.destination}-${filters.date}`}
        filters={filters}
        handleSubmit={handleSubmit}
      />
      <TripResults filters={filters} />
    </div>
  );
};

export default Search;
