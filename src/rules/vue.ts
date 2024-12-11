import type { Rules } from '@antfu/eslint-config';

export const VueRules = {
  // Vue 属性连字符规则，始终使用连字符
  'vue/attribute-hyphenation': [2, 'always'],
  // Vue 每行最多属性数规则，单行最多 3 个
  'vue/max-attributes-per-line': [2, {
    singleline: 3,
  }],
  // Vue template 模版中组件规则，使用 kebab-case
  'vue/component-name-in-template-casing': [2, 'kebab-case'],
  // Vue 禁止在 await 后面使用 expose 和 生命周期
  'vue/no-expose-after-await': 2,
  'vue/no-lifecycle-after-await': 2,
  // 限制 sfc 语言规则
  'vue/block-lang': [2, {
    script: {
      lang: ['ts', 'tsx'],
    },
    style: {
      lang: 'scss',
    },
  }],
  // 块顺序规则
  'vue/block-order': [2, { order: ['script', 'template', 'style'] }],
  // 组件风格规则，使用 script-setup
  'vue/component-api-style': [2, ['script-setup']],
  // 组件emits声明规则
  'vue/define-emits-declaration': [2, 'type-based'],
  // 组件props声明规则
  'vue/define-props-declaration': [2, 'type-based'],
  // 样式属性规则，必须使用 scoped
  'vue/enforce-style-attribute': [2, { allow: ['scoped'] }],
  // 校验使用 defineOptions
  'vue/valid-define-options': 2,
  // 禁止 template 中使用 this
  'vue/this-in-template': [2, 'never'],
} as Rules;
