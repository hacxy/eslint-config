import baseLinter from '@antfu/eslint-config';
import { CommonRules } from './rules/common';
import { VueRules } from './rules/vue';

const linter: typeof baseLinter = (options, ...userConfig) => {
  return baseLinter({
    typescript: true,
    vue: true,
    ...options,
    rules: {
      ...CommonRules,
      ...VueRules,
      ...options?.rules,
    },
  }, ...userConfig);
};

export default linter;
