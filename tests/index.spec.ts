import defineLint from 'dist/index';
import defineNodeJsLint from 'dist/nodejs';
import { assertType, expectTypeOf, it } from 'vitest';

it('types work properly', () => {
  expectTypeOf(defineLint).toBeFunction();
  expectTypeOf(defineNodeJsLint).toBeFunction();
  assertType(defineLint());
  assertType(defineNodeJsLint({}));
});
