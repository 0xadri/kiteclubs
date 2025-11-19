import { useSearchParams } from 'react-router';
import TripResults from '../../features/trip-search/components/TripResults';
import TripSearch from '../../features/trip-search/components/TripSearch';
import type { TripSearchParams } from '../../features/trip-search/types';
import {
  buildSearchParamsFromFilters,
  getTripFilters,
} from './utils';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = getTripFilters(searchParams);

  const handleSubmit = (newFilters: TripSearchParams) => {
    const next = buildSearchParamsFromFilters(newFilters);
    setSearchParams(next);
  };

  return (
    <div className="min-h-screen">
      <TripSearch filters={filters} handleSubmit={handleSubmit} />
      <TripResults filters={filters} />
    </div>
  );
};

export default Search;
