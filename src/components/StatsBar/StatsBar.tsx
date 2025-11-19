const StatsBar = () => {
  return (
    <section className="bg-purple-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-bold text-purple-600">150+</p>
            <p className="text-gray-600 mt-2">Riders Connected</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-purple-600">300+</p>
            <p className="text-gray-600 mt-2">Trips Shared</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold text-purple-600">25+</p>
            <p className="text-gray-600 mt-2">Spots Covered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;

