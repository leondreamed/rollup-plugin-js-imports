# rollup-plugin-js-imports

[![npm version](https://img.shields.io/npm/v/rollup-plugin-js-imports)](https://npmjs.com/package/rollup-plugin-js-imports)

## Installation

```shell
npm install --save-dev rollup-plugin-js-imports
```

## Usage

With [Rollup](https://github.com/rollup/rollup):

```typescript
// rollup.config.js

import jsImports from 'rollup-plugin-js-imports';

export default {
  plugins: [jsImports()],
};
```

With [Vite](https://github.com/vitejs/vite):

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsImports from 'rollup-plugin-js-imports';

export default defineConfig({
  plugins: [vue(), jsImports()],
});
```
