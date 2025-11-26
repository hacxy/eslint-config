import type { LintOptions } from '../types';

const vue: LintOptions = [{
  name: 'hacxy/vue',
  rules: {
    'vue/attribute-hyphenation': [2, 'always'],
    'vue/max-attributes-per-line': [2, {
      singleline: 3,
    }],
    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    'vue/no-expose-after-await': 2,
    'vue/no-lifecycle-after-await': 2,
    'vue/block-order': [2, { order: ['script', 'template', 'style'] }],
    'vue/component-api-style': [2, ['script-setup']],
    'vue/define-emits-declaration': [2, 'type-based'],
    'vue/define-props-declaration': [2, 'type-based'],
    'vue/enforce-style-attribute': [2, { allow: ['scoped'] }],
    'vue/valid-define-options': 2,
    'vue/this-in-template': [2, 'never'],
  },
}];

export default vue;
