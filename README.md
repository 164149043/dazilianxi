# 🎯 打字练习 - 在线打字训练平台

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**一个现代化的在线打字练习平台，帮助您提升打字速度和准确率**

[🚀 在线体验](#-在线体验) | [📖 使用指南](#-使用指南) | [🛠️ 本地运行](#-本地运行)

</div>

---

## ✨ 功能特性

### 🎯 核心功能
- **多种练习模式**: 基础练习、指法练习、英文练习、中文练习
- **实时统计**: 打字速度(WPM)、准确率、用时、进度实时显示
- **智能错误提示**: 错误字符红色显示，正确按键提示
- **连续计时**: 页面加载即开始计时，真实反映练习时间

### ⌨️ 虚拟键盘
- **实时高亮**: 当前需要输入的按键高亮显示
- **错误反馈**: 输入错误时按键变红并闪烁提示
- **完整布局**: 标准QWERTY键盘布局，包含所有特殊键

### 🎵 多主题音效系统
- **🔧 机械键盘**: 真实机械键盘音效，包含按键摩擦声
- **⌨️ 打字机**: 经典打字机音效，带金属撞击声
- **💻 数字音效**: 现代电子设备双音调音效
- **🎵 柔和音效**: 温和音乐音调，适合安静环境

### 🎨 界面设计
- **固定框架**: 统计信息和练习文本采用固定大小设计
- **响应式布局**: 适配桌面端和移动端设备
- **现代化UI**: 简洁美观的界面，专注练习体验

## 🚀 在线体验

### 快速开始
您可以通过以下方式立即体验打字练习：

1. **GitHub Pages部署版本** (推荐)
   - 🌐 访问地址: [https://164149043.github.io/dazilianxi](https://164149043.github.io/dazilianxi)
   - ✅ 无需安装，直接在浏览器中使用
   - 📱 支持桌面端和移动端访问

2. **本地快速体验**
   ```bash
   # 克隆并运行
   git clone https://github.com/164149043/dazilianxi.git
   cd dazilianxi
   npm install && npm run dev
   ```

3. **在线代码编辑器**
   - [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://codesandbox.io/s/github/164149043/dazilianxi)
   - [![Open in StackBlitz](https://img.shields.io/badge/Open%20in-StackBlitz-blue?style=flat-square&logo=stackblitz)](https://stackblitz.com/github/164149043/dazilianxi)

### 浏览器兼容性
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 11+
- ✅ Edge 79+
- ⚠️ 需要支持Web Audio API（音效功能）

## 🖼️ 界面预览

### 主界面
```
┌─────────────────────────────────────────────────────────────┐
│                        打字练习                              │
│                   提升您的打字速度和准确率                     │
├─────────────────────────────────────────────────────────────┤
│  ⏱️ 时间: 45s  ✅ 准确率: 96.5%  ⚡ 速度: 68 WPM  📊 进度: 23/50 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│    the quick brown fox jumps over the lazy dog             │
│    ███ █████ ██████ ███ █████ ████ ███ ████ ███             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  [基础练习] [指法练习] [英文练习] [中文练习]                    │
│  🔊 音效开启  🎨 音效主题: 机械键盘                           │
├─────────────────────────────────────────────────────────────┤
│                      虚拟键盘                                │
│  [1][2][3][4][5][6][7][8][9][0][-][=]    [←]               │
│    [Q][W][E][R][T][Y][U][I][O][P]                          │
│     [A][S][D][F][G][H][J][K][L]                            │
│      [Z][X][C][V][B][N][M]                                 │
│           [        空格键        ]                          │
└─────────────────────────────────────────────────────────────┘
```

## 🚀 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite 6
- **样式框架**: Tailwind CSS
- **音效系统**: Web Audio API
- **代码质量**: Biome (格式化 + Lint)
- **包管理**: 支持 npm/yarn/pnpm/bun

## �️ 本地运行

### 环境要求
- Node.js 18+ 或 Bun
- 现代浏览器（支持Web Audio API）

### 安装步骤

1. **克隆项目**
```bash
git clone https://github.com/164149043/dazilianxi.git
cd dazilianxi
```

2. **安装依赖**
```bash
# 使用 npm
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install

# 或使用 bun
bun install
```

3. **启动开发服务器**
```bash
# 使用 npm
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev

# 或使用 bun
bun dev
```

4. **访问应用**
打开浏览器访问 `http://localhost:5173`

### 构建生产版本
```bash
npm run build
npm run preview
```

## 📖 使用指南

### 🎯 开始练习
1. **选择练习模式**: 点击页面中的练习模式按钮
   - 基础练习: 简单的字母组合
   - 指法练习: 标准指法训练
   - 英文练习: 常用英文单词和句子
   - 中文练习: 中文词汇和句子

2. **开始输入**: 直接开始输入显示的文本，计时会自动开始

3. **查看统计**: 实时查看您的打字速度、准确率和进度

### 🎵 音效设置
- **开启/关闭音效**: 点击音效按钮切换
- **选择音效主题**: 在下拉菜单中选择喜欢的音效风格
- **音效类型**:
  - 正确输入: 清脆提示音
  - 错误输入: 低沉警告音
  - 空格键: 专门的空格音效

### ⌨️ 快捷键
- **Tab**: 重新开始当前练习
- **Backspace**: 删除输入的字符
- **任意字符**: 开始/继续练习

### 📊 统计说明
- **时间**: 从开始输入到当前的总用时
- **准确率**: 正确字符数 / 总输入字符数 × 100%
- **速度(WPM)**: Words Per Minute，每分钟输入的单词数
- **进度**: 当前输入位置 / 总字符数

## 🎨 自定义配置

### 修改练习文本
编辑 `src/components/TypingPractice.tsx` 中的 `practiceTexts` 数组：

```typescript
const practiceTexts = [
  'your custom text here',
  // 添加更多练习文本
]
```

### 调整音效参数
修改 `src/utils/soundManager.ts` 中的音效参数：

```typescript
// 调整音效频率、音量、持续时间
case 'correct':
  frequency = 800  // 频率 (Hz)
  duration = 0.1   // 持续时间 (秒)
  volume = 0.3     // 音量 (0-1)
  break
```

### 自定义样式
项目使用 Tailwind CSS，您可以：
- 修改 `tailwind.config.js` 配置主题色彩
- 在组件中调整 className 来改变样式

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. **Fork 项目**
2. **创建功能分支**: `git checkout -b feature/AmazingFeature`
3. **提交更改**: `git commit -m 'Add some AmazingFeature'`
4. **推送分支**: `git push origin feature/AmazingFeature`
5. **提交 Pull Request**

### 开发规范
- 使用 TypeScript 编写代码
- 遵循 ESLint 和 Prettier 规范
- 添加适当的注释和类型定义
- 测试新功能的兼容性

## 📝 更新日志

### v1.0.0 (2025-06-13)
- ✨ 初始版本发布
- 🎯 实现基础打字练习功能
- ⌨️ 添加虚拟键盘支持
- 🎵 集成多主题音效系统
- 📊 实时统计功能
- 🎨 响应式界面设计

## 🐛 问题反馈

如果您遇到任何问题或有功能建议，请：

1. 查看 [Issues](https://github.com/164149043/dazilianxi/issues) 是否已有相关问题
2. 如果没有，请创建新的 Issue 并详细描述问题
3. 提供浏览器版本、操作系统等环境信息

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙏 致谢  这个打字练习项目完全由Augment完成

- [React](https://reactjs.org/) - 用户界面库
- [Vite](https://vitejs.dev/) - 快速构建工具
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) - 音效支持

---

<div align="center">

**如果这个项目对您有帮助，请给个 ⭐ Star 支持一下！**

Made with ❤️ by [张一依有把越女剑](https://github.com/164149043)

</div>
