import test from 'node:test';
import assert from 'node:assert/strict';

import {
  classifyPath,
  normalizeRepoPath,
  resolveTargetGovernanceZone
} from '../src/governance/target-governance-zone.mjs';

test('classifies canonical exact paths case-insensitively', () => {
  const result = classifyPath('DoCs/Architecture.md');
  assert.equal(result.status, 'CLASSIFIED');
  assert.equal(result.zone, 'canonical_core');
});

test('normalizes Windows separators', () => {
  const result = classifyPath('scripts\\validate-consumer-linkage.ps1');
  assert.equal(result.normalizedPath, 'scripts/validate-consumer-linkage.ps1');
  assert.equal(result.zone, 'runtime_governance_code');
});

test('resolves internal dot-dot segments before classification', () => {
  const result = classifyPath('./docs/governance/../validation.md');
  assert.equal(result.normalizedPath, 'docs/validation.md');
  assert.equal(result.zone, 'canonical_core');
});

test('prefix rules match only from repository root', () => {
  assert.equal(classifyPath('tests/a.spec.mjs').zone, 'tests_evidence');
  assert.equal(classifyPath('foo/tests/a.spec.mjs').status, 'UNCLASSIFIED');
});

test('strictest zone wins', () => {
  const result = resolveTargetGovernanceZone([
    'notes/operator.md',
    'tests/a.test.mjs',
    'src/governance/target-governance-zone.mjs',
    'docs/harness.md'
  ]);
  assert.equal(result.decision, 'ELIGIBLE');
  assert.equal(result.resolvedZone, 'canonical_core');
});

test('unclassified path blocks full proposal', () => {
  const result = resolveTargetGovernanceZone(['src/a.mjs', 'unknown/new-surface.md']);
  assert.equal(result.decision, 'BLOCKED');
  assert.equal(result.reason, 'UNCLASSIFIED_PATH');
});

test('repository escape is invalid', () => {
  const normalized = normalizeRepoPath('../../outside.md');
  assert.equal(normalized.ok, false);
  assert.equal(normalized.reason, 'REPOSITORY_ESCAPE');
});

test('absolute Windows path is invalid', () => {
  const result = classifyPath('C:\\workspace\\file.md');
  assert.equal(result.status, 'INVALID_PATH');
  assert.equal(result.reason, 'ABSOLUTE_PATH');
});

test('absolute POSIX path is invalid', () => {
  const result = classifyPath('/etc/passwd');
  assert.equal(result.status, 'INVALID_PATH');
});

test('empty target set blocks', () => {
  const result = resolveTargetGovernanceZone([]);
  assert.equal(result.decision, 'BLOCKED');
  assert.equal(result.reason, 'EMPTY_TARGET_SET');
});

test('new canonical harness surfaces classify as canonical core', () => {
  assert.equal(classifyPath('docs/harness.md').zone, 'canonical_core');
  assert.equal(classifyPath('docs/runtime-policy.md').zone, 'canonical_core');
  assert.equal(classifyPath('.codex/runtime-policy-inputs.json').zone, 'canonical_core');
});

test('package manifest is runtime governance code', () => {
  assert.equal(classifyPath('package.json').zone, 'runtime_governance_code');
});
