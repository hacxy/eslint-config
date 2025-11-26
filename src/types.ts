import type antfu from '@antfu/eslint-config';
import type { Awaitable, TypedFlatConfigItem } from '@antfu/eslint-config';
import type { Linter } from 'eslint';

export type AntfuLinter = typeof antfu;
export type LintOptions = Awaitable<TypedFlatConfigItem | TypedFlatConfigItem[] | Linter.Config<Linter.RulesRecord>[]>;
