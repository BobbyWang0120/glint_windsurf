'use client';

import React from 'react';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-50">
      <div className="relative">
        {/* 主要加载圆环 */}
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin border-t-gray-800 dark:border-gray-700 dark:border-t-gray-200"></div>
        
        {/* 加载文字 */}
        <div className="mt-4 text-center text-gray-800 dark:text-gray-200 font-mono text-sm">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
