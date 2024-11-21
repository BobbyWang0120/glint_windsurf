// 候选人类型定义
export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  matchScore: {
    technical: number;  // 技术匹配度 0-100
    experience: number; // 经验匹配度 0-100
    overall: number;    // 总体匹配度 0-100
  };
}
