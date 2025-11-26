import type { OptionsConfig, TypedFlatConfigItem } from '@antfu/eslint-config';

const antfuOptions: OptionsConfig & Omit<TypedFlatConfigItem, 'files'> = {
  stylistic: true,
  formatters: {
    markdown: true,
    css: true,
    html: true,
  },
};

export default antfuOptions;
