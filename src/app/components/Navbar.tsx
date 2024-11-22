'use client';

import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import LoadingAnimation from './LoadingAnimation';

export default function Navbar() {
  const { isLoggedIn, login, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthAction = async (action: 'login' | 'signup') => {
    setIsLoading(true);
    
    // 等待1秒
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 执行登录操作
    login();
    
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingAnimation />}
      <nav className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-semibold hover:text-gray-600 transition-colors">
                Plink
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <>
                  <span className="text-sm text-gray-500">Welcome, John Doe</span>
                  <button 
                    onClick={logout}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="space-x-4">
                  <button 
                    onClick={() => handleAuthAction('login')}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => handleAuthAction('signup')}
                    className="text-sm bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
