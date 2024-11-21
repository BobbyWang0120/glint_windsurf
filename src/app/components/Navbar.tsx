'use client';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold">AI Talent Hub</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Welcome, John Doe</span>
            <button className="text-sm text-gray-500 hover:text-gray-700">Logout</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
