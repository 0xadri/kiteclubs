import type { TripResultCardProps } from '../types';

const TripResultCard = ({ trip }: TripResultCardProps) => (
  <li>
    Departure: {trip.departure}
    <br />
    Destination: {trip.destination}
    <br />
    Start: {trip.startDate}
    <br />
    End: {trip.endDate}
    <br />
    Price: {trip.price}
  </li>
);

export default TripResultCard;
