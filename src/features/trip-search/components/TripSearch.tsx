import type { FormEvent } from 'react';
import type { TripSearchProps } from '../types';

const TripSearch = ({ filters, handleSubmit }: TripSearchProps) => {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const searchFilters = {
      departure: (formData.get('departure') as string) ?? '',
      destination: (formData.get('destination') as string) ?? '',
      date: (formData.get('date') as string) ?? '',
    };
    
    handleSubmit(searchFilters);
  }

  return (
    <section className="relative bg-gradient-to-br from-aqua-500 via-aqua-400 to-sand-300 px-4 pt-24 pb-8">
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <form role="search" onSubmit={onSubmit} className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col">
              <label htmlFor="from" className="text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <input
                id="from"
                type="text"
                name="departure"
                defaultValue={filters.departure ?? ''}
                placeholder="Departure location"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="to" className="text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <input
                id="to"
                type="text"
                name="destination"
                defaultValue={filters.destination ?? ''}
                placeholder="Kite spot destination"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                id="date"
                type="date"
                name="date"
                defaultValue={filters.date ?? ''}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-aqua-500 hover:bg-aqua-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Find a Ride
          </button>
        </form>
      </div>
    </section>
  );
};

export default TripSearch;
