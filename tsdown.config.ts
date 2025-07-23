import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/rules/common.ts',
    'src/rules/node.ts',
    'src/rules/react.ts',
    'src/rules/vue.ts'
  ],
  shims: true,
  format: ['esm'],
});

