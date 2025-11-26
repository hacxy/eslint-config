import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  minify: true,
  shims: true,
  format: ['esm'],
  outExtensions: () => ({ js: '.js' }),
});
