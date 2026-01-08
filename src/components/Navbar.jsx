import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
        setMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLink = (to, label) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        onClick={() => setMenuOpen(false)}
        className={`
          px-3 py-1 rounded-md transition-colors
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
      {/* Main Navbar */}
      <nav
        className={`
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          w-[calc(100vw-2rem)] sm:w-full sm:max-w-5xl
          transition-transform duration-300 ease-out
          ${isVisible ? 'translate-y-0' : '-translate-y-24'}
        `}
      >
        <div className="
          bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
          px-4 py-2 sm:px-6 sm:py-3 rounded-xl
          shadow-sm border border-gray-200 dark:border-gray-700
        ">
          <ul className="flex items-center gap-6 text-[13px] font-medium tracking-wide flex-nowrap sm:flex-nowrap">
            <li>{navLink('/', 'Resume')}</li>
            <li>{navLink('/portfolio', 'Portfolio')}</li>
            <li>{navLink('/about', 'About')}</li>
            <li>{navLink('/contact', 'Contact')}</li>

            <li className="h-4 w-px bg-gray-200 dark:bg-gray-700 mx-1" />

            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        className={`
          fixed top-6 right-6 z-50 p-3 rounded-full
          bg-white/90 dark:bg-gray-800/90 backdrop-blur-md
          shadow-sm border border-gray-200 dark:border-gray-700
          transition-all duration-300 ease-out
          ${!isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-24 opacity-0 pointer-events-none'
          }
        `}
      >
        <svg
          className="w-5 h-5 text-gray-700 dark:text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
          fixed top-20 right-6 z-40
          bg-white/90 dark:bg-gray-800/90 backdrop-blur-md
          rounded-2xl shadow-md
          border border-gray-200 dark:border-gray-700
          transition-all duration-300 ease-out
          ${menuOpen && !isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-4 opacity-0 pointer-events-none'
          }
        `}
      >
        <ul className="py-2 px-4 space-y-1 min-w-[160px] text-sm">
          <li className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            {navLink('/', 'Resume')}
          </li>
          <li className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            {navLink('/portfolio', 'Portfolio')}
          </li>
          <li className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            {navLink('/about', 'About')}
          </li>
          <li className="rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            {navLink('/contact', 'Contact')}
          </li>

          <li className="border-t border-gray-200 dark:border-gray-700 my-2" />

          <li className="flex justify-center py-1">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
