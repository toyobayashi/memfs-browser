var _Buffer = typeof Buffer === 'function'
  ? Buffer
  : /*#__PURE__*/ (function () {
      if (typeof __webpack_public_path__ !== 'undefined') {
        try {
          return __non_webpack_require__('buffer').Buffer
        } catch (_) {
          throw new Error('The current runtime does not support "Buffer". Consider using buffer polyfill to make sure `globalThis.Buffer` is defined.')
        }
      } else {
        try {
          return __MEMFS_REQUIRE_BUFFER_REPLACE__
        } catch (_) {
          throw new Error('The current runtime does not support "Buffer". Consider using buffer polyfill to make sure `globalThis.Buffer` is defined.')
        }
      }
    })()

exports.Buffer = _Buffer
