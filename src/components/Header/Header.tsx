const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-sm border-b border-gray-200/50 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <div className="text-lg font-regular text-gray-800 tracking-wide">
          ✣ KiteCrew
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a
              href="#features"
              className="text-gray-800 font-regular hover:text-aqua-600 transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-gray-800 font-regular hover:text-aqua-600 transition-colors"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-800 font-regular hover:text-aqua-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100/50 transition-colors">
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Header;
