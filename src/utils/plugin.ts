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

		for (const extension of ['.js', '.jsx', '.cjs', '.mjs']) {
			if (importee.endsWith(extension)) {
				// Check if the TypeScript equivalent exists
				const typescriptFile = importee.replace(new RegExp(`\\${extension}$`), extension.replace('j', 't'))
				if (fs.existsSync(typescriptFile)) {
					return typescriptFile;
				}
			}
		}

		const trimExtension = (filePath: string) => filePath.replace(/\.[^/.]+$/, "")
		// Check if the file exists without an extension (e.g. `.vue.js` -> `.vue`)
		const nonExtensionFile = trimExtension(importee)
		if (fs.existsSync(nonExtensionFile)) {
			return nonExtensionFile;
		}
	},
});
