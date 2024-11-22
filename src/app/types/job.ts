// 职位信息的类型定义
export interface Job {
  id: string;
  title: string;
  publishedAt: string;
  candidatesCount: number;
  department: Department;
  location: string;
  status: 'active' | 'closed';
  description?: string; // 职位描述
}

// 部门选项
export const departments = [
  'Engineering',
  'Product',
  'Design',
  'Marketing',
  'Sales',
  'Human Resources',
  'Finance',
  'Operations',
  'Data',
  'Legal',
];

export type Department = typeof departments[number];
