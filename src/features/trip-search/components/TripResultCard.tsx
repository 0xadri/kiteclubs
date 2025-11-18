import type { TripResultCardProps } from '../types';

const getCurrencySymbol = (currency: string): string => {
  const currencyMap: Record<string, string> = {
    euro: '€',
    eur: '€',
    dollar: '$',
    usd: '$',
    pound: '£',
    gbp: '£',
  };
  
  const normalized = currency.toLowerCase();
  return currencyMap[normalized] || currency.toUpperCase();
};

const truncateDescription = (description: string, wordLimit: number = 10): string => {
  const words = description.trim().split(/\s+/);
  if (words.length <= wordLimit) {
    return description;
  }
  return words.slice(0, wordLimit).join(' ') + '...';
};

const getFirstName = (fullName: string): string => {
  return fullName.trim().split(/\s+/)[0] || fullName;
};

const TripResultCard = ({ trip }: TripResultCardProps) => {
  const isDayTrip = trip.return && trip.startDate === trip.endDate;
  const currencySymbol = getCurrencySymbol(trip.priceCurrency);
  const truncatedDescription = truncateDescription(trip.description, 10);
  const firstName = getFirstName(trip.driverName);

  return (
    <li className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
      <div className="flex gap-6">
        {/* Left Sidebar: Price + Badges */}
        <div className="flex flex-col items-center justify-start space-y-3 pr-6 border-r border-gray-200">
          <div className="text-center">
            <p className="text-3xl font-bold text-aqua-600">
              {currencySymbol}{trip.price}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {isDayTrip && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Day Trip
              </span>
            )}
            {trip.return && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Return
              </span>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-4">
          {/* Route Header with Driver Info in Top Right */}
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {trip.departure} 🡒 {trip.destination}
            </h2>
            <div className="flex items-center gap-1 text-base text-gray-700">
              <span>👤</span>
              <span>{firstName}</span>
              <span className="flex items-center gap-1 ml-1">
                <span>⭐</span>
                <span>{trip.driverRating.toFixed(1)}</span>
                <span>({trip.driverTripsCompleted})</span>
              </span>
            </div>
          </div>

          {/* Seats Left */}
          <div className="flex items-center gap-1 text-base text-gray-700">
            <span className="font-medium">Seats Left:</span>
            <span>{trip.seats}</span>
          </div>

          {/* Title and Description - Muted */}
          <div className="space-y-1">
            <h3 className="text-sm font-medium text-gray-400">
              {trip.title}
            </h3>
            <p className="text-sm text-gray-500">
              {truncatedDescription}
            </p>
          </div>

          {/* Button - Right Aligned */}
          <div className="flex justify-end pt-2">
            <button className="bg-aqua-600 hover:bg-aqua-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-sm">
              Request To Join
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TripResultCard;
