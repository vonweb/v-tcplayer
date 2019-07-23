import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: './src/index.js',
  output: {
    file: './dist/index.js',
    format: 'umd',
    name: 'v-tcplayer',
    exports: 'named',
  },

  plugins: [
    resolve(),
    commonjs(),
    vue(),
    babel({
      exclude: ['node_modules/**', 'src/lib/**'],
      extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'],
    }),
    uglify(),
  ],
}
