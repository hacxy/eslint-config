import baseLinter from '@antfu/eslint-config';
import { CommonRules } from './rules/common';

const linter: typeof baseLinter = (options, ...userConfig) => {
  return baseLinter({
    typescript: true,
    ...options,
    rules: {
      ...CommonRules,
      ...options?.rules,
    },
  }, ...userConfig);
};

export default linter;
