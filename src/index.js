var memfs = require('memfs');

exports.Volume = memfs.Volume;
exports.vol = memfs.vol;
exports.createFsFromVolume = memfs.createFsFromVolume;
exports.fs = memfs.fs;

exports.versions = {
  memfs: __MEMFS_BROWSER_ORIGINAL_VERSION__,
  build: __MEMFS_BROWSER_VERSION__
};

exports.path = require('path')
exports.Buffer = require('buffer').Buffer

module.exports = Object.assign({}, exports, memfs.fs);
module.exports.semantic = memfs.semantic;
