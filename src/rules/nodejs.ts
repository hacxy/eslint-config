import type { LintOptions } from '../types';

const nodejs: LintOptions = [{
  name: 'hacxy/nodejs',
  rules: {
    'no-console': 0,
    'antfu/no-import-dist': 0
  },
}];

export default nodejs;
