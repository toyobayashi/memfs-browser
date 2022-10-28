export {
  Volume,
  vol,
  createFsFromVolume,
  fs
} from 'memfs'

import path from 'path'
import { Buffer } from 'buffer'

export const versions = {
  memfs: __MEMFS_BROWSER_ORIGINAL_VERSION__,
  build: __MEMFS_BROWSER_VERSION__
}

export { path }
export { Buffer }
