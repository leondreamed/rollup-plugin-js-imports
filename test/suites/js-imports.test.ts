import { test } from 'vitest';
import { execa } from 'execa'
import { join } from 'desm'

test('js-imports plugin works', async () => {
	await execa('vite', ['build'], {
		cwd: join(import.meta.url, '../fixtures/my-project')
	});
});
