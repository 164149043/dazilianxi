// 音效主题类型
export type SoundTheme = 'mechanical' | 'typewriter' | 'digital' | 'soft'

// 音效管理器
class SoundManager {
  private audioContext: AudioContext | null = null
  private isEnabled: boolean = true
  private currentTheme: SoundTheme = 'mechanical'

  constructor() {
    // 初始化音频上下文
    this.initAudioContext()
  }

  private initAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    } catch (error) {
      console.warn('音频上下文初始化失败:', error)
    }
  }

  // 播放键盘点击音效
  playKeySound(type: 'normal' | 'correct' | 'error' | 'space' = 'normal') {
    if (!this.isEnabled || !this.audioContext) return

    try {
      // 确保音频上下文处于运行状态
      if (this.audioContext.state === 'suspended') {
        this.audioContext.resume()
      }

      // 根据当前主题播放不同音效
      switch (this.currentTheme) {
        case 'mechanical':
          this.createMechanicalKeySound(type)
          break
        case 'typewriter':
          this.createTypewriterSound(type)
          break
        case 'digital':
          this.createDigitalSound(type)
          break
        case 'soft':
          this.createSoftSound(type)
          break
      }

    } catch (error) {
      console.warn('播放音效失败:', error)
    }
  }

  // 创建机械键盘音效
  private createMechanicalKeySound(type: 'normal' | 'correct' | 'error' | 'space') {
    if (!this.audioContext) return

    const currentTime = this.audioContext.currentTime

    // 根据不同类型设置音效参数
    let baseFreq: number
    let clickFreq: number
    let duration: number
    let volume: number
    let clickVolume: number

    switch (type) {
      case 'correct':
        baseFreq = 1200
        clickFreq = 2400
        duration = 0.12
        volume = 0.15
        clickVolume = 0.25
        break
      case 'error':
        baseFreq = 150
        clickFreq = 300
        duration = 0.25
        volume = 0.2
        clickVolume = 0.3
        break
      case 'space':
        baseFreq = 800
        clickFreq = 1600
        duration = 0.18
        volume = 0.12
        clickVolume = 0.2
        break
      default: // normal
        baseFreq = 1000
        clickFreq = 2000
        duration = 0.1
        volume = 0.1
        clickVolume = 0.18
        break
    }

    // 创建主音调（模拟按键按下的声音）
    const mainOsc = this.audioContext.createOscillator()
    const mainGain = this.audioContext.createGain()
    const mainFilter = this.audioContext.createBiquadFilter()

    mainOsc.connect(mainFilter)
    mainFilter.connect(mainGain)
    mainGain.connect(this.audioContext.destination)

    mainOsc.frequency.setValueAtTime(baseFreq, currentTime)
    mainOsc.frequency.exponentialRampToValueAtTime(baseFreq * 0.7, currentTime + duration)
    mainOsc.type = 'triangle'

    // 设置滤波器
    mainFilter.type = 'lowpass'
    mainFilter.frequency.setValueAtTime(baseFreq * 2, currentTime)
    mainFilter.Q.setValueAtTime(1, currentTime)

    // 主音调包络
    mainGain.gain.setValueAtTime(0, currentTime)
    mainGain.gain.linearRampToValueAtTime(volume, currentTime + 0.005)
    mainGain.gain.exponentialRampToValueAtTime(0.001, currentTime + duration)

    // 创建点击音效（模拟机械开关的声音）
    const clickOsc = this.audioContext.createOscillator()
    const clickGain = this.audioContext.createGain()
    const clickFilter = this.audioContext.createBiquadFilter()

    clickOsc.connect(clickFilter)
    clickFilter.connect(clickGain)
    clickGain.connect(this.audioContext.destination)

    clickOsc.frequency.setValueAtTime(clickFreq, currentTime)
    clickOsc.type = 'square'

    // 点击音效滤波器
    clickFilter.type = 'highpass'
    clickFilter.frequency.setValueAtTime(clickFreq * 0.5, currentTime)

    // 点击音效包络（短促的点击声）
    clickGain.gain.setValueAtTime(0, currentTime)
    clickGain.gain.linearRampToValueAtTime(clickVolume, currentTime + 0.002)
    clickGain.gain.exponentialRampToValueAtTime(0.001, currentTime + 0.02)

    // 添加噪音（模拟按键摩擦声）
    if (type !== 'error') {
      const noiseBuffer = this.createNoiseBuffer(0.03)
      const noiseSource = this.audioContext.createBufferSource()
      const noiseGain = this.audioContext.createGain()
      const noiseFilter = this.audioContext.createBiquadFilter()

      noiseSource.buffer = noiseBuffer
      noiseSource.connect(noiseFilter)
      noiseFilter.connect(noiseGain)
      noiseGain.connect(this.audioContext.destination)

      noiseFilter.type = 'bandpass'
      noiseFilter.frequency.setValueAtTime(baseFreq * 3, currentTime)
      noiseFilter.Q.setValueAtTime(0.5, currentTime)

      noiseGain.gain.setValueAtTime(0, currentTime)
      noiseGain.gain.linearRampToValueAtTime(volume * 0.3, currentTime + 0.01)
      noiseGain.gain.exponentialRampToValueAtTime(0.001, currentTime + 0.05)

      noiseSource.start(currentTime)
      noiseSource.stop(currentTime + 0.05)
    }

    // 启动音效
    mainOsc.start(currentTime)
    mainOsc.stop(currentTime + duration)

    clickOsc.start(currentTime)
    clickOsc.stop(currentTime + 0.02)
  }

  // 创建打字机音效
  private createTypewriterSound(type: 'normal' | 'correct' | 'error' | 'space') {
    if (!this.audioContext) return

    const currentTime = this.audioContext.currentTime
    let baseFreq: number, duration: number, volume: number

    switch (type) {
      case 'correct':
        baseFreq = 1800
        duration = 0.15
        volume = 0.2
        break
      case 'error':
        baseFreq = 120
        duration = 0.3
        volume = 0.25
        break
      case 'space':
        baseFreq = 1200
        duration = 0.2
        volume = 0.15
        break
      default:
        baseFreq = 1500
        duration = 0.12
        volume = 0.18
        break
    }

    // 主击键声
    const osc = this.audioContext.createOscillator()
    const gain = this.audioContext.createGain()
    const filter = this.audioContext.createBiquadFilter()

    osc.connect(filter)
    filter.connect(gain)
    gain.connect(this.audioContext.destination)

    osc.frequency.setValueAtTime(baseFreq, currentTime)
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.3, currentTime + duration)
    osc.type = 'sawtooth'

    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(baseFreq * 1.5, currentTime)

    gain.gain.setValueAtTime(0, currentTime)
    gain.gain.linearRampToValueAtTime(volume, currentTime + 0.01)
    gain.gain.exponentialRampToValueAtTime(0.001, currentTime + duration)

    osc.start(currentTime)
    osc.stop(currentTime + duration)

    // 添加金属撞击声
    const metalOsc = this.audioContext.createOscillator()
    const metalGain = this.audioContext.createGain()

    metalOsc.connect(metalGain)
    metalGain.connect(this.audioContext.destination)

    metalOsc.frequency.setValueAtTime(baseFreq * 3, currentTime)
    metalOsc.type = 'square'

    metalGain.gain.setValueAtTime(0, currentTime)
    metalGain.gain.linearRampToValueAtTime(volume * 0.5, currentTime + 0.005)
    metalGain.gain.exponentialRampToValueAtTime(0.001, currentTime + 0.03)

    metalOsc.start(currentTime)
    metalOsc.stop(currentTime + 0.03)
  }

  // 创建数字音效
  private createDigitalSound(type: 'normal' | 'correct' | 'error' | 'space') {
    if (!this.audioContext) return

    const currentTime = this.audioContext.currentTime
    let freq1: number, freq2: number, duration: number, volume: number

    switch (type) {
      case 'correct':
        freq1 = 880
        freq2 = 1320
        duration = 0.08
        volume = 0.15
        break
      case 'error':
        freq1 = 220
        freq2 = 165
        duration = 0.15
        volume = 0.2
        break
      case 'space':
        freq1 = 440
        freq2 = 660
        duration = 0.1
        volume = 0.12
        break
      default:
        freq1 = 660
        freq2 = 990
        duration = 0.06
        volume = 0.1
        break
    }

    // 双音调数字音效
    [freq1, freq2].forEach((freq, index) => {
      const osc = this.audioContext!.createOscillator()
      const gain = this.audioContext!.createGain()

      osc.connect(gain)
      gain.connect(this.audioContext!.destination)

      osc.frequency.setValueAtTime(freq, currentTime)
      osc.type = 'square'

      gain.gain.setValueAtTime(0, currentTime + index * 0.01)
      gain.gain.linearRampToValueAtTime(volume * (index === 0 ? 1 : 0.7), currentTime + index * 0.01 + 0.005)
      gain.gain.exponentialRampToValueAtTime(0.001, currentTime + duration)

      osc.start(currentTime + index * 0.01)
      osc.stop(currentTime + duration)
    })
  }

  // 创建柔和音效
  private createSoftSound(type: 'normal' | 'correct' | 'error' | 'space') {
    if (!this.audioContext) return

    const currentTime = this.audioContext.currentTime
    let baseFreq: number, duration: number, volume: number

    switch (type) {
      case 'correct':
        baseFreq = 523 // C5
        duration = 0.2
        volume = 0.08
        break
      case 'error':
        baseFreq = 196 // G3
        duration = 0.3
        volume = 0.12
        break
      case 'space':
        baseFreq = 392 // G4
        duration = 0.25
        volume = 0.06
        break
      default:
        baseFreq = 440 // A4
        duration = 0.15
        volume = 0.05
        break
    }

    const osc = this.audioContext.createOscillator()
    const gain = this.audioContext.createGain()
    const filter = this.audioContext.createBiquadFilter()

    osc.connect(filter)
    filter.connect(gain)
    gain.connect(this.audioContext.destination)

    osc.frequency.setValueAtTime(baseFreq, currentTime)
    osc.type = 'sine'

    filter.type = 'lowpass'
    filter.frequency.setValueAtTime(baseFreq * 2, currentTime)
    filter.Q.setValueAtTime(0.5, currentTime)

    gain.gain.setValueAtTime(0, currentTime)
    gain.gain.linearRampToValueAtTime(volume, currentTime + 0.05)
    gain.gain.linearRampToValueAtTime(volume * 0.7, currentTime + duration * 0.7)
    gain.gain.exponentialRampToValueAtTime(0.001, currentTime + duration)

    osc.start(currentTime)
    osc.stop(currentTime + duration)
  }

  // 创建噪音缓冲区
  private createNoiseBuffer(duration: number): AudioBuffer {
    if (!this.audioContext) throw new Error('AudioContext not available')

    const sampleRate = this.audioContext.sampleRate
    const frameCount = sampleRate * duration
    const buffer = this.audioContext.createBuffer(1, frameCount, sampleRate)
    const output = buffer.getChannelData(0)

    for (let i = 0; i < frameCount; i++) {
      output[i] = Math.random() * 2 - 1
    }

    return buffer
  }

  // 启用/禁用音效
  setEnabled(enabled: boolean) {
    this.isEnabled = enabled
  }

  // 获取音效状态
  getEnabled(): boolean {
    return this.isEnabled
  }

  // 设置音效主题
  setTheme(theme: SoundTheme) {
    this.currentTheme = theme
  }

  // 获取当前主题
  getTheme(): SoundTheme {
    return this.currentTheme
  }

  // 初始化音频上下文（用户交互后调用）
  async initUserInteraction() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      try {
        await this.audioContext.resume()
      } catch (error) {
        console.warn('恢复音频上下文失败:', error)
      }
    }
  }
}

// 创建全局音效管理器实例
export const soundManager = new SoundManager()
