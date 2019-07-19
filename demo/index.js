import Vue from 'vue'
import Demo from './demo.vue'
import VTcPlayer from '../src/index'

Vue.use(VTcPlayer, { name: 'V-TcPlayer' })

new Vue({
  render: h => h(Demo),
}).$mount('#app')
