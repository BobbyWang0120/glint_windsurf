'use client';

import { mockCandidates } from '../../../../data/mockCandidates';
import Link from 'next/link';
import MatchScore from '../../../../components/MatchScore';

export default function ResultsPage() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* 页面标题和操作按钮 */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI-Matched Candidates</h2>
          <p className="mt-1 text-sm text-gray-500">Found {mockCandidates.length} potential matches for your job posting</p>
        </div>
        <Link
          href="/jobs"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Back to Jobs
        </Link>
      </div>

      <div className="space-y-6">
        {mockCandidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center space-x-6">
              {/* Avatar placeholder */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-medium overflow-hidden">
                  {candidate.firstName[0]}
                  {candidate.lastName[0]}
                </div>
              </div>

              {/* Candidate info */}
              <div className="flex-grow">
                <h3 className="text-xl font-medium text-gray-900">
                  {candidate.firstName} {candidate.lastName}
                </h3>
              </div>

              {/* Match score */}
              <div className="flex-shrink-0">
                <MatchScore value={candidate.matchScore} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
