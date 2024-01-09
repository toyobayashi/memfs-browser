var memfs = require('memfs');

exports.Volume = memfs.Volume;
exports.vol = memfs.vol;
exports.createFsFromVolume = memfs.createFsFromVolume;
exports.fs = memfs.fs;
exports.memfs = memfs.memfs;

exports.versions = {
  memfs: __MEMFS_BROWSER_ORIGINAL_VERSION__,
  build: __MEMFS_BROWSER_VERSION__
};

exports.path = require('path')

module.exports = Object.assign(Object.assign({}, module.exports), exports.fs);
module.exports.semantic = memfs.semantic;
