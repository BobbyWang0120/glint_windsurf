'use client';

import { useState } from 'react';
import Link from 'next/link';
import MatchScore from '../../../../components/MatchScore';
import { mockCandidates, DetailedCandidate } from '../../../../data/mockCandidates';

export default function ResultsPage() {
  const [selectedCandidate, setSelectedCandidate] = useState(mockCandidates[0]);

  return (
    <div className="h-screen flex flex-col bg-white py-8">
      {/* 固定在顶部的标题部分 */}
      <div className="flex-none px-8 mb-8 border-b border-gray-200">
        <div className="flex items-start justify-between pb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">AI-Matched Candidates</h2>
            <p className="mt-1 text-sm text-gray-500">Found {mockCandidates.length} potential matches for your job posting</p>
          </div>
          <Link
            href="/jobs"
            className="flex-shrink-0 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
          >
            Back to Jobs
          </Link>
        </div>
      </div>

      {/* 可滚动的主内容区域 */}
      <div className="flex-1 flex min-h-0">
        {/* 左侧候选人列表 - 独立滚动 */}
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

        {/* 右侧详细信息 - 独立滚动 */}
        <div className="w-3/4">
          <div className="h-full overflow-y-auto p-8">
            <div className="space-y-8">
              {/* 保持其他内容不变... */}
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
