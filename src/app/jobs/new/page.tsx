'use client';

import { useState } from 'react';
import { departments } from '@/app/types/job';
import Link from 'next/link';
import Select from '@/app/components/Select';
import TextLoadingAnimation from '@/app/components/TextLoadingAnimation';
import { useRouter } from 'next/navigation';

// 预设的职位描述文本
const ENHANCED_DESCRIPTION = `We are seeking a talented professional to join our dynamic team. The ideal candidate will:

• Drive innovation and excellence in their area of expertise
• Collaborate effectively with cross-functional teams
• Contribute to the company's growth and success
• Demonstrate strong problem-solving abilities
• Maintain high standards of quality in all deliverables

This role offers opportunities for professional growth and the chance to work on impactful projects in a supportive environment.`;

export default function NewJobPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    location: '',
    description: '',
  });
  const [isEnhancing, setIsEnhancing] = useState(false);

  // 处理表单输入变化
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 处理AI润色
  const handleEnhanceDescription = () => {
    setIsEnhancing(true);
    // 清空当前描述
    setFormData((prev) => ({ ...prev, description: '' }));
    
    // 1秒后显示增强的描述
    setTimeout(() => {
      setFormData((prev) => ({ ...prev, description: ENHANCED_DESCRIPTION }));
      setIsEnhancing(false);
    }, 1000);
  };

  // 处理表单提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里暂时只打印表单数据
    console.log('Form submitted:', formData);
    // 跳转到加载页面
    router.push('/jobs/1/matching/loading');  // 使用模拟的job id
  };

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col bg-white">
      {/* 修改标题区域的样式，与JobListings保持一致 */}
      <div className="flex-none px-8 py-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Post New Job</h1>
            <p className="mt-2 text-base text-gray-500">Create a new job posting for your organization</p>
          </div>
          <Link
            href="/jobs"
            className="inline-flex items-center px-6 py-3 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-all"
          >
            Back to Jobs
          </Link>
        </div>
      </div>

      {/* 表单内容区域 */}
      <div className="flex-1 min-h-0 px-8">
        <div className="h-full overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            {/* 职位名称 */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* 部门 */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                Department
              </label>
              <Select
                name="department"
                id="department"
                required
                value={formData.department}
                onChange={(value) => handleChange({ target: { name: 'department', value } } as any)}
                options={departments}
                placeholder="Select a department"
              />
            </div>

            {/* 地点 */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                required
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            {/* 职位描述 */}
            <div className="relative">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Job Description
              </label>
              <div className="mt-1 relative">
                {isEnhancing ? (
                  <div className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm min-h-[200px]">
                    <TextLoadingAnimation />
                  </div>
                ) : (
                  <textarea
                    name="description"
                    id="description"
                    required
                    rows={8}
                    value={formData.description}
                    onChange={handleChange}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  />
                )}
                <button
                  type="button"
                  onClick={handleEnhanceDescription}
                  disabled={isEnhancing}
                  className={`absolute bottom-2 right-2 p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity`}
                  title="Enhance with AI"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* 提交按钮 */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-all"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
