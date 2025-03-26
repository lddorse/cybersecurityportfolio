const FixedCardLayout = ({ children }) => {
    return (
      <div className="relative h-screen bg-gray-200">
        <div
          className="
            fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            w-full max-w-[768px] h-[90vh] sm:h-[595px]
            bg-white shadow-xl rounded-xl z-20 border border-gray-300 overflow-y-auto
            px-4 sm:px-6 py-6 text-left
          "
        >
          {children}
        </div>
      </div>
    );
  };
  
  export default FixedCardLayout;
  