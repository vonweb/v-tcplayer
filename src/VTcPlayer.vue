<template>
  <div
    :id="elmId"
    class="vtp-player"
  />
</template>

<script>
import { TcPlayer } from './lib/TcPlayer'
export default {
  props: {
    options: {
      type: Object,
      default: () => ({}),
    },
    elmId: {
      type: String,
      default: 'vtcPlayer',
    },
  },
  data () {
    return {
      vTcPlayer: null,
    }
  },
  mounted () {
    const defaultOptions = {
      flash: false,
      listener: (msg) => {
        this.$emit(msg.type, msg)
      },
    }
    this.vTcPlayer = new TcPlayer(this.elmId, { ...defaultOptions, ...this.options })
  },
}
export { TcPlayer }
</script>
