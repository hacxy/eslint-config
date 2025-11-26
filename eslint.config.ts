import defineLint from './src';

export default defineLint({
  typescript: true
},
{
  rules: {
    'node/prefer-global/process': 0
  }
});
