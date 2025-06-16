import type { AntfuLinter } from './types';
import antfu from '@antfu/eslint-config';
import { CommonRules } from './rules/common';

const defineLint: AntfuLinter = (options, ...userConfig) => {
  return antfu({
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

export default defineLint;
