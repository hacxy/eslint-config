import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/react.ts',
    'src/vue.ts',
    'src/nodejs.ts',

  ],
  shims: true,
  format: ['esm'],
});

