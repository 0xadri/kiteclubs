import { Link } from 'react-router';

const Header = () => {


  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md border-b border-white/20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <Link to="/" className="text-lg font-regular text-gray-800 tracking-wide hover:text-aqua-600 cursor-pointer transition-colors">
          ✣
        </Link>

        {/* Right side: Time and Actions */}
        <div className="hidden md:flex items-center gap-6">

          {/* Publish a trip button */}
          <div className="relative">
            <div className="absolute -top-[3px] -left-[3px] -right-[3px] -bottom-[3px] bg-aqua-600/40 blur-md rounded-2xl"></div>
            <button
              type="button"
              className="relative text-sm text-gray-800 font-regular bg-white/30 rounded-2xl px-4 py-1 hover:text-aqua-600 hover:bg-white/40 cursor-pointer transition-all"
            >
              Publish A Trip
            </button>
          </div>

          {/* Sign In button */}
          <div className="relative">
            <div className="absolute -top-[3px] -left-[3px] -right-[3px] -bottom-[3px] bg-aqua-600/40 blur-md rounded-2xl"></div>
            <button
              type="button"
              className="relative text-sm text-gray-800 font-regular bg-white/30 rounded-2xl px-4 py-1 hover:text-aqua-600 hover:bg-white/40 cursor-pointer transition-all"
            >
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100/50 transition-colors">
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;
