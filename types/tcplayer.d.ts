// https://cloud.tencent.com/document/product/881/20207#.E6.BA.90.E7.A0.81.E5.8F.82.E8.80.83
export class TcPlayer {
  constructor (el: string, options: TcPlayerOptions)
  play(): void
  pause(): void
  togglePlay(): void
  mute(muted: boolean): boolean
  volume(val?: number): number
  playing(): boolean
  duration(): number
  currentTime(time?: number): number
  fullscreen(enter?: boolean): boolean
  buffered(): number
  destroy(): void
  switchClarity(clarity: TcClarity): void
  load(url: string): void
}

export interface TcPlayerOptions {
  /** 原画 M3U8 播放 URL */
  m3u8?: string
  /** 高清 M3U8 播放 URL */
  m3u8_hd?: string
  /** 标清 M3U8 播放 URL */
  m3u8_sd?: string

  /** 原画 FLV 播放 URL */
  flv?: string
  /** 高清 FLV 播放 URL */
  flv_hd?: string
  /** 标清 FLV 播放 URL */
  flv_sd?: string

  /** 原画 MP4 播放 URL */
  mp4?: string
  /** 高清 MP4 播放 URL */
  mp4_hd?: string
  /** 标清 MP4 播放 URL */
  mp4_sd?: string

  /** 原画 RTMP 播放 URL */
  rtmp?: string
  /** 高清 RTMP 播放 URL */
  rtmp_hd?: string
  /** 标清 RTMP 播放 URL */
  rtmp_sd?: string

  /** 设置播放器宽度，单位为像素 */
  width: number
  /** 设置播放器高度，单位为像素 */
  height: number
  /** 设置初始音量，范围：0到1 [v2.2.0+] */
  volume?: number

  /** 设置视频是否为直播类型，将决定是否渲染时间轴等控件，以及区分点直播的处理逻辑，default: false */
  live?: boolean
  /**
   * - 是否自动播放，default: false
   * - 备注：该选项只对大部分 PC 平台生效
   */
  autoplay?: boolean

  /** 预览封面 */
  poster?: string | {
    src: string
    style?: TcPosterStyle
  }
  controls?: TcControls
  /** 开启后，在不支持 Fullscreen API 的浏览器环境下，尝试使用浏览器提供的 webkitEnterFullScreen 方法进行全屏，如果支持，将进入系统全屏，控件为系统控件 */
  systemFullscreen?: boolean

  /**
   * 是否优先使用 Flash 播放视频。
   * （备注：该选项只对 PC 平台生效[v2.2.0+]）<br>
   * 默认true
   */
  flash?: boolean
  /** 可以设置 flash swf url */
  flashUrl?: string

  /**
   * 是否启用 flv.js 的播放 flv。启用时播放器将在支持 MSE 的浏览器下，采用 flv.js 播放 flv，然而并不是所有支持 MSE 的浏览器都可以使用 flv.js，所以播放器不会默认开启这个属性，[v2.2.0+]
   */
  h5_flv?: boolean
  /**
   * 是否启用 TBS 的播放 flv 或 hls 。启用时播放器将在 TBS 模式下(例如 Android 的微信、QQ 浏览器），将 flv 或 hls 播放地址直接赋给 <video> 播放。TBS 视频能力 [v2.2.0+]
   */
  x5_player?: boolean
  /**
   * 通过 video 属性 “x5-video-player-type” 声明启用同层 H5 播放器，支持的值：H5 (该属性为 TBS 内核实验性属性，非 TBS 内核不支持)，TBS H5 同层播放器接入规范
   */
  x5_type?: string
  /**
   * 通过 video 属性 “x5-video-player-fullscreen” 声明视频播放时是否进入到 TBS 的全屏模式，支持的值：true (该属性为 TBS 内核实验性属性，非 TBS 内核不支持)
   */
  x5_fullscreen?: boolean
  /** 通过 video 属性 “x5-video-orientation” 声明 TBS 播放器支持的方向，可选值：0（landscape 横屏），1：（portraint竖屏），2：（landscape | portrait 跟随手机自动旋转）。 (该属性为 TBS 内核实验性属性，非 TBS 内核不支持) [v2.2.0+] */
  x5_orientation?: number

  /** 自定义文案 */
  wording?: {[code: number]: string}

  /** 默认播放清晰度[v2.2.1+]。 */
  clarity?: TcClarity
  /** 自定义清晰度文案 [v2.2.1+] */
  clarityLabel?: TcClarityLabel
  listener?: Listener

  /** 暂停时显示封面[v2.3.0+] */
  pausePosterEnabled?: boolean

  /** 配置 video 标签的 preload 属性，只有部分浏览器生效[v2.3.0+] */
  preload?: 'auto' | 'metadata' | 'none'

  /** hls.js 初始化配置项[v2.3.0+] */
  hlsConfig?: any
  /** flv.js 初始化配置项[v2.3.1+] */
  flvConfig?: any
}

/**
 * - default 居中1：1显示。
 * - stretch 拉伸铺满播放器区域，图片可能会变形。
 * - cover 优先横向等比拉伸铺满播放器区域，图片某些部分可能无法显示在区域内
 */
type TcPosterStyle = 'default' | 'stretch' | 'cover'

/**
 * default 显示默认控件，none 不显示控件，system 移动端显示系统控件
 * 备注：如果需要在移动端使用系统全屏，就需要设置为 system。默认全屏方案是使用 Fullscreen API + 伪全屏的方式
 * http://imgcache.qq.com/open/qcloud/video/vcplayer/demo/tcplayer-consoles.html
 */
type TcControls = 'default' | 'none' | 'system'

type TcClarity = 'od' | 'hd' | 'sd'
interface TcClarityLabel {
  od?: string
  hd?: string
  sd?: string
}

type Listener = (msg: TcEvent) => void

export interface TcEvent {
  type: TcListenerEvents // 事件类型
  src: any // 事件源对象，即播放器实例，HTML5 或者 Flash
  ts: number // 事件触发时的 UTC 时间戳
  timeStamp: number // Event 实例的时间戳
  detail: any
}

type TcListenerEvents = 'error' | 'timeupdate' | 'load' | 'loadedmetadata' | 'loadeddata' | 'progress' | 'fullscreen' | 'play' | 'playing' | 'pause' | 'ended' | 'seeking' | 'seeked' | 'resize' | 'volumechange'
