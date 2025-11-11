const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-surf-sand/80 backdrop-blur-md border-b border-surf-driftwood/30 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Brand */}
        <div className="text-lg font-bold text-surf-navy tracking-wide">
          Kite Clubs
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6">
          <li><a href="#features" className="text-surf-navy hover:text-surf-aqua transition">Features</a></li>
          <li><a href="#pricing" className="text-surf-navy hover:text-surf-aqua transition">Pricing</a></li>
          <li><a href="#contact" className="text-surf-navy hover:text-surf-aqua transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-lg text-surf-navy hover:bg-surf-seafoam/50 transition">
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Header;