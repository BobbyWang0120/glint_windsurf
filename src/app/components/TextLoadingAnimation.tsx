'use client';

export default function TextLoadingAnimation() {
  return (
    <div className="flex flex-col space-y-2">
      {/* 模拟多行文本的加载动画 */}
      {[...Array(6)].map((_, index) => (
        <div key={index} className="flex space-x-2">
          {/* 每行包含多个不同长度的加载块 */}
          {[...Array(index === 0 ? 4 : 3)].map((_, blockIndex) => (
            <div
              key={blockIndex}
              className={`h-4 bg-gray-200 rounded animate-pulse`}
              style={{
                width: `${Math.random() * 30 + (blockIndex === 0 ? 40 : 20)}%`,
                animationDelay: `${(index * 0.1)}s`
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
