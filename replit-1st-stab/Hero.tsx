import React from 'react';
import SearchBox from './SearchBox';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-aqua-500 via-aqua-400 to-sand-300 px-4 py-16">
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
