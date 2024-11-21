'use client';

import { mockCandidates } from '@/app/data/mockCandidates';
import Link from 'next/link';

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 顶部导航栏 */}
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

      {/* 主要内容区域 */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">AI-Matched Candidates</h2>
              <p className="mt-1 text-sm text-gray-500">
                Found {mockCandidates.length} matching candidates for this position
              </p>
            </div>
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center"
            >
              ← Back to job listings
            </Link>
          </div>
        </div>

        {/* 候选人列表 */}
        <div className="space-y-4">
          {mockCandidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {candidate.firstName} {candidate.lastName}
                  </h3>
                </div>
                <div className="flex items-center space-x-6">
                  {/* 技术匹配度 */}
                  <div className="text-center">
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#000"
                          strokeWidth="3"
                          strokeDasharray={`${candidate.matchScore.technical}, 100`}
                        />
                        <text x="18" y="20.35" className="text-xs" textAnchor="middle" fill="currentColor">
                          {candidate.matchScore.technical}%
                        </text>
                      </svg>
                      <div className="mt-1 text-xs text-gray-500">Technical</div>
                    </div>
                  </div>
                  
                  {/* 经验匹配度 */}
                  <div className="text-center">
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#000"
                          strokeWidth="3"
                          strokeDasharray={`${candidate.matchScore.experience}, 100`}
                        />
                        <text x="18" y="20.35" className="text-xs" textAnchor="middle" fill="currentColor">
                          {candidate.matchScore.experience}%
                        </text>
                      </svg>
                      <div className="mt-1 text-xs text-gray-500">Experience</div>
                    </div>
                  </div>

                  {/* 总体匹配度 */}
                  <div className="text-center">
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845
                            a 15.9155 15.9155 0 0 1 0 31.831
                            a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#000"
                          strokeWidth="3"
                          strokeDasharray={`${candidate.matchScore.overall}, 100`}
                        />
                        <text x="18" y="20.35" className="text-xs" textAnchor="middle" fill="currentColor">
                          {candidate.matchScore.overall}%
                        </text>
                      </svg>
                      <div className="mt-1 text-xs text-gray-500">Overall</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
