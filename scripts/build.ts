import { execaCommandSync as exec } from 'execa';
import { chProjectDir, copyPackageFiles, rmDist, tsc } from 'lionconfig';

chProjectDir(import.meta.url);
rmDist();
await tsc();
await copyPackageFiles();
