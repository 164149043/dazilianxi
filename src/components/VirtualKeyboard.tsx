interface VirtualKeyboardProps {
  currentChar?: string
}

export default function VirtualKeyboard({ currentChar }: VirtualKeyboardProps) {
  // 键盘布局定义
  const keyboardRows = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']
  ]

  // 特殊键位
  const specialKeys = {
    space: ' ',
    tab: 'Tab',
    backspace: 'Backspace',
    enter: 'Enter'
  }

  // 获取按键样式
  const getKeyStyle = (key: string) => {
    const isActive = currentChar?.toLowerCase() === key.toLowerCase() ||
                    (currentChar === ' ' && key === 'space')

    return `
      inline-flex items-center justify-center min-w-[40px] h-10 m-0.5
      border border-gray-300 rounded text-sm font-medium
      transition-colors duration-150
      ${isActive
        ? 'bg-blue-500 text-white border-blue-600 shadow-lg'
        : 'bg-white text-gray-700 hover:bg-gray-50'
      }
    `
  }

  // 获取特殊键样式
  const getSpecialKeyStyle = (key: string, width = 'auto') => {
    const isActive = currentChar === ' ' && key === 'space'

    return `
      inline-flex items-center justify-center h-10 m-0.5 px-3
      border border-gray-300 rounded text-sm font-medium
      transition-colors duration-150 ${width}
      ${isActive
        ? 'bg-blue-500 text-white border-blue-600 shadow-lg'
        : 'bg-white text-gray-700 hover:bg-gray-50'
      }
    `
  }

  return (
    <div className="max-w-4xl w-full">
      <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
        {/* 数字和符号行 */}
        <div className="flex justify-center mb-1">
          {keyboardRows[0].map((key) => (
            <button
              key={key}
              className={getKeyStyle(key)}
              type="button"
            >
              {key}
            </button>
          ))}
          <button
            className={getSpecialKeyStyle('backspace', 'min-w-[80px]')}
            type="button"
          >
            ←
          </button>
        </div>

        {/* 第一行字母 */}
        <div className="flex justify-center mb-1">
          <button
            className={getSpecialKeyStyle('tab', 'min-w-[60px]')}
            type="button"
          >
            Tab
          </button>
          {keyboardRows[1].map((key) => (
            <button
              key={key}
              className={getKeyStyle(key)}
              type="button"
            >
              {key}
            </button>
          ))}
          <button
            className={getSpecialKeyStyle('enter', 'min-w-[60px]')}
            type="button"
          >
            ↵
          </button>
        </div>

        {/* 第二行字母 */}
        <div className="flex justify-center mb-1">
          <button
            className={getSpecialKeyStyle('caps', 'min-w-[70px]')}
            type="button"
          >
            Caps
          </button>
          {keyboardRows[2].map((key) => (
            <button
              key={key}
              className={getKeyStyle(key)}
              type="button"
            >
              {key}
            </button>
          ))}
        </div>

        {/* 第三行字母 */}
        <div className="flex justify-center mb-1">
          <button
            className={getSpecialKeyStyle('shift', 'min-w-[90px]')}
            type="button"
          >
            Shift
          </button>
          {keyboardRows[3].map((key) => (
            <button
              key={key}
              className={getKeyStyle(key)}
              type="button"
            >
              {key}
            </button>
          ))}
          <button
            className={getSpecialKeyStyle('shift', 'min-w-[90px]')}
            type="button"
          >
            Shift
          </button>
        </div>

        {/* 空格行 */}
        <div className="flex justify-center">
          <button
            className={getSpecialKeyStyle('ctrl', 'min-w-[60px]')}
            type="button"
          >
            Ctrl
          </button>
          <button
            className={getSpecialKeyStyle('alt', 'min-w-[50px]')}
            type="button"
          >
            Alt
          </button>
          <button
            className={getSpecialKeyStyle('space', 'min-w-[300px]')}
            type="button"
          >
            空格
          </button>
          <button
            className={getSpecialKeyStyle('alt', 'min-w-[50px]')}
            type="button"
          >
            Alt
          </button>
          <button
            className={getSpecialKeyStyle('ctrl', 'min-w-[60px]')}
            type="button"
          >
            Ctrl
          </button>
        </div>

        {/* 指法提示 */}
        <div className="mt-4 text-center text-sm text-gray-600">
          <p className="mb-1">指法练习：左手食指 = F键，右手食指 = J键</p>
          <p>
            当前按键:
            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded font-mono">
              {currentChar === ' ' ? '空格' : currentChar || '-'}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
