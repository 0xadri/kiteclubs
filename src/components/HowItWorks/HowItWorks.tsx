const HowItWorks = () => {
  return ( 
    <section id="how-it-works" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
            <p className="text-gray-600">Create your account in seconds and get instant access to all features.</p>
          </div>
          {/* Step 2 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Customize</h3>
            <p className="text-gray-600">Set up your preferences and choose your design or workflow.</p>
          </div>
          {/* Step 3 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary text-white text-lg font-bold">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Launch</h3>
            <p className="text-gray-600">Go live and enjoy a fully functional, responsive experience immediately.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default HowItWorks;