import type { LintOptions } from '../types';

const baseConfig: LintOptions = [{
  name: 'hacxy/base',
  rules: {
    'complexity': [2, { max: 15 }],
    'eqeqeq': [2, 'always'],
    'camelcase': 2,
    'one-var': [2, 'never'],
    'max-lines': [2, { max: 300 }],
    'no-console': 2,
    'no-debugger': 2,
    'no-undefined': 2,
    'no-var': 2,
    'style/no-trailing-spaces': 2,
    'style/quotes': [2, 'single'],
    'style/semi': [2, 'always'],
    'style/no-extra-parens': 2,
    'style/comma-dangle': [2, 'only-multiline'],
    'style/arrow-parens': [2, 'as-needed'],
    'style/no-tabs': 2,
    'style/indent': [2, 2],
    'style/linebreak-style': [2, 'unix'],
    'unused-imports/no-unused-imports': 2,
  },
}];

export default baseConfig;
