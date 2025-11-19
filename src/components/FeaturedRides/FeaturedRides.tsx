interface Ride {
  id: number;
  from: string;
  to: string;
  date: string;
  price: string;
  driver: string;
  seats: number;
  rating: number;
}

const FeaturedRides = () => {
  const rides: Ride[] = [
    {
      id: 1,
      from: 'Barcelona',
      to: 'Sant Pere',
      date: 'Nov 15, 2025',
      price: '€20',
      driver: 'Sarah M.',
      seats: 2,
      rating: 4.9,
    },
    {
      id: 2,
      from: 'Barcelona',
      to: 'Leucate',
      date: 'Nov 16, 2025',
      price: '€30',
      driver: 'Mike T.',
      seats: 3,
      rating: 5.0,
    },
    {
      id: 3,
      from: 'Barcelona',
      to: 'Delta del Ebro',
      date: 'Nov 17, 2025',
      price: '€25',
      driver: 'Alex R.',
      seats: 1,
      rating: 4.8,
    },
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Featured Upcoming Rides
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rides.map((ride) => (
            <div key={ride.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-gray-500">From</p>
                    <p className="font-semibold text-gray-800">{ride.from}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-purple-600">{ride.price}</p>
                    <p className="text-xs text-gray-500">per seat</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-500">To</p>
                  <p className="font-semibold text-gray-800">{ride.to}</p>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b">
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="text-sm font-medium text-gray-700">{ride.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Seats</p>
                    <p className="text-sm font-medium text-gray-700">{ride.seats} left</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {ride.driver.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{ride.driver}</p>
                      <p className="text-xs text-gray-500">⭐ {ride.rating}</p>
                    </div>
                  </div>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200" type="button">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRides;

