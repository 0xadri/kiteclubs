const Header = () => {
  return ( <>
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <div className="text-lg font-bold text-primary">Kite Clubs</div>
        <ul className="hidden md:flex gap-6">
          <li><a href="#features" className="hover:text-primary">Features</a></li>
          <li><a href="#pricing" className="hover:text-primary">Pricing</a></li>
          <li><a href="#contact" className="hover:text-primary">Contact</a></li>
        </ul>
        <button className="md:hidden p-2 rounded hover:bg-gray-100">☰</button>
      </nav>
    </header>
  </> );
}

export default Header;