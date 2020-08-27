const ManifestPlugin = require('webpack-manifest-plugin')
const merge = require('webpack-merge').default

const dev = require('./dev.config.babel')
const production = require('./build.config.babel')

const allConfigs = {
    dev,
    production,
}

const {env} = process

module.exports = () =>
    merge(allConfigs[env.NODE_ENV](), {
        externals: {
            'styled-components': 'styled-components',
            'react': 'react',
            'react-dom': 'react-dom',
        },
        plugins: [
            new ManifestPlugin({
                fileName: 'manifest.json',
                publicPath: '',
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', { modules: false }]],
                        rootMode: 'upward',
                    },
                }
            ],
        },
    })
