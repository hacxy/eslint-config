import type { AntfuLinter } from './types';
import commonLinter from './index';
import { VueRules } from './rules/vue';

const linter: AntfuLinter = (options, ...userConfig) => {
  return commonLinter({
    vue: true,
    ...options,
    rules: {
      ...VueRules,
      ...options?.rules,
    },
  }, ...userConfig);
};

export default linter;
