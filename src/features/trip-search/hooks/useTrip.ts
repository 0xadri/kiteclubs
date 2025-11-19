import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import { getTripById } from '../services/tripApi';
import type { Trip } from '../types';

interface UseTripResult {
    trip: Trip | null;
    isLoading: boolean;
    error: string | null;
}

/**
 * Custom hook to fetch a single trip by ID.
 */
export function useTrip(id: string | undefined): UseTripResult {
    const [trip, setTrip] = useState<Trip | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        const controller = new AbortController();

        const fetchTrip = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const data = await getTripById(id, controller.signal);
                setTrip(data);
            } catch (err: unknown) {
                if (err instanceof CanceledError) return;

                console.error('Fetch trip failed:', err);

                if (err instanceof Error) {
                    setError(err.message);
                    return;
                }

                setError('Something went wrong.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrip();

        return () => controller.abort();
    }, [id]);

    return { trip, isLoading, error };
}
