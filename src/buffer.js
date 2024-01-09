var _Buffer = typeof global.Buffer === 'function'
  ? global.Buffer
  : /*#__PURE__*/ (function () {
      try {
        return __non_webpack_require__('buffer').Buffer
      } catch (_) {
        throw new Error('The current runtime does not support "Buffer". Consider using buffer polyfill to make sure `globalThis.Buffer` is defined.')
      }
    })()

exports.Buffer = _Buffer
