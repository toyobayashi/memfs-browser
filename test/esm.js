import * as memfs from '../dist/memfs.esm.js'

console.log(memfs)

const { vol } = memfs

vol.fromJSON({}, '/')
console.log(vol.lstatSync('/'))
