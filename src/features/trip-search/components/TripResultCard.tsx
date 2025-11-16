import type { TripResultCardProps } from '../types';

const TripResultCard = ({ trip }: TripResultCardProps) => (
  <li className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
    <div className="space-y-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {trip.destination}
        </h3>
        <p className="text-sm text-gray-600">
          <span className="font-medium">From:</span> {trip.departure}
        </p>
      </div>
      
      <div className="flex flex-col gap-2 text-sm text-gray-700">
        <div className="flex items-center gap-2">
          <span className="font-medium">Start:</span>
          <span>{trip.startDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">End:</span>
          <span>{trip.endDate}</span>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <p className="text-2xl font-bold text-aqua-600">
          ${trip.price}
        </p>
      </div>
    </div>
  </li>
);

export default TripResultCard;
