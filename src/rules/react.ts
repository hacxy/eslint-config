import type { LintOptions } from '../types';

const react: LintOptions = [{
  name: 'hacxy/react',
  rules: {
    'react/no-prop-types': [2],
    'react/no-nested-components': [2],
    'react-hooks/set-state-in-effect': [2],
  },
}];

export default react;
