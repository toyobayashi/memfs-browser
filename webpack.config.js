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
    node: {
      global: true
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, './dist'),
      library: 'memfs',
      libraryTarget: 'umd',
      globalObject: '(typeof globalThis !== "undefined" ? globalThis : (typeof window !== "undefined" ? window : this)) || self'
    },
    resolve: {
      alias: {
        buffer: path.join(__dirname, './src/buffer.js'),
      },
      fallback: {
        process: require.resolve('process/browser'),
        assert: path.join(__dirname, './src/assert.js'),
        url: path.join(__dirname, './src/url.js'),
        // buffer: path.join(__dirname, './src/buffer.js'),
        util: require.resolve('util/'),
        path: require.resolve('path-browserify'),
        stream: require.resolve('readable-stream'),
        events: require.resolve('events/'),
        // punycode: require.resolve('punycode/'),
        // querystring: require.resolve('querystring/'),
        string_decoder: require.resolve('string_decoder/')
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_DEBUG': 'false',
        '__MEMFS_BROWSER_VERSION__': JSON.stringify(require('./package.json').version),
        '__MEMFS_BROWSER_ORIGINAL_VERSION__': JSON.stringify(require('./package.json').dependencies.memfs)
      }),
      new webpack.ProvidePlugin({
        process: require.resolve('process/browser'),
        Buffer: ['buffer', 'Buffer']
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

function defineBufferConfig (mode) {
  /** @type {import('webpack').Configuration} */
  const config = {
    mode,
    target: ['es5', 'web'],
    entry: {
      buffer: path.join(__dirname, './test/buffer-entry.js')
    },
    node: {
      global: true
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, './test'),
      library: {
        // export: ['Buffer'],
        type: 'umd',
        name: 'buffer'
      },
      globalObject: '(typeof globalThis !== "undefined" ? globalThis : (typeof window !== "undefined" ? window : this)) || self'
    },
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
  defineBufferConfig('none')
]
