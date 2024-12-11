import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/cli.ts', 'src/vue.ts', 'src/nestjs.ts'],
  dts: true,
  shims: true,
});
