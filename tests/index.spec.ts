import Linter from 'dist/index';
import NodejsLinter from 'dist/nodejs';
import { assertType, expectTypeOf, it } from 'vitest';

it('types work properly', () => {
  expectTypeOf(Linter).toBeFunction();
  expectTypeOf(NodejsLinter).toBeFunction();
  assertType(Linter());
  assertType(NodejsLinter({}));
});
