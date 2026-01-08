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
      
      // Show navbar when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide navbar when scrolling down (but only after 100px)
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
      className={`${
        location.pathname === to ? 'red-underline' : ''
      } hover:text-gray-600 dark:hover:text-gray-300 transition`}
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
      <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
        <ul className="flex gap-6 text-gray-800 dark:text-gray-200 text-sm font-medium items-center">
          <li>{navLink('/', 'Resume')}</li>
          <li>{navLink('/portfolio', 'Portfolio')}</li>
          <li>{navLink('/about', 'About')}</li>
          <li>{navLink('/contact', 'Contact')}</li>
          
          {/* Divider */}
          <li className="h-6 w-px bg-gray-300 dark:bg-gray-600"></li>
          
          {/* Dark Mode Toggle */}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
