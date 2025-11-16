export interface Trip {
  id: string;
  departure: string;
  destination: string;
  startDate: string;
  endDate: string;
  price: number;
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
  trips: Trip[];
  isLoading: boolean;
  error: string | null;
}

export interface TripResultCardProps {
  trip: Trip;
}
