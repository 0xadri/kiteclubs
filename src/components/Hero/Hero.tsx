const Hero = () => {
  return (     
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6 bg-surf-sand/80">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Kitesurf In <span className="text-primary">Good Company</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Kitesurf + Car Sharing = fun, social, and sport.
      </p>
      <a
        href="#"
        className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition"
      >
        Get Started
      </a>
    </section> 
  );
}
 
export default Hero;