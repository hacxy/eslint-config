import type { Rules } from '@antfu/eslint-config';

export const NestjsRules = {
  // 不强制类型导入
  'ts/consistent-type-imports': 0,
  // 函数参数最多为 5 个
  'max-params': [2, { max: 5 }],
} as Rules;
