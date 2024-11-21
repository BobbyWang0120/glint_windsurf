'use client';

import { mockCandidates } from '@/app/data/mockCandidates';
import Link from 'next/link';
import MatchScore from '@/app/components/MatchScore';

export default function ResultsPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          AI-Matched Candidates
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Here are the best matches for your job posting
        </p>
      </div>

      <div className="mt-12 space-y-6">
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

      <div className="mt-12 text-center">
        <Link
          href="/jobs"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800"
        >
          Back to Jobs
        </Link>
      </div>
    </div>
  );
}
