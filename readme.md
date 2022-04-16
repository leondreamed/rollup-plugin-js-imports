# vite-plugin-js-imports

[![npm version](https://img.shields.io/npm/v/vite-plugin-js-imports)](https://npmjs.com/package/vite-plugin-js-imports)

## Installation

```shell
npm install --save-dev vite-plugin-js-imports
```

## Usage

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsImports from 'vite-plugin-js-imports';

export default defineConfig({
	plugins: [vue(), jsImports()],
});
```
