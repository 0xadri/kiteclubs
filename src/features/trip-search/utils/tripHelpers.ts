import type { Trip, User } from '../types';
import { mockTrips } from '../mocks/mockTrips';
import { mockUsers } from '../mocks/mockUsers';

/**
 * Get user by ID
 */
export function getUserById(userId: string): User | undefined {
  return mockUsers.find((user) => user.id === userId);
}

/**
 * Get trip by ID
 */
export function getTripById(tripId: string): Trip | undefined {
  return mockTrips.find((trip) => trip.id === tripId);
}

/**
 * Get all trips for a user (as driver or rider)
 */
export function getUserTrips(userId: string): {
  asDriver: Trip[];
  asRider: Trip[];
  all: Trip[];
} {
  const asDriver = mockTrips.filter((trip) => trip.driverId === userId);
  const asRider = mockTrips.filter((trip) => trip.riderIds.includes(userId));

  return {
    asDriver,
    asRider,
    all: [...asDriver, ...asRider].sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
    ),
  };
}

/**
 * Calculate user trip statistics
 */
export function getUserStats(userId: string) {
  const trips = getUserTrips(userId);

  const tripsOrganized = {
    completed: trips.asDriver.filter((t) => t.status === 'completed').length,
    cancelled: trips.asDriver.filter((t) => t.status === 'cancelled').length,
  };

  const tripsJoined = {
    completed: trips.asRider.filter((t) => t.status === 'completed').length,
    cancelled: trips.asRider.filter((t) => t.status === 'cancelled').length,
  };

  const totalTrips =
    tripsOrganized.completed +
    tripsOrganized.cancelled +
    tripsJoined.completed +
    tripsJoined.cancelled;

  const completedTrips = tripsOrganized.completed + tripsJoined.completed;
  const completionRate =
    totalTrips > 0 ? Math.round((completedTrips / totalTrips) * 100) : 0;

  return {
    tripsOrganized,
    tripsJoined,
    totalTrips,
    completedTrips,
    completionRate,
  };
}

/**
 * Get driver rating based on completed trips
 */
export function getDriverRating(userId: string): number {
  const user = getUserById(userId);
  if (!user) return 0;

  const stats = getUserStats(userId);

  // Simple rating calculation based on completion rate and experience
  const baseRating = 4.0;
  const completionBonus = (stats.completionRate / 100) * 1.0;
  const experienceBonus = Math.min(stats.tripsOrganized.completed * 0.02, 0.5);

  return Math.min(5.0, baseRating + completionBonus + experienceBonus);
}

/**
 * Enrich trip with driver and rider information
 */
export function enrichTripWithUsers(trip: Trip) {
  const driver = getUserById(trip.driverId);
  const riders = trip.riderIds
    .map((riderId) => getUserById(riderId))
    .filter((rider): rider is User => rider !== undefined);

  const driverStats = driver ? getUserStats(driver.id) : null;
  const driverRating = driver ? getDriverRating(driver.id) : 0;

  return {
    ...trip,
    driver,
    driverRating,
    driverTripsCompleted: driverStats?.tripsOrganized.completed || 0,
    riders,
    carBrand: driver?.carDetails.brand || '',
    carModel: driver?.carDetails.model || '',
    carColor: driver?.carDetails.color || '',
  };
}

/**
 * Get all trips with enriched data
 */
export function getEnrichedTrips(filters?: {
  departure?: string;
  destination?: string;
  date?: string;
  status?: 'upcoming' | 'completed' | 'cancelled';
}): ReturnType<typeof enrichTripWithUsers>[] {
  let filteredTrips = mockTrips;

  if (filters?.departure) {
    filteredTrips = filteredTrips.filter((trip) =>
      trip.departure.toLowerCase().includes(filters.departure!.toLowerCase()),
    );
  }

  if (filters?.destination) {
    filteredTrips = filteredTrips.filter((trip) =>
      trip.destination
        .toLowerCase()
        .includes(filters.destination!.toLowerCase()),
    );
  }

  if (filters?.date) {
    filteredTrips = filteredTrips.filter(
      (trip) => trip.startDate === filters.date,
    );
  }

  if (filters?.status) {
    filteredTrips = filteredTrips.filter(
      (trip) => trip.status === filters.status,
    );
  }

  return filteredTrips.map(enrichTripWithUsers);
}
