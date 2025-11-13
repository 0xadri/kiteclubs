import React from 'react';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import HowItWorks from './components/HowItWorks';
import FeaturedRides from './components/FeaturedRides';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsBar />
      <HowItWorks />
      <FeaturedRides />
      <Footer />
    </div>
  );
};

export default App;
