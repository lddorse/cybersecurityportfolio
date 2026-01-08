import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      else if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  const navLink = (to, label) => (
    <Link
      to={to}
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
  );
};

export default Navbar;
