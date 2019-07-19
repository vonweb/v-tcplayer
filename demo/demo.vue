<template>
  <div>
    <VTcPlayer :options="options" @load="onLoad" @play="onPlay" />
    <V-TcPlayer :options="options" elmId="tcPlayer2" />
  </div>
</template>

<script>
import { VTcPlayer } from '../src/index'
export default {
  data () {
    return {
      options: {
        width: 800,
        height: 450,
        m3u8: 'https://pl.dogecloud.com/vcloud/hls/m3u8/100569?tm=1563503636&vtype=10&uid=17&sign=cea451272fff974228a6c9dd90e136a7&icp=0&durlimit=0&server=s3&vkey=5B9BAEF53D1EA22DE1A27D80FE0195BAA57EE59DF1CBE66574548CF093E059C16C613F1ABEA600B26ECCFEECA3958CD5776137B992AEC2A6828325A8C8421263598076000EFB1E5BD6003581AEABB9762806ED02D78A5BD90410FC4286D36E6E&ext=.m3u8',
        m3u8_hd: 'https://pl.dogecloud.com/vcloud/hls/m3u8/100569?tm=1563503636&vtype=5&uid=17&sign=e35e073cd1117489c49bcba82394da35&icp=0&durlimit=0&server=s3&vkey=DFEECC1C25676B129A5E630429EB7EED2347696B0638924C3489FD29F424C3F513220C5A1D0171682120CACD345BC7BCC48C070606ECDDAF1FB8A3946D890B40BB78E76D6CB35E8F2DA4A81E9C6545B46ABAED16E8F69F99459534DD9FE8E5B0&ext=.m3u8',
        m3u8_sd: 'https://pl.dogecloud.com/vcloud/hls/m3u8/100569?tm=1563503636&vtype=1&uid=17&sign=09ea3985a2de3df7450675ff04350ccb&icp=0&durlimit=0&server=s3&vkey=A1060AD547974F10291A93AABE09DBCB94972A74BEAB3E7D6C10855E2E658914342D68A37F077531B342504233C53011E72299F4830BFF76AB8678C9D78E644C4EC7BD09A724DBAED82F745195A8632A6253C04C0C6143D5C778643B8EBAC665&ext=.m3u8',
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
