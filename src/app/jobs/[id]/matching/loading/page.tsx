'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// 加载步骤的状态类型
type Step = {
  text: string;
  status: 'pending' | 'loading' | 'completed';
};

export default function LoadingPage() {
  const router = useRouter();
  const [steps, setSteps] = useState<Step[]>([
    { text: 'Analyzing job requirements', status: 'pending' },
    { text: 'Evaluating candidate profiles', status: 'pending' },
    { text: 'Calculating match scores', status: 'pending' },
  ]);

  useEffect(() => {
    // 第一步：分析职位要求 (立即开始)
    setSteps(prev => prev.map((step, index) => 
      index === 0 ? { ...step, status: 'loading' } : step
    ));

    // 1秒后完成第一步，开始第二步
    const timer1 = setTimeout(() => {
      setSteps(prev => prev.map((step, index) => {
        if (index === 0) return { ...step, status: 'completed' };
        if (index === 1) return { ...step, status: 'loading' };
        return step;
      }));
    }, 1000);

    // 2.5秒后完成第二步，开始第三步
    const timer2 = setTimeout(() => {
      setSteps(prev => prev.map((step, index) => {
        if (index === 1) return { ...step, status: 'completed' };
        if (index === 2) return { ...step, status: 'loading' };
        return step;
      }));
    }, 2500);

    // 4秒后完成第三步
    const timer3 = setTimeout(() => {
      setSteps(prev => prev.map(step => ({ ...step, status: 'completed' })));
    }, 4000);

    // 5秒后跳转到结果页面
    const timer4 = setTimeout(() => {
      router.push('/jobs/1/matching/results');
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [router]);

  // 根据状态返回相应的图标
  const getStepIcon = (status: Step['status']) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'loading':
        return '⋯';
      default:
        return '○';
    }
  };

  return (
    <main className="h-[calc(100vh-64px)] bg-background flex items-center justify-center">
      <div className="text-center space-y-12 w-[400px]">
        {/* 加载动画 */}
        <div className="flex justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0">
              <div className="w-full h-full border-4 border-gray-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-black rounded-full animate-spin border-t-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* 加载文本 */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">AI Matching in Progress</h2>
          <p className="text-gray-500">
            Searching for the best candidates in our talent pool...
          </p>
        </div>

        {/* 加载步骤 - 内部左对齐 */}
        <div className="inline-block text-left space-y-3 text-sm">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center space-x-3
                ${step.status === 'completed' ? 'text-green-600' :
                  step.status === 'loading' ? 'text-black animate-pulse' :
                  'text-gray-400'}`}
            >
              <span className="w-4 flex-shrink-0">{getStepIcon(step.status)}</span>
              <span>{step.text}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
