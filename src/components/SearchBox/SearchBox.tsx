const SearchBox = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="from" className="text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <input
            id="from"
            type="text"
            placeholder="Departure location"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
            readOnly
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="to" className="text-sm font-medium text-gray-700 mb-2">
            To
          </label>
          <input
            id="to"
            type="text"
            placeholder="Kite spot destination"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
            readOnly
          />
        </div>
        
        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            id="date"
            type="date"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua-500 focus:border-transparent"
            readOnly
          />
        </div>
      </div>
      
      <button
        className="w-full bg-aqua-500 hover:bg-aqua-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        type="button"
      >
        Find a Ride
      </button>
    </div>
  );
};

export default SearchBox;

