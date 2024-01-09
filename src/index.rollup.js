import { fs } from 'memfs'

export {
  Volume,
  vol,
  createFsFromVolume,
  memfs
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
  accessSync,
  appendFileSync,
  chmodSync,
  chownSync,
  closeSync,
  copyFileSync,
  existsSync,
  fchmodSync,
  fchownSync,
  fdatasyncSync,
  fstatSync,
  fsyncSync,
  ftruncateSync,
  futimesSync,
  lchmodSync,
  lchownSync,
  linkSync,
  lstatSync,
  mkdirSync,
  mkdtempSync,
  openSync,
  readdirSync,
  readFileSync,
  readlinkSync,
  readSync,
  readvSync,
  realpathSync,
  renameSync,
  rmdirSync,
  rmSync,
  statSync,
  symlinkSync,
  truncateSync,
  unlinkSync,
  utimesSync,
  writeFileSync,
  writeSync,
  writevSync,
  access,
  appendFile,
  chmod,
  chown,
  close,
  copyFile,
  createReadStream,
  createWriteStream,
  exists,
  fchmod,
  fchown,
  fdatasync,
  fstat,
  fsync,
  ftruncate,
  futimes,
  lchmod,
  lchown,
  link,
  lstat,
  mkdir,
  mkdtemp,
  open,
  read,
  readv,
  readdir,
  readFile,
  readlink,
  realpath,
  rename,
  rm,
  rmdir,
  stat,
  symlink,
  truncate,
  unlink,
  unwatchFile,
  utimes,
  watch,
  watchFile,
  write,
  writev,
  writeFile,
  StatWatcher,
  FSWatcher,
  WriteStream,
  ReadStream,
  promises,
  _toUnixTimestamp,
  __vol
} = fs
