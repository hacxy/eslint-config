import type { LintOptions } from '../types';

const nodejs: LintOptions = [{
  name: 'hacxy/nodejs',
  rules: {
    'no-console': 0,
  },
}];

export default nodejs;
