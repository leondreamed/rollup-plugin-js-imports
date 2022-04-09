import * as path from 'node:path';
import * as fs from 'node:fs';
import type { Plugin } from 'rollup';

export const plugin = (): Plugin => ({
	name: 'vite-plugin-js-imports',
	resolveId(importee, importer) {
		if (importer?.includes('node_modules')) {
			return importee;
		}

		importee =
			importer === undefined
				? importee
				: path.resolve(path.dirname(importer), importee);

		if (importee.endsWith('.js') && !fs.existsSync(importee)) {
			return importee.replace(/\.js$/, '.ts');
		}
	},
});
