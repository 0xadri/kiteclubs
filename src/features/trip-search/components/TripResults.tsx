import type {
  TripResultsProp,
  UseTripSearchResult,
} from '../types';
import { useTripSearch } from '../hooks/useTripSearch';
import { groupTrips, formatDateDisplay } from './utils';
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
    <section className="bg-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {isLoading && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Loading trips...</p>
          </div>
        )}
        {error && (
          <div className="text-center py-12">
            <p className="text-xl text-red-600">Error: {error}</p>
          </div>
        )}
        {!isLoading && !error && trips.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No trips found. Try adjusting your search.</p>
          </div>
        )}
        {!isLoading && !error && trips.length > 0 && (
          <div className="space-y-8">
            {groupTrips(trips).map((group) => (
              <div key={group.date}>
                <h3 className="text-center text-lg font-semibold text-gray-700 mb-4">
                  {formatDateDisplay(group.date)}
                </h3>
                <ul className="grid grid-cols-1 gap-6">
                  {group.trips.map((trip) => (
                    <TripResultCard key={trip.id} trip={trip} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TripResults;
