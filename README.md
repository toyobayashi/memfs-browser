# memfs-browser

`memfs` UMD bundle for browser

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

- Webpack

    ```js
    import * as memfs from 'memfs-browser'
    // const memfs = require('memfs-browser')

    console.log(memfs.versions.memfs) // original memfs version
    console.log(memfs.versions.build) // version of current build
    ```
