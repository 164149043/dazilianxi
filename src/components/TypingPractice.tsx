import { useState, useEffect, useCallback } from 'react'
import TypingStats from './TypingStats'
import VirtualKeyboard from './VirtualKeyboard'
import { soundManager, type SoundTheme } from '../utils/soundManager'

// 练习文本数据
const practiceTexts = [
  "ffjj fjf ffjj fjj ffjf fjf jj ffjj ffjj fjf jff",
  "asdf jkl; asdf jkl; asdf jkl; asdf jkl; asdf jkl;",
  "the quick brown fox jumps over the lazy dog",
  "练习中文打字能力，提高打字速度和准确率"
]

export default function TypingPractice() {
  const [currentText, setCurrentText] = useState(practiceTexts[0])
  const [userInput, setUserInput] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startTime, setStartTime] = useState<number>(Date.now())
  const [errors, setErrors] = useState(0)
  const [totalChars, setTotalChars] = useState(0)
  const [currentTime, setCurrentTime] = useState(Date.now())
  const [hasError, setHasError] = useState(false)
  const [showCorrectKey, setShowCorrectKey] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [soundTheme, setSoundTheme] = useState<SoundTheme>('mechanical')

  // 实时更新时间
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now())
    }, 100) // 每100ms更新一次

    return () => clearInterval(timer)
  }, [])

  // 计算统计数据
  const calculateStats = useCallback(() => {
    const timeElapsed = (currentTime - startTime) / 1000
    const accuracy = totalChars > 0 ? ((totalChars - errors) / totalChars) * 100 : 100
    const wpm = timeElapsed > 0 ? (userInput.length / 5) / (timeElapsed / 60) : 0

    return {
      timeElapsed: Math.floor(timeElapsed),
      accuracy: Math.round(accuracy * 10) / 10,
      wpm: Math.round(wpm * 10) / 10,
      currentProgress: `${currentIndex}/${currentText.length}`
    }
  }, [currentTime, startTime, totalChars, errors, userInput.length, currentIndex, currentText.length])

  // 处理键盘输入
  const handleKeyPress = useCallback((char: string) => {
    const expectedChar = currentText[currentIndex]

    if (char === expectedChar) {
      setUserInput(prev => prev + char)
      setCurrentIndex(prev => prev + 1)
      setTotalChars(prev => prev + 1)
      setHasError(false)
      setShowCorrectKey(false)

      // 播放正确输入音效
      if (soundEnabled) {
        if (char === ' ') {
          soundManager.playKeySound('space')
        } else {
          soundManager.playKeySound('correct')
        }
      }
    } else {
      setErrors(prev => prev + 1)
      setTotalChars(prev => prev + 1)
      setHasError(true)
      setShowCorrectKey(true)

      // 播放错误音效
      if (soundEnabled) {
        soundManager.playKeySound('error')
      }

      // 1.5秒后隐藏错误状态和正确按键提示
      setTimeout(() => {
        setHasError(false)
        setShowCorrectKey(false)
      }, 1500)
    }
  }, [currentText, currentIndex, soundEnabled])

  // 处理键盘事件
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // 初始化音频上下文（用户首次交互）
      soundManager.initUserInteraction()

      // 防止默认行为
      if (event.key.length === 1) {
        event.preventDefault()
        // 任何新的输入都清除之前的错误状态
        if (hasError) {
          setHasError(false)
          setShowCorrectKey(false)
        }
        handleKeyPress(event.key)
      }

      // 处理退格键
      if (event.key === 'Backspace') {
        event.preventDefault()
        if (userInput.length > 0) {
          setUserInput(prev => prev.slice(0, -1))
          setCurrentIndex(prev => prev - 1)
          setHasError(false)
          setShowCorrectKey(false)
        }
      }

      // 处理Tab键重新开始
      if (event.key === 'Tab') {
        event.preventDefault()
        resetPractice()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyPress, userInput.length])

  // 重置练习
  const resetPractice = () => {
    setUserInput('')
    setCurrentIndex(0)
    setStartTime(Date.now())
    setErrors(0)
    setTotalChars(0)
    setHasError(false)
    setShowCorrectKey(false)
  }

  // 渲染练习文本
  const renderText = () => {
    return (
      <div className="relative inline-block">
        {/* 正确按键提示 - 独立定位，不影响文本布局 */}
        {showCorrectKey && (
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
            <span className="bg-yellow-400 text-yellow-900 px-3 py-2 rounded text-sm font-bold shadow-lg animate-bounce whitespace-nowrap">
              {currentText[currentIndex] === ' ' ? '空格' : currentText[currentIndex]?.toUpperCase()}
            </span>
          </div>
        )}

        {/* 文本内容 */}
        <div className="inline">
          {currentText.split('').map((char, index) => {
            let className = 'text-lg px-1 py-0.5 rounded inline-block '

            if (index < userInput.length) {
              // 已输入的字符
              className += userInput[index] === char ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
            } else if (index === currentIndex) {
              // 当前字符
              if (hasError) {
                className += 'bg-red-300 text-red-900 border-2 border-red-500'
              } else {
                className += 'bg-blue-200 text-blue-800 animate-pulse border-2 border-blue-400'
              }
            } else {
              // 未输入的字符
              className += 'text-gray-600'
            }

            return (
              <span key={`${currentText}-${index}`} className={className}>
                {char === ' ' ? '\u00A0' : char}
              </span>
            )
          })}
        </div>
      </div>
    )
  }

  const stats = calculateStats()

  return (
    <div className="flex-1 flex flex-col px-4 py-6 max-w-7xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">打字练习</h1>
        <p className="text-gray-600 mt-2">提升您的打字速度和准确率</p>
      </div>

      {/* 统计信息 */}
      <div className="mb-6">
        <TypingStats stats={stats} />
      </div>

      {/* 练习文本显示区域 - 固定大小 */}
      <div className="mb-6 flex justify-center">
        <div className="bg-white rounded-lg p-6 border-2 border-gray-300 shadow-lg w-full max-w-4xl h-[200px] flex items-center justify-center overflow-hidden">
          <div className="font-mono text-xl leading-relaxed text-center max-w-full break-words">
            {renderText()}
          </div>
        </div>
      </div>

      {/* 练习模式选择和音效控制 */}
      <div className="mb-6 flex flex-col items-center gap-4">
        {/* 练习模式选择 */}
        <div className="flex flex-wrap gap-3 justify-center">
          {practiceTexts.map((text, index) => (
            <button
              key={text}
              onClick={() => {
                setCurrentText(text)
                resetPractice()
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentText === text
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {index === 0 ? '基础练习' : index === 1 ? '指法练习' : index === 2 ? '英文练习' : '中文练习'}
            </button>
          ))}
        </div>

        {/* 音效控制 */}
        <div className="flex items-center gap-4">
          {/* 音效开关 */}
          <button
            onClick={() => {
              const newSoundEnabled = !soundEnabled
              setSoundEnabled(newSoundEnabled)
              soundManager.setEnabled(newSoundEnabled)
              // 播放测试音效
              if (newSoundEnabled) {
                soundManager.playKeySound('normal')
              }
            }}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              soundEnabled
                ? 'bg-green-100 text-green-700 border border-green-300'
                : 'bg-gray-100 text-gray-700 border border-gray-300'
            }`}
          >
            {soundEnabled ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a3 3 0 106 0v-1a3 3 0 00-6 0v1z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            )}
            {soundEnabled ? '音效开启' : '音效关闭'}
          </button>

          {/* 音效主题选择 */}
          {soundEnabled && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">音效主题:</span>
              <select
                value={soundTheme}
                onChange={(e) => {
                  const newTheme = e.target.value as SoundTheme
                  setSoundTheme(newTheme)
                  soundManager.setTheme(newTheme)
                  // 播放测试音效
                  soundManager.playKeySound('normal')
                }}
                className="px-3 py-1 rounded border border-gray-300 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="mechanical">机械键盘</option>
                <option value="typewriter">打字机</option>
                <option value="digital">数字音效</option>
                <option value="soft">柔和音效</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* 虚拟键盘 */}
      <div className="mb-6 flex justify-center">
        <VirtualKeyboard currentChar={currentText[currentIndex]} hasError={hasError} />
      </div>

      {/* 提示信息 */}
      <div className="text-center text-sm text-gray-500">
        <p>开始输入练习文本 | 按 Tab 键重新开始</p>
      </div>
    </div>
  )
}
