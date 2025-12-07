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
        <li>{navLink('/', 'Home')}</li>
        <li>{navLink('/portfolio', 'Portfolio')}</li>
        <li>{navLink('/resume', 'Resume')}</li>
        <li>{navLink('/about', 'About')}</li>
        <li>{navLink('/contact', 'Contact')}</li>
        <li className="no-print">
          <button
            onClick={handlePrint}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs"
            title="Print/Save as PDF"
          >
            📄 PDF
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;