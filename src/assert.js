function assert (v, m) {
  if (!v) {
    throw new Error(m || 'AssertionError')
  }
}

assert.strictEqual = function (a, b, m) {
  if (!Object.is(a, b)) {
    throw new Error(m || 'AssertionError')
  }
}

module.exports = assert
