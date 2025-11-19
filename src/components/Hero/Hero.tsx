import SearchBox from '../SearchBox/SearchBox';

const Hero = () => {
  // 🎨 CHANGE THIS NUMBER (1-4) TO PREVIEW DIFFERENT GRADIENT OPTIONS
  const GRADIENT_VARIANT = 1

  const gradients = {
    1: 'from-blue-600 via-blue-900 to-purple-400',      // Blue to Deep Purple
    2: 'from-blue-600 via-purple-500 to-purple-600',      // Blue to Purple (original)
    3: 'from-blue-600 via-purple-400 to-purple-600',      // Blue to Light Purple
    4: 'from-blue-600 via-fuchsia-500 to-purple-600',     // Blue to Fuchsia
  };

  const gradientClass = gradients[GRADIENT_VARIANT as keyof typeof gradients] || gradients[1];

  return (
    <section className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br ${gradientClass} px-4 py-12 md:py-16`}>
      <div className="relative z-10 w-full max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Share the Ride. Share the Stoke.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Connect with kitesurfers heading to your favorite spots
          </p>
        </div>

        <SearchBox />
      </div>
    </section>
  );
};

export default Hero;
