import type { AntfuLinter } from './types';
import baseLinter from '@antfu/eslint-config';
import { CommonRules } from './rules/common';

const linter: AntfuLinter = (options, ...userConfig) => {
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
