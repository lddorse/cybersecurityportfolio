const FixedCardLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-gray-200 dark:bg-gray-900 pb-12">
      {/* Content Container */}
      <div className="max-w-[768px] mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg border border-gray-300 dark:border-gray-700 p-6">
          {children}
          
          {/* Footer */}
          <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2026 Leo D. Dorsey. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default FixedCardLayout;
