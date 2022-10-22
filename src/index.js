var memfs = require('memfs');

memfs.versions = {
  memfs: __MEMFS_BROWSER_ORIGINAL_VERSION__,
  build: __MEMFS_BROWSER_VERSION__
};

module.exports = memfs;
