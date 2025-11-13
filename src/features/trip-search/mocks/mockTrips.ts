import type { Trip } from '../types';

export const mockTrips: Trip[] = [
  {
    id: 'trip-1',
    departure: 'Barcelona',
    destination: 'Tarifa',
    startDate: '2025-05-02',
    endDate: '2025-05-09',
    price: 200,
  },
  {
    id: 'trip-2',
    departure: 'Barcelona',
    destination: 'Leucate',
    startDate: '2025-06-15',
    endDate: '2025-06-22',
    price: 30,
  },
  {
    id: 'trip-3',
    departure: 'Barcelona',
    destination: 'Lisbon',
    startDate: '2025-07-05',
    endDate: '2025-07-12',
    price: 50,
  },
];
