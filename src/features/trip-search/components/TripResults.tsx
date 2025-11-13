import type { Trip, TripResultsProp, UseTripSearchResult } from '../types';
import { useTripSearch } from '../hooks/useTripSearch';
import TripResultCard from './TripResultCard';

/**
 * Component to display the list of trips.
 * Uses the useTripSearch hook to get the trips and the loading and error states.
 * Displays the trips in a list of TripResultCard components.
 */
const TripResults = ({ filters }: TripResultsProp) => {
  const { trips, isLoading, error }: UseTripSearchResult =
    useTripSearch(filters);

  return (
    <>
      <ul className="flex flex-col items-center justify-center gap-8 text-center py-8 px-6 bg-surf-sand/80">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {trips.map((trip: Trip) => (
          <TripResultCard key={trip.id} trip={trip} />
        ))}
      </ul>
    </>
  );
};

export default TripResults;
