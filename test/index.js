// index.js

/// <reference path="../index.d.ts" />

console.log(memfs)

const { vol } = memfs

vol.fromJSON({}, '/')
console.log(vol.lstatSync('/'))
