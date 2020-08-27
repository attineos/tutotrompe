const { DefinePlugin } = require('webpack')
const { join } = require('path')

module.exports = () => {
  const envConstants = {
    'process.env.NODE_ENV': JSON.stringify('production'),
  }

  return {
    entry: join(__dirname, '../src/index.js'),
    mode: 'production',
    output: {
      filename: '[name]-[contenthash].js',
      libraryTarget: 'window',
      path: join(__dirname, `../build`),
    },
    plugins: [new DefinePlugin(envConstants)],
  }
}
