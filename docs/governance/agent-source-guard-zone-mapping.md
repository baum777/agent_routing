# Agent Source Guard Zone Mapping (Working Spec)

Class: non-canonical working artifact.  
Use rule: supports deterministic `TargetGovernanceZone` resolution for `AgentProposal` governance checks only.

## Scope

- not a new SOT layer
- does not override canonical sources
- evaluates proposal target governance only
- `ELIGIBLE` does not mean commit- or execution-authorized

## Normalization

1. trim whitespace
2. convert `\` to `/`
3. reject absolute POSIX and drive-qualified Windows paths
4. trim leading `./`
5. collapse repeated `/`
6. resolve `.`
7. resolve internal `..`
8. block `..` escaping repository root as `INVALID_PATH`
9. compare case-insensitively while preserving normalized spelling
10. exact rules before prefix rules

## Mapping

| Pattern | Zone |
| --- | --- |
| `AGENTS.md`, `README.md`, `docs/canonical-sources.md`, `docs/domain-scope.md`, `docs/harness.md`, `docs/interface-contracts.md`, `docs/runtime-policy.md`, `docs/architecture.md`, `docs/implementation-plan.md`, `docs/validation.md`, `.codex/shared-core-consumer.json`, `.codex/repo-intake-inputs.json`, `.codex/runtime-policy-inputs.json` | `canonical_core` |
| `docs/governance/**`, `docs/repo-specific-canonical-sources.md`, `docs/codex-workflow-consumer.md` | `system_governance` |
| `WORK_LOG.md`, `docs/iterations/**`, `docs/slices/**`, `docs/execution/**` | `iteration_execution` |
| `package.json`, `package-lock.json`, `scripts/**`, `system/**`, `src/**`, `runtime/**`, `app/**` | `runtime_governance_code` |
| `tests/**`, `test/**`, `__tests__/**`, `coverage/**`, `artifacts/**`, `docs/evidence/**` | `tests_evidence` |
| `notes/**`, `docs/notes/**`, `_tmp/**`, `tmp/**`, `scratch/**` | `working_notes` |

## Strictness

1. `canonical_core`
2. `system_governance`
3. `runtime_governance_code`
4. `tests_evidence`
5. `iteration_execution`
6. `working_notes`

## Multi-Path Rule

- any `INVALID_PATH` => `BLOCKED`
- any `UNCLASSIFIED` => `BLOCKED` + pre-decision
- otherwise strictest zone wins

## Pre-Decision Fields

`unclassified_path`, `normalization_applied`, `reason_unclassifiable`, `candidate_zone_if_any`, `required_owner_decision`, `canonical_reference_to_update`, `decision_status`.

## Implemented Surface

- `src/governance/target-governance-zone.mjs`
- `scripts/resolve-target-governance-zone.mjs`
- `tests/target-governance-zone.test.mjs`

A code/prose conflict fails closed and must be reconciled deliberately.
