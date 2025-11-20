import axios from 'axios';
import type { EnrichedTrip, TripSearchParams } from '../types';

// Create reusable Axios instance
const api = axios.create({
  baseURL: '/api',
  timeout: 8000,
});

// Optional global interceptor for error logging or auth
api.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error('API Error:', err);
    return Promise.reject(err);
  },
);

/**
 * Fetch trips with given filters.
 * Supports request cancellation via AbortController.
 */
export async function getTrips(
  params: TripSearchParams,
  signal?: AbortSignal,
): Promise<EnrichedTrip[]> {
  const response = await api.get<EnrichedTrip[]>('/trips', {
    params,
    signal, // Axios v1+ supports AbortController
  });

  return response.data;
}

/**
 * Fetch a single trip by ID.
 */
export async function getTripById(
  id: string,
  signal?: AbortSignal,
): Promise<EnrichedTrip> {
  const response = await api.get<EnrichedTrip>(`/trips/${id}`, {
    signal,
  });

  return response.data;
}
