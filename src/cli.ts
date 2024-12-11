import baseLinter from '@antfu/eslint-config';
import { CliRules } from './rules/cli';
import { CommonRules } from './rules/common';

const linter: typeof baseLinter = (options, ...userConfig) => {
  return baseLinter({
    typescript: true,
    ...options,
    rules: {
      ...CommonRules,
      ...CliRules,
      ...options?.rules,
    },
  }, ...userConfig);
};

export default linter;
