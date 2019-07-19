# v-tcplayer

A Vue.js 2 component for [TcPlayer](https://cloud.tencent.com/document/product/881/20207)

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

