// index.js

/// <reference path="../index.d.ts" />

console.log(memfs)

const { fs, vol } = memfs

const { readFileSync, writeFileSync } = fs

writeFileSync('/hello.txt', 'World!');
console.log(readFileSync('/hello.txt', 'utf8')); // World!

const json = {
  './README.md': '1',
  './src/index.js': '2',
  './node_modules/debug/index.js': '3',
};
vol.fromJSON(json, '/app');

console.log(readFileSync('/app/README.md', 'utf8')); // 1
console.log(vol.readFileSync('/app/src/index.js', 'utf8')); // 2
