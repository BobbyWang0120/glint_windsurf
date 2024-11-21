// 职位信息的类型定义
export interface Job {
  id: string;
  title: string;
  publishedAt: string;
  candidatesCount: number;
  department: string;
  location: string;
  status: 'active' | 'closed';
}
