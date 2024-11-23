'use client';

import { mockJobs } from '../data/mockJobs';
import Link from 'next/link';

export default function JobListings() {
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col bg-white">
      {/* 页面标题和操作按钮 */}
      <div className="flex-none px-8 py-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Job Listings</h1>
            <p className="mt-2 text-base text-gray-500">Manage your job postings and track candidates</p>
          </div>
          <Link
            href="/jobs/new"
            className="inline-flex items-center px-6 py-3 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-all"
          >
            Post New Job
          </Link>
        </div>
      </div>

      {/* 职位列表 - 可滚动区域 */}
      <div className="flex-1 min-h-0 px-8">
        <div className="h-full overflow-y-auto">
          {/* 添加水平滚动容器 */}
          <div className="overflow-x-auto">
            {/* 设置表格最小宽度 */}
            <div className="inline-block min-w-full shadow-sm rounded-lg overflow-hidden">
              <div className="min-w-[800px]">
                <table className="w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="w-16 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <span className="sr-only">AI Match</span>
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Job Title
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Published
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Candidates
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockJobs.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link 
                            href={`/jobs/${job.id}/matching/loading`}
                            className="inline-flex items-center justify-center w-8 h-8 text-black hover:text-gray-700 transition-colors"
                          >
                            <svg 
                              className="w-5 h-5" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={1.5} 
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 12a2 2 0 100-4 2 2 0 000 4z"
                              />
                            </svg>
                          </Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{job.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{job.department}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{job.location}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{job.publishedAt}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{job.candidatesCount}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {job.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
