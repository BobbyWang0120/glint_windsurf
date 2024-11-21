'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LoadingPage() {
  const router = useRouter();

  useEffect(() => {
    // 5秒后跳转到结果页面
    const timer = setTimeout(() => {
      router.push('/jobs/1/matching/results');  // 使用模拟的job id
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        {/* 加载动画 */}
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-full h-full border-4 border-gray-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-black rounded-full animate-spin border-t-transparent"></div>
          </div>
        </div>
        
        {/* 加载文本 */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">AI Matching in Progress</h2>
          <p className="text-gray-500">
            Searching for the best candidates in our talent pool...
          </p>
        </div>

        {/* 加载步骤 */}
        <div className="space-y-2 text-sm text-gray-500">
          <p>✓ Analyzing job requirements</p>
          <p className="animate-pulse">⋯ Evaluating candidate profiles</p>
          <p>Calculating match scores</p>
        </div>
      </div>
    </main>
  );
}
