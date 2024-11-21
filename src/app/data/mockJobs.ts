// 模拟的职位数据
import { Job } from '../types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Engineer',
    publishedAt: '2024-01-15',
    candidatesCount: 12,
    department: 'Engineering',
    location: 'San Francisco, CA',
    status: 'active',
  },
  {
    id: '2',
    title: 'Product Manager',
    publishedAt: '2024-01-14',
    candidatesCount: 8,
    department: 'Product',
    location: 'New York, NY',
    status: 'active',
  },
  {
    id: '3',
    title: 'UX Designer',
    publishedAt: '2024-01-13',
    candidatesCount: 15,
    department: 'Design',
    location: 'Remote',
    status: 'active',
  },
  {
    id: '4',
    title: 'Backend Engineer',
    publishedAt: '2024-01-12',
    candidatesCount: 10,
    department: 'Engineering',
    location: 'Seattle, WA',
    status: 'active',
  },
  {
    id: '5',
    title: 'Data Scientist',
    publishedAt: '2024-01-11',
    candidatesCount: 6,
    department: 'Data',
    location: 'Boston, MA',
    status: 'closed',
  },
];
