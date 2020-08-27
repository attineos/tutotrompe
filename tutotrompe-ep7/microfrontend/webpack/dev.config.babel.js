const { join } = require('path')

module.exports = () => {
  return {
    entry: join(__dirname, `../src/index.js`),
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: join(__dirname, `../build`),
      filename: '[name].js',
      libraryTarget: 'window',
    },
    devServer: {
      allowedHosts: ['localhost:3000'],
      headers: {
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Origin': '*',
      },
      historyApiFallback: true,
      host: 'localhost',
      hot: true,
      https: true,
      port: 8001,
      proxy: {},
    },
  }
}
