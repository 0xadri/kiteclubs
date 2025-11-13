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
  dateRange?: string;
}

export interface TripSearchProps {
  filters: TripSearchParams;
  handleSearch: Function;
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
  key: string;
  trip: Trip;
}

