import type { TripResultCardProps } from '../types';
import {
  formatDepartureTime,
  getCurrencySymbol,
  getFirstName,
  truncateDescription,
} from './utils';

const TripResultCard = ({ trip }: TripResultCardProps) => {
  const isDayTrip = trip.return && trip.startDate === trip.endDate;
  const currencySymbol = getCurrencySymbol(trip.priceCurrency);
  const truncatedDescription = truncateDescription(trip.description, 10);
  const firstName = getFirstName(trip.driverName);
  const formattedDepartureTime = formatDepartureTime(trip.departureTime);

  return (
    <li className="bg-white rounded-2xl shadow-md p-4 md:p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-100">
      <div className="flex flex-col gap-0 md:grid md:grid-cols-[auto_1fr_auto] md:gap-4">
        {/* Column 1: Time + Badges */}
        <div className="flex items-center justify-between gap-4 md:flex-col md:items-center md:justify-start md:space-y-2 md:pr-6 md:border-r border-gray-200 pb-2 md:pb-0">
          <div className="text-center pb-0 mb-0 md:mb-2" >
            <p className="text-2xl font-bold text-gray-900">
              {formattedDepartureTime}
            </p>
          </div>
          <div className="flex flex-row gap-2 md:flex-col md:gap-2">
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
        <div className="space-y-2">
          <h2 className="md:block text-2xl font-bold text-gray-900 pb-0 mb-3">
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

          <p className="hidden md:block text-sm text-gray-500">
            {trip.title}: <span className="font-medium text-gray-400">{truncatedDescription}</span>
          </p>
        </div>

        {/* Column 3: Price + Seats + Button */}
        <div className="flex flex-col gap-2 md:items-end md:justify-between pt-0 md:pt-2 md:pt-0 md:pl-6 md:border-l border-gray-200">
          {/* Mobile: Seats Left and Price on same line */}
          <div className="flex items-center justify-between w-full md:hidden">
            <div className={`flex items-center gap-1 text-sm text-gray-700 ${trip.seats === 1 ? 'text-red-600' : ''}`}>
              <span className="font-medium">Seats Left:</span>
              <span>{trip.seats}</span>
            </div>
            <p className="text-2xl font-bold text-aqua-600">
              {currencySymbol}{trip.price}
            </p>
          </div>
          
          {/* Desktop: Price at top */}
          <div className="hidden md:block text-center pb-0 mb-2">
            <p className="text-2xl font-bold text-aqua-600">
              {currencySymbol}{trip.price}
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-1.5 w-full">
            {/* Desktop: Seats Left */}
            <div className={`hidden md:flex items-center gap-1 text-sm text-gray-700 ${trip.seats === 1 ? 'text-red-600' : ''}`}>
              <span className="font-medium">Seats Left:</span>
              <span>{trip.seats}</span>
            </div>
            <button className="w-full md:w-auto bg-aqua-600 hover:bg-aqua-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-base">
              Request To Join
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TripResultCard;
