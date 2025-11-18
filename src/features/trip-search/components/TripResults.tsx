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
    <section className="bg-sand-50 py-12">
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
          <ul className="grid grid-cols-1 gap-6">
            {trips
              .sort((a: Trip, b: Trip) => {
                // First, sort by departure time
                const timeA = a.departureTime;
                const timeB = b.departureTime;
                const timeComparison = timeA.localeCompare(timeB);
                
                // If times are different, return the time comparison
                if (timeComparison !== 0) {
                  return timeComparison;
                }
                
                // If times are the same, sort by route (departure first, then destination)
                const departureComparison = a.departure.localeCompare(b.departure);
                if (departureComparison !== 0) {
                  return departureComparison;
                }
                
                // If departure is also the same, sort by destination
                return a.destination.localeCompare(b.destination);
              })
              .map((trip: Trip) => (
                <TripResultCard key={trip.id} trip={trip} />
              ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default TripResults;
