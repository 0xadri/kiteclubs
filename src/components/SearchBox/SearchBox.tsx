import type { FormEvent } from 'react';
import { useNavigate } from 'react-router';

const SearchBox = () => {
  const navigate = useNavigate();

  // Get tomorrow's date in YYYY-MM-DD format
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const searchParams = new URLSearchParams();
    
    const departure = (formData.get('departure') as string)?.trim();
    const destination = (formData.get('destination') as string)?.trim();
    const date = (formData.get('date') as string)?.trim();
    
    if (departure) {
      searchParams.set('departure', departure);
    }
    if (destination) {
      searchParams.set('destination', destination);
    }
    if (date) {
      searchParams.set('date', date);
    }

    navigate(`/trips?${searchParams.toString()}`);
  }

  return (
    <form
      role="search"
      onSubmit={onSubmit}
      className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col">
          <input
            id="from"
            type="text"
            name="departure"
            placeholder="Departure"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex flex-col">
          <input
            id="to"
            type="text"
            name="destination"
            placeholder="Destination"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
          />
        </div>
        
        <div className="flex flex-col">
          <input
            id="date"
            type="date"
            name="date"
            defaultValue={getTomorrowDate()}
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
  );
};

export default SearchBox;

