import type antfu from '@antfu/eslint-config';
import type { Linter } from 'eslint';

export type AntfuLinter = typeof antfu;
export type LintOptions = Linter.Config<Linter.RulesRecord>[];
