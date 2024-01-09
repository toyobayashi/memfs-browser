import { fs } from 'memfs'

export {
  Volume,
  vol,
  createFsFromVolume,
} from 'memfs'

export { fs }

export const semantic = true

import path from 'path'
import { Buffer } from 'buffer'

export const versions = {
  memfs: __MEMFS_BROWSER_ORIGINAL_VERSION__,
  build: __MEMFS_BROWSER_VERSION__
}

export { path }
export { Buffer }

// re-export from fs

export const {
  F_OK,
  R_OK,
  W_OK,
  X_OK,
  constants,
  Stats,
  Dirent,
  renameSync,
  ftruncateSync,
  truncateSync,
  chownSync,
  fchownSync,
  lchownSync,
  chmodSync,
  fchmodSync,
  lchmodSync,
  statSync,
  lstatSync,
  fstatSync,
  linkSync,
  symlinkSync,
  readlinkSync,
  realpathSync,
  unlinkSync,
  rmdirSync,
  mkdirSync,
  mkdirpSync,
  readdirSync,
  closeSync,
  openSync,
  utimesSync,
  futimesSync,
  fsyncSync,
  writeSync,
  readSync,
  readFileSync,
  writeFileSync,
  appendFileSync,
  existsSync,
  accessSync,
  fdatasyncSync,
  mkdtempSync,
  copyFileSync,
  rmSync,
  createReadStream,
  createWriteStream,
  rename,
  ftruncate,
  truncate,
  chown,
  fchown,
  lchown,
  chmod,
  fchmod,
  lchmod,
  stat,
  lstat,
  fstat,
  link,
  symlink,
  readlink,
  realpath,
  unlink,
  rmdir,
  mkdir,
  mkdirp,
  readdir,
  close,
  open,
  utimes,
  futimes,
  fsync,
  write,
  read,
  readFile,
  writeFile,
  appendFile,
  exists,
  access,
  fdatasync,
  mkdtemp,
  copyFile,
  rm,
  watchFile,
  unwatchFile,
  watch,
  StatWatcher,
  FSWatcher,
  WriteStream,
  ReadStream,
  promises,
  _toUnixTimestamp
} = fs
