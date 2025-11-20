import { Link } from 'react-router';
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
    <li className="bg-white rounded-2xl shadow-xl border border-gray-100 transition-transform hover:scale-[1.01] duration-200">
      <Link to={`/trip/${trip.id}`} className="block p-4 md:p-6">
        <div className="flex flex-col gap-0 md:grid md:grid-cols-[auto_1fr_auto] md:gap-4">
          {/* Column 1: Time + Badges */}
          <div className="flex items-center justify-between gap-2 md:flex-col md:items-center md:justify-start md:space-y-2 md:pr-6 md:border-r border-gray-200 pb-2 md:pb-0">
            <div className="text-center pb-0 mb-0 md:mb-2">
              <p className="text-2xl font-bold text-gray-900">
                {formattedDepartureTime}
              </p>
            </div>
            <div className="flex flex-row gap-2 md:flex-col md:gap-1">
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
          <div className="space-y-2 mb-3 md:mb-0">
            <h2 className="md:block text-2xl font-bold text-gray-900 pb-0 mb-3 md:mb-4">
              {trip.departure} 🡒 {trip.destination}
            </h2>

            <div className="flex items-start gap-8">
              {/* Driver Info */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  {trip.driverName.charAt(0)}
                </div>
                <div>
                  <p className="text-base font-medium text-gray-800">
                    {firstName}
                  </p>
                  <p className="text-sm text-gray-500">
                    ⭐ {trip.driverRating.toFixed(1)} (
                    {trip.driverTripsCompleted})
                  </p>
                </div>
              </div>

              {/* Title & Description */}
              <div className="hidden md:block flex-1 pt-0">
                <p className="text-base font-medium text-gray-400">
                  {trip.title}
                </p>
                <p className="text-sm text-gray-400">{truncatedDescription}</p>
              </div>
            </div>
          </div>

          {/* Column 3: Price + Seats + Button */}
          <div className="flex flex-col gap-2 md:items-end md:justify-between pt-0 md:pl-6 md:border-l border-gray-200">
            {/* Mobile: Seats Left and Price on same line */}
            <div className="flex flex-row justify-between items-center w-full md:hidden">
              <div className="flex flex-col items-start">
                <p className="text-2xl font-bold text-purple-600">
                  {currencySymbol}
                  {trip.price}
                </p>
                <span
                  className={`text-sm text-gray-500 ${trip.seats === 1 ? 'text-red-600' : ''}`}
                >
                  {trip.seats} seats left
                </span>
              </div>
              <div className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-base text-center cursor-pointer">
                Book
              </div>
            </div>

            {/* Desktop: Price at top */}
            <div className="hidden md:block text-center pb-0 mb-0">
              <div className="flex flex-col items-end">
                <p className="text-2xl font-bold text-purple-600">
                  {currencySymbol}
                  {trip.price}
                </p>
                <span
                  className={`text-sm text-gray-800 ${trip.seats === 1 ? 'text-red-600' : ''}`}
                >
                  {trip.seats} seats left
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-1.5 w-full">
              {/* Desktop: Seats Left moved above, so removed here */}
              <div className="hidden md:block w-full md:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-base text-center cursor-pointer">
                Book
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default TripResultCard;
