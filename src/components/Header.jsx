import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-warm-charcoal shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/ec2.svg" 
              alt="EC² Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          <ul className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {['Home', 'Events', 'Team', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`font-medium transition-colors hover:text-ec2-pink ${
                    scrolled || !isHome ? 'text-warm-bg' : 'text-warm-charcoal'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://chat.whatsapp.com/G1oZA23TBaDAfzf83LmfmI"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(to right, #E91E63, #C2185B)'
                }}
                className="px-4 xl:px-6 py-2 rounded-lg font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block text-sm xl:text-base"
              >
                Join the Club
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden ${
              scrolled || !isHome ? 'text-warm-bg' : 'text-warm-charcoal'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {['Home', 'Events', 'Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-medium transition-colors hover:text-ec2-pink block ${
                      scrolled || !isHome ? 'text-warm-bg' : 'text-warm-charcoal'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://chat.whatsapp.com/G1oZA23TBaDAfzf83LmfmI"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(to right, #E91E63, #C2185B)'
                  }}
                  className="px-6 py-2 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 inline-block text-center w-full"
                >
                  Join the Club
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
