'use client';

export default function LandingPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Powered Talent Matching
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Find the perfect candidates for your positions using advanced AI matching technology. 
            Save time and resources while making better hiring decisions.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.reload();
              }}
              className="bg-black text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Get Started
            </button>
            <button 
              onClick={() => {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.reload();
              }}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">AI-Powered Matching</h3>
              <p className="text-gray-600">
                Our advanced AI algorithms ensure the best match between candidates and positions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Time Saving</h3>
              <p className="text-gray-600">
                Reduce hiring time by up to 75% with automated candidate matching.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Better Matches</h3>
              <p className="text-gray-600">
                Find candidates who truly fit your company culture and job requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
