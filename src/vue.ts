import type { AntfuLinter } from './types';
import commonLinter from './index';
import { VueRules } from './rules/vue';

const defineLint: AntfuLinter = (options, ...userConfig) => {
  return commonLinter({
    vue: true,
    ...options,
    rules: {
      ...VueRules,
      ...options?.rules,
    },
  }, ...userConfig);
};

export default defineLint;
