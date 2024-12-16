import type { AntfuLinter } from './types';
import baseLinter from '@antfu/eslint-config';
import { CommonRules } from './rules/common';

const linter: AntfuLinter = (options, ...userConfig) => {
  return baseLinter({
    typescript: true,
    yaml: true,
    formatters: {
      css: true,
      html: true,
      markdown: true,
    },
    ...options,
    rules: {
      ...CommonRules,
      ...options?.rules,
    },
  }, ...userConfig);
};

export default linter;
