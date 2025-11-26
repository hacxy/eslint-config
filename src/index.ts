import type { AntfuLinter } from './types';
import antfu from '@antfu/eslint-config';
import baseConfig from './rules/base';
import nodejs from './rules/nodejs';
import antfuOptions from './rules/options';
import react from './rules/react';
import vue from './rules/vue';

const hacxy: AntfuLinter = (options, ...configs) => {
  return antfu(
    {
      ...antfuOptions,
      ...options,
    },
    baseConfig,
    ...configs,
  );
};

export default hacxy;

export {
  nodejs,
  react,
  vue
};
