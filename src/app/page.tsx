'use client';

import { useAuth } from './contexts/AuthContext';
import JobListings from './components/JobListings';
import { useEffect, useRef, useState } from 'react';

// 模拟候选人数据
const mockCandidates = [
  { id: 1, name: "Sarah Chen", role: "Frontend Developer", match: "98%" },
  { id: 2, name: "Mike Johnson", role: "UX Designer", match: "95%" },
  { id: 3, name: "David Kim", role: "Product Manager", match: "93%" },
];

export default function Home() {
  const { isLoggedIn, login } = useAuth();
  const [progress, setProgress] = useState(0);
  const [showCandidates, setShowCandidates] = useState(false);
  const [visibleCandidates, setVisibleCandidates] = useState<number[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);
  const animationStartedRef = useRef(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // 清理函数
  const cleanupAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // 开始动画函数
  const startAnimation = () => {
    if (animationStartedRef.current) {
      // 如果动画已经完成过，直接恢复到完成状态
      if (progress === 100) {
        return;
      }
      // 如果动画被中断，从当前进度继续
      let currentProgress = progress;
      intervalRef.current = setInterval(() => {
        currentProgress += 1;
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          cleanupAnimation();
          setShowCandidates(true);
          // Show candidates with sequential fade in
          mockCandidates.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCandidates(prev => [...prev, index]);
            }, index * 400);
          });
        }
      }, 30);
    } else {
      // 首次开始动画
      animationStartedRef.current = true;
      let currentProgress = 0;
      intervalRef.current = setInterval(() => {
        currentProgress += 1;
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          cleanupAnimation();
          setShowCandidates(true);
          // Show candidates with sequential fade in
          mockCandidates.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCandidates(prev => [...prev, index]);
            }, index * 400);
          });
        }
      }, 30);
    }
  };

  useEffect(() => {
    if (!progressRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(progressRef.current);
    
    // 清理函数
    return () => {
      observer.disconnect();
      cleanupAnimation();
    };
  }, [progress]); // 添加 progress 作为依赖，以便能够从中断处继续

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      cleanupAnimation();
    };
  }, []);

  if (isLoggedIn) {
    return <JobListings />;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pb-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8">
              <span className="block">Global Talent Matching</span>
              <span className="block text-gray-600 mt-2">Powered by AI</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500 mb-10">
              Break language barriers and find your perfect candidates globally. Our AI-powered platform handles everything from matching to communication.
            </p>
            <div className="flex justify-center gap-6">
              <button 
                onClick={login}
                className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-all transform hover:scale-105 duration-200 shadow-lg"
              >
                Get Started
              </button>
              <button 
                onClick={login}
                className="border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-black hover:text-white transition-all transform hover:scale-105 duration-200"
              >
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Talent Matching Section */}
      <div className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">AI-Powered Talent Matching</h2>
            <p className="text-xl text-gray-500">Find the perfect match with unprecedented accuracy</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Features */}
            <div className="space-y-12">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-black rounded-lg p-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">95% Match Accuracy</h3>
                  <p className="text-gray-600">Our AI analyzes over 50 different factors to ensure the perfect fit</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-black rounded-lg p-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">75% Time Saved</h3>
                  <p className="text-gray-600">Reduce your hiring time from months to weeks</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-black rounded-lg p-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">60% Cost Reduction</h3>
                  <p className="text-gray-600">Save on recruitment fees and job posting costs</p>
                </div>
              </div>
            </div>
            
            {/* Right: Interactive Demo */}
            <div ref={progressRef} className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <div className="bg-gray-100 rounded-lg w-full h-[320px] flex items-center justify-center overflow-hidden">
                  {!showCandidates ? (
                    <div className="relative w-full h-full">
                      {/* Floating Profile Cards */}
                      <div className="absolute w-8 h-8 bg-black/5 rounded-md animate-float1" 
                           style={{ top: '15%', left: '25%' }}>
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute w-8 h-8 bg-black/5 rounded-md animate-float2" 
                           style={{ top: '65%', left: '70%' }}>
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute w-8 h-8 bg-black/5 rounded-md animate-float3" 
                           style={{ top: '30%', left: '75%' }}>
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-black/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      {/* Central Search Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-20 h-20 text-black/20 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full py-6 space-y-4 px-4">
                      {mockCandidates.map((candidate, index) => (
                        <div
                          key={candidate.id}
                          className={`flex items-center justify-between bg-white p-4 rounded-lg shadow opacity-0 ${
                            visibleCandidates.includes(index) ? 'animate-fadeIn' : ''
                          }`}
                        >
                          <div>
                            <div className="font-semibold">{candidate.name}</div>
                            <div className="text-sm text-gray-500">{candidate.role}</div>
                          </div>
                          <div className="text-green-500 font-semibold">{candidate.match}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black rounded-full transition-all duration-300 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{showCandidates ? 'Found matching candidates' : 'Scanning talent pool'}</span>
                  <span>{progress}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Translation Section */}
      <div className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Seamless Communication</h2>
            <p className="text-xl text-gray-500">Break language barriers with real-time AI translation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Interface Translation */}
            <div className="bg-gray-50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="bg-black rounded-xl p-4 inline-block mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12 21l-5-10-5 10M4 10l12-3 9 1 1 2-24 4-5 1 3 1 16-2 2-16-2-1-5-1-7 1-5-2-3-2-2-2-5 3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Interface Translation</h3>
              <p className="text-gray-600 mb-6">Use the platform in your preferred language</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">English</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">中文</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">日本語</span>
                <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">한국어</span>
              </div>
            </div>

            {/* Message Translation */}
            <div className="bg-gray-50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="bg-black rounded-xl p-4 inline-block mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Message Translation</h3>
              <p className="text-gray-600 mb-6">Chat in your native language</p>
              <div className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-black text-white rounded-lg px-4 py-2 max-w-xs">
                    你好，很高兴认识你！
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-200 rounded-lg px-4 py-2 max-w-xs">
                    Hello, nice to meet you too!
                  </div>
                </div>
              </div>
            </div>

            {/* Video Call Translation */}
            <div className="bg-gray-50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="bg-black rounded-xl p-4 inline-block mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Video Call Translation</h3>
              <p className="text-gray-600 mb-6">Real-time interview interpretation</p>
              <div className="bg-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500">Live Translation</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1 bg-black rounded-full"></div>
                  <div className="h-1 bg-black rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-gray-400">Match Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-gray-400">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">75%</div>
              <div className="text-gray-400">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">60%</div>
              <div className="text-gray-400">Cost Saved</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Recruitment?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of companies who have already revolutionized their hiring process with AI.
          </p>
          <button 
            onClick={login}
            className="bg-white text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105 duration-200"
          >
            Start Recruiting Now
          </button>
        </div>
      </div>
    </div>
  );
}
