const webpack = require('webpack')
const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')

function defineConfig (mode, entryName) {
  /** @type {import('webpack').Configuration} */
  const config = {
    mode,
    target: ['es5', 'web'],
    entry: {
      [entryName]: path.join(__dirname, './src/index.js')
    },
    node: false,
    output: {
      filename: '[name].js',
      path: path.join(__dirname, './dist'),
      library: 'memfs',
      libraryTarget: 'umd',
      globalObject: '(typeof globalThis !== "undefined" ? globalThis : (typeof window !== "undefined" ? window : this)) || self'
    },
    resolve: {
      fallback: {
        process: require.resolve('process/browser'),
        assert: require.resolve('assert/'),
        url: require.resolve('url/'),
        buffer: require.resolve('buffer/'),
        util: require.resolve('util/'),
        path: require.resolve('path-browserify'),
        stream: require.resolve('stream-browserify')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_DEBUG': 'false',
        '__MEMFS_BROWSER_VERSION__': JSON.stringify(require('./package.json').version),
        '__MEMFS_BROWSER_ORIGINAL_VERSION__': JSON.stringify(require('./package.json').dependencies.memfs)
      }),
      new webpack.ProvidePlugin({
        process: require.resolve('process/browser')
      })
    ],
    optimization: {
      minimizer: [
        new TerserWebpackPlugin({
          parallel: true,
          extractComments: false,
          terserOptions: {
            output: {
              comments: false,
              beautify: false
            }
          }
        })
      ]
    }
  }
  return config
}

module.exports = [
  defineConfig('none', 'memfs'),
  defineConfig('production', 'memfs.min'),
]
