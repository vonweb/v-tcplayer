module.exports = {
  presets: [
    ['@babel/env', {
      'targets': {
        'ie': '10',
      },
      modules: false,
    }],
  ],
  // plugins: [
  //   '@babel/plugin-proposal-object-rest-spread',
  //   '@babel/plugin-transform-runtime',
  // ],
}
