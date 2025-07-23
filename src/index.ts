import type { AntfuLinter } from './types';
import antfu from '@antfu/eslint-config';
import { CommonRules } from './rules/common';

const hacxy: AntfuLinter = (options, ...userConfig) => {
  return antfu(
    {
      typescript: true,
      yaml: true,
      markdown: true,
      jsonc: true,
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
    },
    ...userConfig,
  );
};

export default hacxy;
