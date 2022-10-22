import path from 'path'

const replace = require('@rollup/plugin-replace').default
const nodeResolve = require('@rollup/plugin-node-resolve').default
const commonjs = require('@rollup/plugin-commonjs').default
const inject = require('@rollup/plugin-inject').default
const alias = require('@rollup/plugin-alias').default
const { terser } = require('rollup-plugin-terser')

function defineConfig (mode, entryName) {
  /** @type {import('rollup').RollupOptions} */
  const config = {
    input: path.join(__dirname, './src/index.rollup.js'),
    plugins: [
      replace({
        preventAssignment: true,
        'process.env.NODE_DEBUG': 'false',
        '__MEMFS_BROWSER_VERSION__': JSON.stringify(require('./package.json').version),
        '__MEMFS_BROWSER_ORIGINAL_VERSION__': JSON.stringify(require('./package.json').dependencies.memfs)
      }),
      nodeResolve(),
      alias({
        entries: {
          process: require.resolve('process/browser'),
          assert: require.resolve('assert/'),
          url: require.resolve('url/'),
          buffer: require.resolve('buffer/'),
          util: require.resolve('util/'),
          path: require.resolve('path-browserify'),
          stream: require.resolve('stream-browserify'),
          events: require.resolve('events/'),
          punycode: require.resolve('punycode/'),
          querystring: require.resolve('querystring/'),
          string_decoder: require.resolve('string_decoder/'),
        }
      }),
      commonjs(),
      inject({
        process: require.resolve('process/browser')
      }),
      ...(mode === 'production' ? [
        terser({
          module: true,
          output: {
            comments: false,
            beautify: false
          }
        })
      ] : [])
    ],
    output: {
      file: path.join(__dirname, './dist', entryName + '.js'),
      format: 'esm',
      name: 'memfs'
    }
  }
  return config
}

export default [
  defineConfig('none', 'memfs.esm'),
  defineConfig('production', 'memfs.esm.min')
]
