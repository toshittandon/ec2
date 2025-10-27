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
            {['Home', 'Events', 'Blogs', 'Team', 'Contact'].map((item) => (
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

        {/* Mobile menu overlay */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile menu */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)'
        }}>
          <div className="p-6">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-warm-charcoal hover:text-ec2-pink"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            
            <div className="mt-12">
              <ul className="flex flex-col space-y-6">
                {['Home', 'Events', 'Blogs', 'Team', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-medium text-warm-charcoal transition-colors hover:text-ec2-pink block text-lg"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <a
                    href="https://chat.whatsapp.com/G1oZA23TBaDAfzf83LmfmI"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'linear-gradient(to right, #E91E63, #C2185B)'
                    }}
                    className="px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 inline-block text-center w-full"
                  >
                    Join the Club
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
