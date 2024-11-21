// 模拟的候选人数据
import { Candidate } from '../types/candidate';

export const mockCandidates: Candidate[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    matchScore: {
      technical: 95,
      experience: 88,
      overall: 92
    }
  },
  {
    id: '2',
    firstName: 'Emma',
    lastName: 'Johnson',
    matchScore: {
      technical: 89,
      experience: 92,
      overall: 90
    }
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Brown',
    matchScore: {
      technical: 78,
      experience: 85,
      overall: 81
    }
  },
  {
    id: '4',
    firstName: 'Sarah',
    lastName: 'Davis',
    matchScore: {
      technical: 92,
      experience: 75,
      overall: 84
    }
  },
  {
    id: '5',
    firstName: 'David',
    lastName: 'Wilson',
    matchScore: {
      technical: 85,
      experience: 90,
      overall: 87
    }
  },
  {
    id: '6',
    firstName: 'Lisa',
    lastName: 'Anderson',
    matchScore: {
      technical: 88,
      experience: 82,
      overall: 85
    }
  }
];
