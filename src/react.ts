import type { AntfuLinter } from './types';
import commonLinter from './index';
import { ReactRules } from './rules/react';

const linter: AntfuLinter = (options, ...userConfig) => {
  return commonLinter({
    react: true,
    yaml: true,
    ...options,
    rules: {
      ...ReactRules,
      ...options?.rules
    },
  }, ...userConfig);
};
export default linter;
