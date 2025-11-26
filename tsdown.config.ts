import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  shims: true,
  minify: true,
  format: ['esm'],
  outExtensions: () => ({ js: '.js' }),
});
