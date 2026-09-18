const ZONE_ORDER = Object.freeze([
  'canonical_core',
  'system_governance',
  'runtime_governance_code',
  'tests_evidence',
  'iteration_execution',
  'working_notes'
]);

const ZONE_RANK = new Map(ZONE_ORDER.map((zone, index) => [zone, index]));

const EXACT_RULES = new Map([
  ['agents.md', 'canonical_core'],
  ['readme.md', 'canonical_core'],
  ['docs/canonical-sources.md', 'canonical_core'],
  ['docs/domain-scope.md', 'canonical_core'],
  ['docs/harness.md', 'canonical_core'],
  ['docs/interface-contracts.md', 'canonical_core'],
  ['docs/runtime-policy.md', 'canonical_core'],
  ['docs/architecture.md', 'canonical_core'],
  ['docs/implementation-plan.md', 'canonical_core'],
  ['docs/validation.md', 'canonical_core'],
  ['.codex/shared-core-consumer.json', 'canonical_core'],
  ['.codex/repo-intake-inputs.json', 'canonical_core'],
  ['.codex/runtime-policy-inputs.json', 'canonical_core'],
  ['docs/repo-specific-canonical-sources.md', 'system_governance'],
  ['docs/codex-workflow-consumer.md', 'system_governance'],
  ['work_log.md', 'iteration_execution'],
  ['package.json', 'runtime_governance_code'],
  ['package-lock.json', 'runtime_governance_code']
]);

const PREFIX_RULES = Object.freeze([
  ['docs/governance/', 'system_governance'],
  ['docs/iterations/', 'iteration_execution'],
  ['docs/slices/', 'iteration_execution'],
  ['docs/execution/', 'iteration_execution'],
  ['scripts/', 'runtime_governance_code'],
  ['system/', 'runtime_governance_code'],
  ['src/', 'runtime_governance_code'],
  ['runtime/', 'runtime_governance_code'],
  ['app/', 'runtime_governance_code'],
  ['tests/', 'tests_evidence'],
  ['test/', 'tests_evidence'],
  ['__tests__/', 'tests_evidence'],
  ['coverage/', 'tests_evidence'],
  ['artifacts/', 'tests_evidence'],
  ['docs/evidence/', 'tests_evidence'],
  ['notes/', 'working_notes'],
  ['docs/notes/', 'working_notes'],
  ['_tmp/', 'working_notes'],
  ['tmp/', 'working_notes'],
  ['scratch/', 'working_notes']
]);

function invalid(inputPath, reason) {
  return { ok: false, inputPath, normalizedPath: null, reason };
}

function normalizeRepoPath(inputPath) {
  if (typeof inputPath !== 'string' || inputPath.trim() === '') {
    return invalid(inputPath, 'EMPTY_PATH');
  }

  let value = inputPath.trim().replace(/\\/g, '/');

  if (/^[a-zA-Z]:\//.test(value) || value.startsWith('/')) {
    return invalid(inputPath, 'ABSOLUTE_PATH');
  }

  while (value.startsWith('./')) value = value.slice(2);
  value = value.replace(/\/+/g, '/');

  const segments = [];
  for (const segment of value.split('/')) {
    if (segment === '' || segment === '.') continue;

    if (segment === '..') {
      if (segments.length === 0) return invalid(inputPath, 'REPOSITORY_ESCAPE');
      segments.pop();
      continue;
    }

    segments.push(segment);
  }

  if (segments.length === 0) return invalid(inputPath, 'EMPTY_NORMALIZED_PATH');

  return { ok: true, inputPath, normalizedPath: segments.join('/') };
}

function classifyPath(inputPath) {
  const normalized = normalizeRepoPath(inputPath);

  if (!normalized.ok) {
    return {
      inputPath,
      normalizedPath: normalized.normalizedPath,
      status: 'INVALID_PATH',
      zone: null,
      matchedRule: null,
      reason: normalized.reason
    };
  }

  const comparable = normalized.normalizedPath.toLowerCase();

  if (EXACT_RULES.has(comparable)) {
    return {
      inputPath,
      normalizedPath: normalized.normalizedPath,
      status: 'CLASSIFIED',
      zone: EXACT_RULES.get(comparable),
      matchedRule: comparable,
      reason: 'EXACT_RULE'
    };
  }

  for (const [prefix, zone] of PREFIX_RULES) {
    if (comparable.startsWith(prefix)) {
      return {
        inputPath,
        normalizedPath: normalized.normalizedPath,
        status: 'CLASSIFIED',
        zone,
        matchedRule: `${prefix}**`,
        reason: 'PREFIX_RULE'
      };
    }
  }

  return {
    inputPath,
    normalizedPath: normalized.normalizedPath,
    status: 'UNCLASSIFIED',
    zone: null,
    matchedRule: null,
    reason: 'NO_MAPPING_RULE'
  };
}

function resolveTargetGovernanceZone(paths) {
  if (!Array.isArray(paths) || paths.length === 0) {
    return { decision: 'BLOCKED', reason: 'EMPTY_TARGET_SET', resolvedZone: null, paths: [] };
  }

  const resolutions = paths.map(classifyPath);

  if (resolutions.some((entry) => entry.status === 'INVALID_PATH')) {
    return { decision: 'BLOCKED', reason: 'INVALID_PATH', resolvedZone: null, paths: resolutions };
  }

  if (resolutions.some((entry) => entry.status === 'UNCLASSIFIED')) {
    return { decision: 'BLOCKED', reason: 'UNCLASSIFIED_PATH', resolvedZone: null, paths: resolutions };
  }

  const resolvedZone = resolutions
    .map((entry) => entry.zone)
    .sort((a, b) => ZONE_RANK.get(a) - ZONE_RANK.get(b))[0];

  return {
    decision: 'ELIGIBLE',
    reason: 'STRICTEST_ZONE_SELECTED',
    resolvedZone,
    paths: resolutions
  };
}

export {
  EXACT_RULES,
  PREFIX_RULES,
  ZONE_ORDER,
  classifyPath,
  normalizeRepoPath,
  resolveTargetGovernanceZone
};
