const FixedCardLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-gray-200 dark:bg-gray-900">
      {/* Top Fade Overlay */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-200/95 dark:from-gray-900/95 to-transparent z-30 pointer-events-none" />
      
      {/* Fixed Card Container - Full Width */}
      <div
        className="
          fixed 
          top-20
          left-0
          w-full
          h-[calc(100vh-5rem)]
          bg-white dark:bg-gray-800 
          shadow-xl z-20 
          border-t border-gray-300 dark:border-gray-700 
          overflow-y-auto
          px-4 sm:px-6 py-6 text-left
        "
      >
        {/* Content Wrapper - Max Width */}
        <div className="max-w-[768px] mx-auto">
          {children}
          
          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2026 Leo D. Dorsey. All rights reserved.</p>
            {/* Add links, social icons, etc. */}
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FixedCardLayout;
