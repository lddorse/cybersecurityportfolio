import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const location = useLocation();
  const [showHamburger, setShowHamburger] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show hamburger when scrolled past 100px (navbar is out of view)
      setShowHamburger(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // RESTORED NAVLINK HELPER
  const navLink = (to, label) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setMenuOpen(false)}
        className={`
          px-3 py-1 rounded-md transition-colors block
          ${isActive
            ? 'bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 font-semibold'
            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
          }
        `}
      >
        {label}
      </Link>
    );
  };

  return (
    <>
      {/* Navbar Background - matches FixedCardLayout */}
      <div className="w-full bg-gray-200 dark:bg-gray-900">
        <nav className="w-full max-w-[768px] mx-auto px-4 sm:px-6 pt-4 pb-4">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <ul className="flex items-center justify-between text-[13px] font-medium tracking-wide">
              <li className="flex-1 text-center">{navLink('/', 'Resume')}</li>
              <li className="flex-1 text-center">{navLink('/portfolio', 'Portfolio')}</li>
              <li className="flex-1 text-center">{navLink('/about', 'About')}</li>
              <li className="flex-1 text-center">{navLink('/contact', 'Contact')}</li>
              <li className="h-4 w-px bg-gray-200 dark:bg-gray-700 mx-2" />
              <li><DarkModeToggle /></li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Hamburger Button - appears when scrolled */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        className={`
          fixed top-6 right-6 z-50 p-3 rounded-full
          bg-white/90 dark:bg-gray-800/90 backdrop-blur-md
          shadow-md border border-gray-200 dark:border-gray-700
          transition-all duration-300
          ${showHamburger ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Dropdown Menu - shows when hamburger is clicked */}
      <div className={`
          fixed top-20 right-6 z-40
          bg-white/90 dark:bg-gray-800/90 backdrop-blur-md
          rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700
          transition-all duration-300
          ${menuOpen && showHamburger ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}
        `}>
        <ul className="py-2 px-4 space-y-1 min-w-[160px] text-sm">
          <li>{navLink('/', 'Resume')}</li>
          <li>{navLink('/portfolio', 'Portfolio')}</li>
          <li>{navLink('/about', 'About')}</li>
          <li>{navLink('/contact', 'Contact')}</li>
          <li className="pt-2 border-t border-gray-200 dark:border-gray-700">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
