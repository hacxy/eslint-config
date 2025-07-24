import type { AntfuLinter } from './types';
import commonLinter from './index';
import { NodejsRules } from './rules/nodejs';

const hacxy: AntfuLinter = (options, ...userConfig) => {
  return commonLinter({
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
      ...NodejsRules,
      ...options?.rules,
    },
  }, ...userConfig);
};

export default hacxy;
