interface TypingStatsProps {
  stats: {
    timeElapsed: number
    accuracy: number
    wpm: number
    currentProgress: string
  }
}

export default function TypingStats({ stats }: TypingStatsProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-6 justify-center">
      {/* 时间统计 */}
      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-sm text-gray-600">时间:</span>
        <span className="font-mono font-semibold">{stats.timeElapsed}s</span>
      </div>

      {/* 准确率统计 */}
      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-sm text-gray-600">准确率:</span>
        <span className="font-mono font-semibold">{stats.accuracy}%</span>
      </div>

      {/* 速度统计 */}
      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span className="text-sm text-gray-600">速度:</span>
        <span className="font-mono font-semibold">{stats.wpm} WPM</span>
      </div>

      {/* 进度统计 */}
      <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
        <span className="text-sm text-gray-600">进度:</span>
        <span className="font-mono font-semibold">{stats.currentProgress}</span>
      </div>
    </div>
  )
}
