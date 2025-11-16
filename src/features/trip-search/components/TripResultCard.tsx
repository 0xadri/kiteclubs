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

const TripResultCard = ({ trip }: TripResultCardProps) => {
  const isDayTrip = trip.return && trip.startDate === trip.endDate;
  const currencySymbol = getCurrencySymbol(trip.priceCurrency);

  return (
    <li className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {trip.departure} 🡒 {trip.destination}
          </h3>
          <div className="flex gap-2 flex-shrink-0">
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
        
        <div className="pt-4 border-t border-gray-200">
          <p className="text-2xl font-bold text-aqua-600">
            {currencySymbol}{trip.price}
          </p>
        </div>
      </div>
    </li>
  );
};

export default TripResultCard;
