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

  return (
    <>
      {/* Desktop Nav: vertical on left */}
      <nav className="hidden sm:block fixed z-50 top-[calc(50%-297px+10px)] left-[calc(50%-384px-64px)]">
        <ul className="flex flex-col gap-4 text-gray-800 text-sm font-medium">
          <li>{navLink('/', 'Home')}</li>
          <li>{navLink('/portfolio', 'Portfolio')}</li>
          <li>{navLink('/about', 'About')}</li>
          <li>{navLink('/contact', 'Contact')}</li>
        </ul>
      </nav>

      {/* Mobile Nav: horizontal on top */}
      <nav className="sm:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <ul className="flex gap-6 text-gray-800 text-sm font-medium">
          <li>{navLink('/', 'Home')}</li>
          <li>{navLink('/portfolio', 'Portfolio')}</li>
          <li>{navLink('/about', 'About')}</li>
          <li>{navLink('/contact', 'Contact')}</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
