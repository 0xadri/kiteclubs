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

export interface Trip {
  id: string;
  departure: string;
  destination: string;
  startDate: string;
  endDate: string;
  departureTime: string;
  returnTripETA: string;
  price: number;
  return: boolean;
  priceCurrency: string;
  title: string;
  description: string;
  vaguePickupPoint: string;
  seats: number;
  driverId: string;
  riderIds: string[];
  luggageAllowance: string[];
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface TripSearchParams {
  departure?: string;
  destination?: string;
  date?: string;
}

export interface TripSearchProps {
  filters: TripSearchParams;
  handleSubmit: (filters: TripSearchParams) => void;
}

export interface TripResultsProp {
  filters: TripSearchParams;
}

export interface UseTripSearchResult {
  trips: EnrichedTrip[];
  isLoading: boolean;
  error: string | null;
}

export interface TripResultCardProps {
  trip: EnrichedTrip;
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
