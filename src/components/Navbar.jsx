// ... imports remain the same

const Navbar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If scrolling down, hide the main nav bar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // If scrolling up or at top, show the main nav bar
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // navLink helper remains the same...

  return (
    <>
      {/* Main Nav: Changed to 'sticky' */}
      <nav
        className={`
          sticky top-6 left-1/2 -translate-x-1/2 z-50
          w-full max-w-[768px] px-4 sm:px-6
          transition-all duration-300 ease-in-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20 pointer-events-none'}
        `}
      >
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

      {/* Hamburger Button: Remains 'fixed' so it stays accessible when nav hides */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        className={`
          fixed top-6 right-6 z-50 p-3 rounded-full
          bg-white/90 dark:bg-gray-800/90 backdrop-blur-md
          shadow-md border border-gray-200 dark:border-gray-700
          transition-all duration-300
          ${isVisible ? 'opacity-0 pointer-events-none' : 'opacity-100'}
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

      {/* Dropdown Menu remains fixed at the top right */}
      <div className={`
          fixed top-20 right-6 z-40
          bg-white/90 dark:bg-gray-800/90 backdrop-blur-md
          rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700
          transition-all duration-300
          ${menuOpen && !isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}
        `}>
        {/* Dropdown list content same as before */}
      </div>
    </>
  );
};
