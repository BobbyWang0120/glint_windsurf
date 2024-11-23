'use client';

import { useState } from 'react';
import Link from 'next/link';
import MatchScore from '../../../../components/MatchScore';
import { mockCandidates, DetailedCandidate } from '../../../../data/mockCandidates';

export default function ResultsPage() {
  const [selectedCandidate, setSelectedCandidate] = useState(mockCandidates[0]);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col bg-white">
      {/* 固定在顶部的标题部分 */}
      <div className="flex-none px-4 sm:px-8 py-4 sm:py-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">AI-Matched Candidates</h1>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-500">Found {mockCandidates.length} potential matches</p>
          </div>
          <Link
            href="/jobs"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-black text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-all"
          >
            Back to Jobs
          </Link>
        </div>
      </div>

      {/* 移动端：可切换的列表和详情视图 */}
      <div className="md:hidden flex-1 flex flex-col min-h-0">
        {!showDetails ? (
          // 候选人列表视图
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3">
            {mockCandidates.map((candidate) => (
              <div
                key={candidate.id}
                onClick={() => {
                  setSelectedCandidate(candidate);
                  setShowDetails(true);
                }}
                className="bg-white rounded-lg shadow-sm p-4 space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium text-lg">{candidate.firstName} {candidate.lastName}</div>
                    <div className="text-gray-500">{candidate.role}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-semibold">{candidate.matchScore}%</span>
                    <span className="text-sm text-gray-500">match</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 flex items-center space-x-2">
                  <span>{candidate.location}</span>
                  <span>•</span>
                  <span>{candidate.yearsOfExperience} years</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700"
                    >
                      {skill.name}
                    </span>
                  ))}
                  {candidate.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                      +{candidate.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto">
            {/* 移除了返回按钮区域的border-b */}
            <div className="sticky top-0 z-10 bg-white px-4 py-3">
              <button
                onClick={() => setShowDetails(false)}
                className="flex items-center text-gray-500 hover:text-gray-700"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to list
              </button>
            </div>
            <div className="px-4 py-4 space-y-6">
              {/* 保持候选人详情代码不变... */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {selectedCandidate.firstName} {selectedCandidate.lastName}
                    </h2>
                    <p className="text-lg text-gray-600">{selectedCandidate.role}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{selectedCandidate.matchScore}%</div>
                    <div className="text-sm text-gray-500">match</div>
                  </div>
                </div>
                <p className="text-gray-500">
                  {selectedCandidate.location} • {selectedCandidate.yearsOfExperience} years of experience
                </p>
              </div>

              {/* 概述 */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Summary</h3>
                <p className="text-gray-600">{selectedCandidate.summary}</p>
              </div>

              {/* 技能 */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCandidate.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {skill.name} • {skill.level}
                    </span>
                  ))}
                </div>
              </div>

              {/* 工作经验 */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Experience</h3>
                <div className="space-y-4">
                  {selectedCandidate.experience.map((exp) => (
                    <div key={exp.company} className="border-l-2 border-gray-200 pl-4">
                      <div className="font-medium">{exp.role}</div>
                      <div className="text-gray-600">{exp.company}</div>
                      <div className="text-sm text-gray-500 mb-2">{exp.duration}</div>
                      <ul className="space-y-1">
                        {exp.description.map((desc, index) => (
                          <li key={index} className="text-gray-600 text-sm">• {desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 教育背景 */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <div className="space-y-3">
                  {selectedCandidate.education.map((edu) => (
                    <div key={edu.school} className="border-l-2 border-gray-200 pl-4">
                      <div className="font-medium">{edu.degree}</div>
                      <div className="text-gray-600">{edu.school}</div>
                      <div className="text-sm text-gray-500">{edu.year}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 语言能力 */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCandidate.languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {lang.name} • {lang.level}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 桌面端：左右分栏布局 */}
      <div className="hidden md:flex flex-1 min-h-0">
        {/* 左侧候选人列表 */}
        <div className="w-1/4 border-r border-gray-200">
          <div className="h-full overflow-y-auto p-4 space-y-2">
            {mockCandidates.map((candidate) => (
              <div
                key={candidate.id}
                onClick={() => setSelectedCandidate(candidate)}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                  selectedCandidate.id === candidate.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white hover:bg-gray-50 shadow'
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="font-medium truncate">{candidate.firstName} {candidate.lastName}</div>
                  <div className={`text-sm truncate ${
                    selectedCandidate.id === candidate.id ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {candidate.role}
                  </div>
                </div>
                <div className={`ml-3 flex-shrink-0 text-lg font-medium ${
                  selectedCandidate.id === candidate.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {candidate.matchScore}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧详细信息 */}
        <div className="w-3/4">
          <div className="h-full overflow-y-auto p-8">
            <div className="space-y-8">
              {/* 头部信息 */}
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">
                    {selectedCandidate.firstName} {selectedCandidate.lastName}
                  </h2>
                  <p className="text-lg text-gray-600 mt-1">{selectedCandidate.role}</p>
                  <p className="text-gray-500 mt-2">
                    {selectedCandidate.location} • {selectedCandidate.yearsOfExperience} years of experience
                  </p>
                </div>
                <MatchScore value={selectedCandidate.matchScore} />
              </div>

              {/* 概述 */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Summary</h3>
                <p className="text-gray-600">{selectedCandidate.summary}</p>
              </div>

              {/* 技能 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCandidate.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {skill.name} • {skill.level}
                    </span>
                  ))}
                </div>
              </div>

              {/* 工作经验 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Experience</h3>
                <div className="space-y-6">
                  {selectedCandidate.experience.map((exp) => (
                    <div key={exp.company}>
                      <div className="flex justify-between">
                        <div>
                          <h4 className="font-medium">{exp.role}</h4>
                          <p className="text-gray-600">{exp.company}</p>
                        </div>
                        <span className="text-gray-500">{exp.duration}</span>
                      </div>
                      <ul className="mt-2 space-y-1">
                        {exp.description.map((desc, index) => (
                          <li key={index} className="text-gray-600">• {desc}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* 教育背景 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Education</h3>
                <div className="space-y-3">
                  {selectedCandidate.education.map((edu) => (
                    <div key={edu.school} className="flex justify-between">
                      <div>
                        <div className="font-medium">{edu.degree}</div>
                        <div className="text-gray-600">{edu.school}</div>
                      </div>
                      <span className="text-gray-500">{edu.year}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 语言能力 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedCandidate.languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {lang.name} • {lang.level}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
