import * as fs from 'node:fs';
import * as path from 'node:path';
import type { Plugin } from 'vite';

export const plugin = (): Plugin => ({
	name: 'js-imports',
	resolveId(importee, importer) {
		if (importer?.includes('/node_modules/')) {
			return;
		}

		importee =
			importer === undefined
				? importee
				: path.resolve(path.dirname(importer), importee);

		if (importee.endsWith('.js')) {
			// Check if the *.ts equivalent exists
			const tsFile = importee.replace(/\.js$/, '.ts');
			if (fs.existsSync(tsFile)) {
				return tsFile;
			}

			// Check if the file exists without a .js extension (e.g. `.vue.js`)
			const nonJsExtensionFile = importee.replace(/\.js$/, '');
			if (fs.existsSync(nonJsExtensionFile)) {
				return nonJsExtensionFile;
			}
		}
	},
});
