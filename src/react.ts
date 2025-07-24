import type { AntfuLinter } from './types';
import commonLinter from './index';
import { ReactRules } from './rules/react';

const hacxy: AntfuLinter = (options, ...userConfig) => {
  return commonLinter({
    react: true,
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
      ...ReactRules,
      ...options?.rules
    },
  }, ...userConfig);
};
export default hacxy;
