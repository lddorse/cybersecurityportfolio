import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const navLink = (to, label) => (
    <Link
      to={to}
      className={`${
        location.pathname === to ? 'red-underline' : ''
      }`}
    >
      {label}
    </Link>
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex gap-6 text-gray-800 text-sm font-medium items-center">
        <li>{navLink('/', 'Resume')}</li>
        <li>{navLink('/portfolio', 'Portfolio')}</li>
        <li>{navLink('/about', 'About')}</li>
        <li>{navLink('/contact', 'Contact')}</li>
      </ul>
    </nav>
  );
};

export default Navbar;