import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

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
    vue(),
    commonjs(),
    babel({
      exclude: ['node_modules/**', 'src/lib/**'],
      // presets: ['es2015-rollup'],
    }),
  ],
}
