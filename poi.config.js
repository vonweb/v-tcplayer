const path = require('path')
module.exports = {
  entry: 'demo/index.js',
  output: {
    dir: 'out',
  },
  chainWebpack (config) {
    config.module.rule('js')
      .exclude.add(path.resolve(__dirname, 'src/lib/TcPlayer.js'))
      .add(path.resolve(__dirname, 'dist/index.js'))
  },
}
