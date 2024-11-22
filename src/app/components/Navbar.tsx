'use client';

import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingAnimation from './LoadingAnimation';

export default function Navbar() {
  const { isLoggedIn, login, logout } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  const handleLogin = async () => {
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
            <div className="flex items-center space-x-6">
              {isLoggedIn ? (
                <>
                  {pathname === '/' ? (
                    <Link 
                      href="/jobs" 
                      className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 duration-200 shadow-sm"
                    >
                      Go to Glint
                    </Link>
                  ) : (
                    <span className="text-sm font-medium text-gray-700">Welcome, Glint</span>
                  )}
                  <button 
                    onClick={logout}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors border-l pl-6 border-gray-200"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex items-center space-x-6">
                  <button 
                    onClick={handleLogin}
                    className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 duration-200 shadow-sm"
                  >
                    Login
                  </button>
                  <button 
                    onClick={handleLogin}
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors border-l pl-6 border-gray-200"
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
