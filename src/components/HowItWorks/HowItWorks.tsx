const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Search for rides',
      description: 'Find rides to your favorite kite spots',
      icon: '🔍',
    },
    {
      number: 2,
      title: 'Book your seat',
      description: 'Reserve your spot and split the cost',
      icon: '🎫',
    },
    {
      number: 3,
      title: 'Hit the water',
      description: 'Meet your crew and ride the wind',
      icon: '🪁',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 text-5xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.number}. {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
