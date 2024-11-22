'use client';

import { useAuth } from './contexts/AuthContext';
import JobListings from './components/JobListings';
import { useEffect, useRef, useState } from 'react';
import { start } from 'repl';

// 模拟候选人数据
const mockCandidates = [
  { id: 1, name: "Sarah Chen", role: "Frontend Developer", match: "98%" },
  { id: 2, name: "Mike Johnson", role: "UX Designer", match: "95%" },
  { id: 3, name: "David Kim", role: "Product Manager", match: "93%" },
];

// 模拟翻译消息 - 添加一些较长的消息来测试布局
const translatedMessages = [
  { lang: '简体中文', text: '你好！很高兴认识你。' },
  { lang: '繁體中文', text: '你好！很高興認識你。' },
  { lang: 'Español', text: '¡Hola! Encantado de conocerte.' },
  { lang: '日本語', text: 'こんにちは！よろしくお願いします。' },
  { lang: '한국어', text: '안녕하세요! 만나서 반갑습니다.' },
];

// 视频会议翻译示例文本
const liveTranslationMessages = [
  { lang: '简体中文', text: '这次会议的主要目标是讨论新产品的发展方向。' },
  { lang: '繁體中文', text: '這次會議的主要目標是討論新產品的發展方向。' },
  { lang: 'Español', text: 'El objetivo principal de esta reunión es discutir la dirección del nuevo producto.' },
  { lang: '日本語', text: '今回の会議の主な目的は、新製品の開発方向について話し合うことです。' },
  { lang: '한국어', text: '이번 회의의 주요 목표는 새로운 제품의 개발 방향을 논의하는 것입니다.' },
];

export default function Home() {
  const { isLoggedIn, login } = useAuth();
  const [progress, setProgress] = useState(0);
  const [showCandidates, setShowCandidates] = useState(false);
  const [visibleCandidates, setVisibleCandidates] = useState<number[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentLiveIndex, setCurrentLiveIndex] = useState(0);
  const [streamText, setStreamText] = useState('');
  const streamRef = useRef<NodeJS.Timeout | null>(null);
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
  }, [progress, startAnimation]); // 添加 progress 作为依赖，以便能够从中断处继续

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      cleanupAnimation();
    };
  }, []);

  // 消息轮播效果
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % translatedMessages.length);
    }, 2000); // 改为2秒切换一次

    return () => clearInterval(messageInterval);
  }, []);

  // 流式文本效果
  useEffect(() => {
    const startStreaming = () => {
      const targetText = liveTranslationMessages[currentLiveIndex].text;
      let currentChar = 0;
      
      const stream = () => {
        if (currentChar <= targetText.length) {
          setStreamText(targetText.slice(0, currentChar));
          currentChar++;
          streamRef.current = setTimeout(stream, 50);
        } else {
          // 当前文本播放完成后，等待一段时间后切换到下一个
          setTimeout(() => {
            setCurrentLiveIndex((prev) => (prev + 1) % liveTranslationMessages.length);
          }, 1000);
        }
      };
      
      stream();
    };

    // 清理之前的定时器
    if (streamRef.current) {
      clearTimeout(streamRef.current);
    }
    
    // 开始新的流式效果
    startStreaming();

    return () => {
      if (streamRef.current) {
        clearTimeout(streamRef.current);
      }
    };
  }, [currentLiveIndex]);

  if (isLoggedIn) {
    return <JobListings />;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pb-24">
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
            <div className="bg-gray-50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 h-[400px] flex flex-col">
              <div className="flex-none">
                <div className="bg-black rounded-xl p-4 inline-block mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Interface Translation</h3>
                <p className="text-gray-600 mb-6">Use the platform in your preferred language</p>
              </div>
              <div className="flex-grow flex items-center">
                <div className="w-full h-full bg-white rounded-lg shadow-inner overflow-hidden">
                  <div className="h-full flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent animate-shine"></div>
                    <div className="text-center relative z-10">
                      <div className="text-sm font-medium text-gray-900">50+ Languages Supported</div>
                      <div className="text-xs text-gray-500 mt-1">Global accessibility for everyone</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Translation */}
            <div className="bg-gray-50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 h-[400px] flex flex-col">
              <div className="flex-none">
                <div className="bg-black rounded-xl p-4 inline-block mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Message Translation</h3>
                <p className="text-gray-600 mb-6">Chat in your native language</p>
              </div>
              <div className="flex-grow flex items-center">
                <div className="space-y-3 w-full">
                  <div className="flex justify-end">
                    <div className="bg-gray-200 rounded-lg px-4 py-2 max-w-xs">
                      Hello, nice to meet you!
                    </div>
                  </div>
                  <div className="flex justify-start relative">
                    <div className="bg-black text-white rounded-lg px-4 py-2 w-fit">
                      <div className="relative">
                        {translatedMessages.map((msg, index) => (
                          <div
                            key={msg.lang}
                            className={`transition-opacity duration-300 ${
                              index === currentMessageIndex ? 'opacity-100 relative' : 'opacity-0 absolute inset-0'
                            }`}
                          >
                            {msg.text}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Translation */}
            <div className="bg-gray-50 rounded-2xl p-8 transform hover:scale-105 transition-all duration-300 h-[400px] flex flex-col">
              <div className="flex-none">
                <div className="bg-black rounded-xl p-4 inline-block mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Live Translation</h3>
                <p className="text-gray-600 mb-6">Real-time translation during video calls</p>
              </div>
              <div className="flex-grow">
                <div className="bg-white rounded-lg p-4 h-full shadow-inner flex flex-col">
                  <div className="flex-none flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-500">Live</span>
                  </div>
                  <div className="flex-grow flex items-center">
                    <div className="font-mono text-sm text-gray-800 w-full">
                      {streamText}
                      <span className="animate-pulse">|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl text-white p-12 sm:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
          <div className="relative">
            <div className="sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your hiring process?
              </h2>
              <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-300">
                Join thousands of companies using Plink to find their perfect candidates. Start your journey today.
              </p>
            </div>
            <div className="mt-12 sm:mx-auto sm:max-w-lg sm:flex sm:justify-center">
              <button
                onClick={login}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-black bg-white hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-8 flex flex-col items-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">Plink</div>
            <p className="text-gray-500 text-sm text-center max-w-md">
              Revolutionizing talent acquisition through AI-powered matching and real-time communication solutions.
            </p>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400"> 2024 Plink. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
