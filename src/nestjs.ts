import baseLinter from '@antfu/eslint-config';
import { CommonRules } from './rules/common';
import { NestjsRules } from './rules/nestjs';

const linter: typeof baseLinter = (options, ...userConfig) => {
  return baseLinter({
    typescript: true,
    ...options,
    rules: {
      ...CommonRules,
      ...NestjsRules,
      ...options?.rules,
    },
  }, ...userConfig);
};

export default linter;
