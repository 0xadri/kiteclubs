export interface User {
  id: string;
  firstName: string;
  lastName: string;
  signedUpDate: string;
  description: string;
  languages: string[];
  homeBase: { city: string; country: string };
  carDetails: {
    brand: string;
    model: string;
    color: string;
    year: number;
    km: string;
  };
  email: string;
  phone: string;
  tags: string[];
  kitesurfSkills: string[];
}

export type CancellationReason =
  | 'weather'
  | 'vehicle_issue'
  | 'insufficient_riders'
  | 'driver_unavailable'
  | 'safety_concerns';

export interface Trip {
  id: string;
  departure: string;
  destination: string;
  startDate: string;
  endDate: string;
  departureTime: string;
  returnTripETA: { start: string; end: string };
  price: number;
  isReturnTrip: boolean;
  priceCurrency: string;
  title: string;
  description: string;
  vaguePickupPoint: string;
  exactPickupPoint: string;
  seats: number;
  driverId: string;
  riderIds: string[];
  luggageAllowance: string[];
  status: 'upcoming' | 'completed' | 'cancelled';
  cancellationReason?: CancellationReason;
  specialRequestMsg: boolean;
}

export interface EnrichedTrip extends Trip {
  driver: User | undefined;
  riders: User[];
  driverRating: number;
  driverTripsCompleted: number;
  carBrand: string;
  carModel: string;
  carColor: string;
}

export interface TripResultCardProps {
  trip: EnrichedTrip;
}

export interface UseTripSearchResult {
  trips: EnrichedTrip[];
  isLoading: boolean;
  error: string | null;
}

export interface TripSearchParams {
  departure?: string;
  destination?: string;
  date?: string;
}

export interface TripResultsProp {
  filters: TripSearchParams;
}

export interface TripSearchProps {
  filters: TripSearchParams;
  handleSubmit: (filters: TripSearchParams) => void;
}


