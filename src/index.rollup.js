export {
  Volume,
  vol,
  createFsFromVolume,
  fs
} from 'memfs'

export const versions = {
  memfs: __MEMFS_BROWSER_ORIGINAL_VERSION__,
  build: __MEMFS_BROWSER_VERSION__
}
