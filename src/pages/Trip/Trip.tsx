import { useParams } from 'react-router';
import { useTrip } from '../../features/trip-search/hooks/useTrip';
import TripResultCard from '../../features/trip-search/components/TripResultCard';

const Trip = () => {
    const { tripId } = useParams();
    const { trip, isLoading, error } = useTrip(tripId);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    if (error || !trip) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {error || 'Trip not found'}
                    </h2>
                    <p className="text-gray-600">
                        We couldn't find the trip you're looking for.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Trip Details</h1>
                <ul className="space-y-4">
                    <TripResultCard trip={trip} />
                </ul>
            </div>
        </div>
    );
};

export default Trip;
