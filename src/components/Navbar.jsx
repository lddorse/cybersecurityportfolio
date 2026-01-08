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
      } 
      else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
        setMenuOpen(false); // Close menu when hiding nav
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  const navLink = (to, label) => (
    <Link
      to={to}
      onClick={() => setMenuOpen(false)}
      className={`
        transition-colors
        ${location.pathname === to 
          ? 'text-blue-600 dark:text-blue-400 font-semibold' 
          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
        }
      `}
    >
      {label}
    </Link>
  );

  return (
    <>
      {/* Main Navbar */}
      <nav 
        className={`
          fixed top-6 left-1/2 transform -translate-x-1/2 z-50
          transition-transform duration-300
          ${isVisible ? 'translate-y-0' : '-translate-y-24'}
        `}
      >
        <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
          <ul className="flex gap-8 text-sm font-medium items-center">
            <li>{navLink('/', 'Resume')}</li>
            <li>{navLink('/portfolio', 'Portfolio')}</li>
            <li>{navLink('/about', 'About')}</li>
            <li>{navLink('/contact', 'Contact')}</li>
            <li className="h-5 w-px bg-gray-300 dark:bg-gray-600 ml-2"></li>
            <li className="ml-2">
              <DarkModeToggle />
            </li>
          </ul>
        </div>
      </nav>

      {/* Hamburger Menu Button (shows when main nav is hidden) */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={`
          fixed top-6 right-6 z-50 p-3 rounded-full
          bg-white/95 dark:bg-gray-800/95 backdrop-blur-md
          shadow-lg border border-gray-200 dark:border-gray-700
          transition-all duration-300
          ${!isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'}
        `}
        aria-label="Toggle menu"
      >
        <svg 
          className="w-6 h-6 text-gray-700 dark:text-gray-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            // X icon
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            // Hamburger icon
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`
          fixed top-20 right-6 z-40
          bg-white/95 dark:bg-gray-800/95 backdrop-blur-md
          rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700
          transition-all duration-300
          ${menuOpen && !isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}
        `}
      >
        <ul className="py-2 px-4 space-y-1 min-w-[150px]">
          <li className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            {navLink('/', 'Resume')}
          </li>
          <li className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            {navLink('/portfolio', 'Portfolio')}
          </li>
          <li className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            {navLink('/about', 'About')}
          </li>
          <li className="py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            {navLink('/contact', 'Contact')}
          </li>
          <li className="border-t border-gray-200 dark:border-gray-700 my-2"></li>
          <li className="py-2 px-3 flex justify-center">
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
