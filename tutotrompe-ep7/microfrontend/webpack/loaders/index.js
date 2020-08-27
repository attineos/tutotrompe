const fileRules = [
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
      {
        loader: 'image-webpack-loader',
        options: {
          mozjpeg: {
            progressive: true,
          },
          pngquant: {
            quality: [0.65, 0.9],
          },
        },
      },
    ],
  },
]

const jsRules = [
  {
    test: /\.js$/,
    exclude: [/node_modules/],
    loader: 'babel-loader',
    options: {
      presets: [['@babel/preset-env', { modules: false }]],
      rootMode: 'upward',
    },
  },
]

const styleRules = [
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  },
]

module.exports = { fileRules, jsRules, styleRules }
