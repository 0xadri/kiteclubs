const Benefits = () => {
  return (     
    <section id="features" className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 p-8">
      <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">Fast Booking</h3>
        <p className="text-gray-600">No signup required — use Kite Clubs directly.</p>
      </div>
      <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">Verified Members</h3>
        <p className="text-gray-600">Verify your profile - access the upgraded experience.</p>
      </div>
      <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">Trip Reviews</h3>
        <p className="text-gray-600">Comments and ratings - read and leave opinions.</p>
      </div>
    </section> 
  );
}
 
export default Benefits;