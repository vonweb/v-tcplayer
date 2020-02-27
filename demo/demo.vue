<template>
  <div>
    <VTcPlayer :options="options" @load="onLoad" @play="onPlay" />
    <V-TcPlayer :options="liveoptions" elmId="tcPlayer2" />
  </div>
</template>

<script>
import { VTcPlayer } from '../src/index'
export default {
  data () {
    return {
      liveoptions: {
        hlsUrl: 'https://lib.baomitu.com/hls.js/0.12.4/hls.min.js',
        width: 800,
        height: 450,
        m3u8: 'http://5170.liveplay.myqcloud.com/live/5170_2c7dab752af722dafad5d52c24c0c6ca.m3u8',
        live: true,
        // x5_player: true,
      },
      options: {
        hlsUrl: 'https://lib.baomitu.com/hls.js/0.8.9/hls.min.js',
        width: 800,
        height: 450,
        m3u8: 'http://1251203672.vod2.myqcloud.com/43464984vodtransgzp1251203672/957853b25285890790261970276/v.f230.m3u8',
        // m3u8_hd: 'https://pl.dogecloud.com/vcloud/hls/m3u8/100569?tm=1563503636&vtype=5&uid=17&sign=e35e073cd1117489c49bcba82394da35&icp=0&durlimit=0&server=s3&vkey=DFEECC1C25676B129A5E630429EB7EED2347696B0638924C3489FD29F424C3F513220C5A1D0171682120CACD345BC7BCC48C070606ECDDAF1FB8A3946D890B40BB78E76D6CB35E8F2DA4A81E9C6545B46ABAED16E8F69F99459534DD9FE8E5B0&ext=.m3u8',
        // m3u8_sd: 'https://pl.dogecloud.com/vcloud/hls/m3u8/100569?tm=1563503636&vtype=1&uid=17&sign=09ea3985a2de3df7450675ff04350ccb&icp=0&durlimit=0&server=s3&vkey=A1060AD547974F10291A93AABE09DBCB94972A74BEAB3E7D6C10855E2E658914342D68A37F077531B342504233C53011E72299F4830BFF76AB8678C9D78E644C4EC7BD09A724DBAED82F745195A8632A6253C04C0C6143D5C778643B8EBAC665&ext=.m3u8',
      },
    }
  },
  components: {
    VTcPlayer,
  },
  methods: {
    onLoad () {
      console.log('onLoad')
    },
    onPlay () {
      console.log('onPlay')
    },
  },
}
</script>
