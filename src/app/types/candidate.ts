// 候选人类型定义
export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  matchScore: number;  // 只保留一个总体匹配分数
}
