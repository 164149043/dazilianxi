import { useState, useEffect, useCallback } from 'react'
import VirtualKeyboard from './VirtualKeyboard'
import TypingStats from './TypingStats'

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
  const [startTime, setStartTime] = useState<number | null>(null)
  const [isActive, setIsActive] = useState(false)
  const [errors, setErrors] = useState(0)
  const [totalChars, setTotalChars] = useState(0)

  // 计算统计数据
  const calculateStats = useCallback(() => {
    const timeElapsed = startTime ? (Date.now() - startTime) / 1000 : 0
    const accuracy = totalChars > 0 ? ((totalChars - errors) / totalChars) * 100 : 100
    const wpm = timeElapsed > 0 ? (userInput.length / 5) / (timeElapsed / 60) : 0

    return {
      timeElapsed: Math.floor(timeElapsed),
      accuracy: Math.round(accuracy * 10) / 10,
      wpm: Math.round(wpm * 10) / 10,
      currentProgress: `${currentIndex}/${currentText.length}`
    }
  }, [startTime, totalChars, errors, userInput.length, currentIndex, currentText.length])

  // 处理键盘输入
  const handleKeyPress = useCallback((char: string) => {
    if (!isActive && userInput.length === 0) {
      setStartTime(Date.now())
      setIsActive(true)
    }

    const expectedChar = currentText[currentIndex]

    if (char === expectedChar) {
      setUserInput(prev => prev + char)
      setCurrentIndex(prev => prev + 1)
      setTotalChars(prev => prev + 1)

      // 检查是否完成
      if (currentIndex + 1 >= currentText.length) {
        setIsActive(false)
      }
    } else {
      setErrors(prev => prev + 1)
      setTotalChars(prev => prev + 1)
    }
  }, [currentText, currentIndex, userInput.length, isActive])

  // 处理键盘事件
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // 防止默认行为
      if (event.key.length === 1) {
        event.preventDefault()
        handleKeyPress(event.key)
      }

      // 处理退格键
      if (event.key === 'Backspace') {
        event.preventDefault()
        if (userInput.length > 0) {
          setUserInput(prev => prev.slice(0, -1))
          setCurrentIndex(prev => prev - 1)
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
    setStartTime(null)
    setIsActive(false)
    setErrors(0)
    setTotalChars(0)
  }

  // 渲染练习文本
  const renderText = () => {
    return currentText.split('').map((char, index) => {
      let className = 'text-xl '

      if (index < userInput.length) {
        // 已输入的字符
        className += userInput[index] === char ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
      } else if (index === currentIndex) {
        // 当前字符
        className += 'bg-blue-200 text-blue-800 animate-pulse'
      } else {
        // 未输入的字符
        className += 'text-gray-600'
      }

      return (
        <span key={`${currentText}-${index}`} className={className}>
          {char === ' ' ? '\u00A0' : char}
        </span>
      )
    })
  }

  const stats = calculateStats()

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
      {/* 练习模式选择 */}
      <div className="mb-8 flex flex-wrap gap-2">
        {practiceTexts.map((text, index) => (
          <button
            key={text}
            onClick={() => {
              setCurrentText(text)
              resetPractice()
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentText === text
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {index === 0 ? '基础练习' : index === 1 ? '指法练习' : index === 2 ? '英文练习' : '中文练习'}
          </button>
        ))}
      </div>

      {/* 统计信息 */}
      <TypingStats stats={stats} />

      {/* 练习文本显示区域 */}
      <div className="max-w-4xl w-full mb-8">
        <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 min-h-[120px] flex items-center">
          <div className="font-mono leading-relaxed">
            {renderText()}
          </div>
        </div>
      </div>

      {/* 提示信息 */}
      <div className="text-center text-sm text-gray-500 mb-6">
        <p>开始输入练习文本 | 按 Tab 键重新开始</p>
      </div>

      {/* 虚拟键盘 */}
      <VirtualKeyboard currentChar={currentText[currentIndex]} />
    </div>
  )
}
