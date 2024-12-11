import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/nodejs.ts', 'src/vue.ts', 'src/react.ts'],
  dts: true,
  shims: true,
});
