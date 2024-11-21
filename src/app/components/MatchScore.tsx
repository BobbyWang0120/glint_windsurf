'use client';

interface MatchScoreProps {
  value: number;
}

export default function MatchScore({ value }: MatchScoreProps) {
  // 设置圆环的基本参数
  const radius = 48; // 增加半径使组件更大
  const strokeWidth = 3; // 稍微减小线条宽度使其更精致
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative inline-flex items-center justify-center p-2">
        {/* 背景圆环 */}
        <svg 
          height={radius * 2} 
          width={radius * 2} 
          className="transform -rotate-90"
        >
          <circle
            stroke="#F3F4F6"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          {/* 前景圆环 */}
          <circle
            stroke="#111827"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            style={{ strokeDashoffset }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-500 ease-in-out"
          />
        </svg>
        {/* 分数文本 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-0.5">
          <span className="text-2xl font-semibold text-gray-900 tracking-tight">
            {value}
          </span>
          <span className="text-[10px] font-medium text-gray-500 tracking-wider">
            MATCH
          </span>
        </div>
      </div>
    </div>
  );
}
