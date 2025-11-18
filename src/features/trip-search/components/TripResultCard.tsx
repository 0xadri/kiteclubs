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

const TripResultCard = ({ trip }: TripResultCardProps) => {
  const isDayTrip = trip.return && trip.startDate === trip.endDate;
  const currencySymbol = getCurrencySymbol(trip.priceCurrency);
  const truncatedDescription = truncateDescription(trip.description, 10);

  return (
    <li className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {trip.title}
          </h3>
          <p className="text-lg text-gray-600">
            {trip.departure} 🡒 {trip.destination}
          </p>
        </div>
        
        <p className="text-gray-600">
          {truncatedDescription}
        </p>
        
        <div className="flex gap-2 items-center">
          <p className="text-2xl mr-3 font-bold text-aqua-600">
            {currencySymbol}{trip.price}
          </p>
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
        
        <div className="flex items-center gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-1">
            <span className="font-medium">Driver:</span>
            <span>{trip.driverName}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Rating:</span>
            <span className="flex items-center gap-1">
              <span>⭐</span>
              <span>{trip.driverRating.toFixed(1)}</span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium">Seats Left:</span>
            <span>{trip.seats}</span>
          </div>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <button className="w-full bg-aqua-600 hover:bg-aqua-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            Request To Join
          </button>
        </div>
      </div>
    </li>
  );
};

export default TripResultCard;
