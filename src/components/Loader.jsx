import React from "react";

const Loader = ({ message = "Processing..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      
      {/* Spinner */}
      <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Text */}
      <p className="text-sm text-gray-500 mt-3">
        {message}
      </p>

    </div>
  );
};

export default Loader;