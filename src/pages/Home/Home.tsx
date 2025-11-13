import Hero from '../../components/Hero/Hero';
import StatsBar from '../../components/StatsBar/StatsBar';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import FeaturedRides from '../../components/FeaturedRides/FeaturedRides';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsBar />
      <HowItWorks />
      <FeaturedRides />
    </div>
  );
};

export default Home;
