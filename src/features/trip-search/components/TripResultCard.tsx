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

const formatDepartureTime = (timeString: string): string => {
  // Extract time from format like '07:30:00+02:00' or '07:30:00'
  const timeMatch = timeString.match(/^(\d{2}):(\d{2})/);
  if (timeMatch) {
    return `${timeMatch[1]}:${timeMatch[2]}`;
  }
  return timeString;
};

const TripResultCard = ({ trip }: TripResultCardProps) => {
  const isDayTrip = trip.return && trip.startDate === trip.endDate;
  const currencySymbol = getCurrencySymbol(trip.priceCurrency);
  const truncatedDescription = truncateDescription(trip.description, 10);
  const firstName = getFirstName(trip.driverName);
  const formattedDepartureTime = formatDepartureTime(trip.departureTime);

  return (
    <li className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
      <div className="grid grid-cols-[auto_1fr_auto] gap-6">
        {/* Column 1: Time + Badges */}
        <div className="flex flex-col items-center justify-start space-y-3 pr-6 border-r border-gray-200">
          <div className="text-center pb-0 mb-3">
            <p className="text-2xl font-bold text-gray-900">
              {formattedDepartureTime}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {isDayTrip && (
              <span className="inline-flex items-center px-3 py-1 mb-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Day Trip
              </span>
            )}
            {trip.return && (
              <span className="inline-flex items-center px-3 py-1 mb-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Return
              </span>
            )}
          </div>
        </div>

        {/* Column 2: Main Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 pb-0 mb-3">
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

          <p className="text-sm text-gray-500">
            {trip.title}: <span className="font-medium text-gray-400">{truncatedDescription}</span>
          </p>
        </div>

        {/* Column 3: Price + Seats + Button */}
        <div className="flex flex-col items-end justify-between pl-6 border-l border-gray-200">
          <div className="text-center pb-0 mb-3">
            <p className="text-2xl font-bold text-aqua-600">
              {currencySymbol}{trip.price}
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className={`flex items-center gap-1 text-sm ${trip.seats === 1 ? 'text-red-600' : 'text-gray-700'}`}>
              <span className="font-medium">Seats Left:</span>
              <span>{trip.seats}</span>
            </div>
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
