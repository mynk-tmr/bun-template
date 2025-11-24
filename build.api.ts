#!/usr/bin/env bun
import path from 'node:path';

await Bun.$`rm -rf api`;

const start = performance.now();

const result = await Bun.build({
  entrypoints: ['src/backend/app.ts'],
  outdir: 'api',
  minify: true,
  target: 'bun',
  sourcemap: 'linked',
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});

const end = performance.now();

const outputTable = result.outputs.map((output) => ({
  File: path.relative(process.cwd(), output.path),
  Type: output.kind,
  Size: `${(output.size / 1024).toFixed(2)} KB`,
}));

console.table(outputTable);
const buildTime = (end - start).toFixed(2);

console.log(`\n✅ API build completed in ${buildTime}ms\n`);

const args = process.argv.slice(2);

if (args[0]?.trim() !== '-push') {
  process.exit(0);
}

console.log('Pushing to GitHub...');
await Bun.$`git add api && git commit -m "chore: update API build" && git push`;
console.log('✅ Push completed!\n');
