# v-tcplayer

A Vue.js 2 component for [TCPlayer Lite](https://cloud.tencent.com/document/product/881/20207)

## 安装
- ### npm / yarn
`npm install --save v-tcplayer`或`yarn add v-tcplayer`

- ### 引入
##### 全局引入
```js
import VTcPlayer from 'v-tcplayer'
Vue.use(VTcPlayer, { name: 'V-TcPlayer' })
```

##### 局部引入
```js
import { VTcPlayer } from 'v-tcplayer'
```

## 使用
```html
<div>
  <VTcPlayer ref="tcPlayer" :options="options" @load="onLoad" @play="onPlay" />
  <V-TcPlayer :options="options" elmId="globalTcPlayer" />
</div>
```
```js
export default {
  data () {
    options: {
      hlsUrl: 'https://lib.baomitu.com/hls.js/0.8.9/hls.min.js', // 0.0.5增加
      width: 800,
      height: 450,
      m3u8: 'http://1251203672.vod2.myqcloud.com/43464984vodtransgzp1251203672/957853b25285890790261970276/v.f230.m3u8',
    },
  },
  components: {
    VTcPlayer,
  },
  computed: {
    player () {
      // tcPlayer实例
      return this.$refs.tcPlayer.vTcPlayer
    },
  },
  method: {
    play () {
      this.player.play()
    },
    getCurrentTime () {
      this.player.currentTime()
    },
    loadNewVideo (url) {
      this.player.load(url)
    },
  },
}
```
##### 参数说明
`options`可传入`TcPlayer`所有参数，事件监听参数`listener`推荐不传，通过`@event`方式绑定。
若页面内有多个视频，需传参数`elmId`

###### 说明
腾讯CDN不知道什么情况下引入的hls文件有问题，会先引入一个较短的js文件，然后再引入真正的hls文件，导致视频加载失败，0.0.5修改了TcPlayer源码，增加了hlsUrl选项
