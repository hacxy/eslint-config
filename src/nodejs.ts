import baseLinter from '@antfu/eslint-config';
import { CommonRules } from './rules/common';
import { NodejsRules } from './rules/nodejs';

const linter: typeof baseLinter = (options, ...userConfig) => {
  return baseLinter({
    typescript: true,
    ...options,
    rules: {
      ...CommonRules,
      ...NodejsRules,
      ...options?.rules,
    },
  }, ...userConfig);
};

export default linter;
