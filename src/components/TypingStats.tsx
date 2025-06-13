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
    <div className="flex justify-center">
      <div className="bg-white rounded-lg p-4 border-2 border-gray-300 shadow-lg w-full max-w-4xl h-[80px] flex items-center justify-center">
        <div className="grid grid-cols-4 gap-8 w-full">
          {/* 时间统计 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">时间</span>
            </div>
            <span className="font-mono font-bold text-lg text-gray-800">{stats.timeElapsed}s</span>
          </div>

          {/* 准确率统计 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">准确率</span>
            </div>
            <span className="font-mono font-bold text-lg text-gray-800">{stats.accuracy}%</span>
          </div>

          {/* 速度统计 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">速度</span>
            </div>
            <span className="font-mono font-bold text-lg text-gray-800">{stats.wpm} WPM</span>
          </div>

          {/* 进度统计 */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-4 h-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-xs text-gray-600 font-medium">进度</span>
            </div>
            <span className="font-mono font-bold text-lg text-gray-800">{stats.currentProgress}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
