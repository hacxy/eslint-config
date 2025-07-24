import type { AntfuLinter } from './types';
import commonLinter from './index';
import { VueRules } from './rules/vue';

const hacxy: AntfuLinter = (options, ...userConfig) => {
  return commonLinter({
    vue: true,
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
      ...VueRules,
      ...options?.rules,
    },
  }, ...userConfig);
};

export default hacxy;
