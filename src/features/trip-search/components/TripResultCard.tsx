import type {
  TripResultCardProps,
} from '../types';

const TripResultCard = ({key, trip}: TripResultCardProps) => {
  return (
    <li key={key}>
      Departure: {trip?.departure} <br/>
      Destination: {trip?.destination} <br/>
      Start: {trip.startDate} <br/>
      End: {trip.endDate} <br/>
      Price: {trip.price}
    </li>
  );
};

export default TripResultCard;
