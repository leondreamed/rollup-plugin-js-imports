import { join } from 'desm';
import { execa } from 'execa';
import { test } from 'vitest';

test('js-imports plugin works', async () => {
	await execa('vite', ['build'], {
		cwd: join(import.meta.url, '../fixtures/my-project'),
	});
});
