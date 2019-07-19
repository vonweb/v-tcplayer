import VTcPlayer from './VTcPlayer.vue'

export default {
  install (Vue, { name = 'v-tcplayer' }) {
    Vue.component(name, VTcPlayer)
  },
}

export { VTcPlayer }

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VTcPlayer)
}
