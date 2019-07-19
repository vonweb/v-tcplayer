import Vue from 'vue'
import { TcPlayerOptions } from './tcplayer';

export declare class VTcPlayer extends Vue {
  static install(vue: typeof Vue): void
  options: TcPlayerOptions
  elmId?: string
}

export default VTcPlayer

export * from './tcplayer'
