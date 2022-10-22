# memfs-browser

`memfs` UMD bundle for browser.

The code shipped in this package is not transpiled by babel.

## Usage

```bash
npm install memfs-browser
```

- HTML `<script>`

    ```html
    <script src="./node_modules/memfs-browser/dist/memfs.min.js"></script>
    <script src="./index.js"></script>
    ```

    ```js
    // index.js

    /// <reference path="./node_modules/memfs-browser/index.d.ts" />

    console.log(memfs.versions.memfs) // original memfs version
    console.log(memfs.versions.build) // version of current build
    ```

- HTML `<script type="module">`

    ```html
    <script type="importmap">
      {
        "imports": {
          "memfs-browser": "./node_modules/memfs-browser/dist/memfs.esm.min.js"
        }
      }
    </script>
    <script type="module" src="./index.js"></script>
    ```

    ```js
    import * as memfs from 'memfs-browser'

    // `fs.*` are not exported
    // memfs is { Volume, createFsFromVolume, fs, versions, vol }

    console.log(memfs.versions.memfs) // original memfs version
    console.log(memfs.versions.build) // version of current build
    ```

- Webpack

    ```js
    import * as memfs from 'memfs-browser'
    // const memfs = require('memfs-browser')

    console.log(memfs.versions.memfs) // original memfs version
    console.log(memfs.versions.build) // version of current build
    ```
