import type { Rules } from '@antfu/eslint-config';

export const ReactRules: Rules = {
  // 不允许使用propTypes
  'react/no-prop-types': [2],
  // 无嵌套组件
  'react/no-nested-components': [2],
};
