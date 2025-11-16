import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import { getTrips } from '../services/tripApi';
import type { Trip, TripSearchParams, UseTripSearchResult } from '../types';

/**
 * Custom hook to handle trip searching with Axios, no React Query.
 * Manages loading, error, and data states manually.
 */
export function useTripSearch(params: TripSearchParams): UseTripSearchResult {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Don't run if no filters provided
    if (!params.departure && !params.destination && !params.date) return;

    const controller = new AbortController(); // allows request cancellation

    const fetchTrips = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getTrips(params, controller.signal);
        setTrips(data);
      } catch (err: unknown) {
        if (err instanceof CanceledError) return; // Ignore canceled requests

        console.error('Trip search failed:', err);

        if (err instanceof Error) {
          setError(err.message);
          return;
        }

        setError('Something went wrong.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrips();

    // Cleanup on unmount or param change
    return () => controller.abort();
  }, [params]);

  return { trips, isLoading, error };
}
