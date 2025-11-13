import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Kite Clubs</h3>
            <p className="text-gray-400">
              Connecting kitesurfers for epic sessions and shared adventures.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-aqua-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-400 transition-colors">Safety</a></li>
              <li><a href="#" className="text-gray-400 hover:text-aqua-400 transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <div className="space-y-3">
              <button className="w-full bg-aqua-500 hover:bg-aqua-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Sign Up
              </button>
              <button className="w-full bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                Log In
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Kite Clubs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
