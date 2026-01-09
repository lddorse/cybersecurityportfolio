import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const location = useLocation();
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      
      if (currentScroll <= 0) {
        setNavbarVisible(true); // At top, always show
      } else if (currentScroll > lastScroll && currentScroll > 100) {
        setNavbarVisible(false); // Scrolling down, hide
      } else {
        setNavbarVisible(true); // Scrolling up, show
      }
      
      setLastScroll(currentScroll);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const navLink = (to, label) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
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
      {/* Navbar - Auto-hide on scroll for all screen sizes */}
      <div className={`
        fixed top-0 left-0 right-0 z-50 w-full bg-gray-200 dark:bg-gray-900
        transition-transform duration-300 ease-in-out
        ${navbarVisible ? 'translate-y-0' : '-translate-y-full'}
      `}>
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

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
