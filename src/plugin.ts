import * as fs from 'node:fs';
import * as path from 'node:path';
import type { Plugin } from 'vite';

export const plugin = (): Plugin => ({
	name: 'vite-plugin-js-imports',
	resolveId(importee, importer) {
		if (importer?.includes('/node_modules/')) {
			return;
		}

		importee =
			importer === undefined
				? importee
				: path.resolve(path.dirname(importer), importee);

		if (importee.endsWith('.js')) {
			const tsFile = importee.replace(/\.js$/, '.ts');
			if (fs.existsSync(tsFile)) {
				return tsFile;
			}
		}
	},
});
