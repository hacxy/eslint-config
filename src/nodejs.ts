import type { AntfuLinter } from './types';
import commonLinter from './index';
import { NodejsRules } from './rules/nodejs';

const linter: AntfuLinter = (options, ...userConfig) => {
  return commonLinter({
    ...options,
    rules: {
      ...NodejsRules,
      ...options?.rules,
    },
  }, ...userConfig);
};

export default linter;
