'use client';

import React from 'react';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0">
          <div className="w-full h-full border-4 border-gray-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-black rounded-full animate-spin border-t-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
