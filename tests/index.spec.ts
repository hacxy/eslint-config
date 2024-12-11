import linter from 'dist/index';
import nestjsLinter from 'dist/nestjs';
import { assertType, expectTypeOf, it } from 'vitest';

it('types work properly', () => {
  expectTypeOf(linter).toBeFunction();
  expectTypeOf(nestjsLinter).toBeFunction();
  assertType(linter());
  assertType(nestjsLinter({}));
});
