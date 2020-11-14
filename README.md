# Transvoxel tables for JavaScript

This is the data used for the [Transvoxel algorithm](https://transvoxel.org/) exposed as an npm package. All I did was take the `./Transvoxel.h` file and convert it into TypeScript.

The built package includes `esm`, `iife` and `commonjs` versions as well as type definitions.

The browser version defaults to `esm`, the Node version defaults to `commonjs`.

One performance consideration I haven't evaluated yet is whether it's better to make all of the data a single large `ArrayBuffer` instead of classes. One advantage lower level languages have that JavaScript doesn't make easy is structs and inlining. This is likely a case where you'd want to do that. But if its a problem in my usecase, I'll fix it here.

If you're running in a browser which doesn't support ESM, try using `transvoxel-iife.js`.

### Installation

yarn:

```bash
yarn add transvoxel-data
```

npm:

```bash
npm install transvoxel-data
```
