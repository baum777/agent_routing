# Agent Source Guard Zone Mapping (Working Spec)

Class: non-canonical working artifact.  
Use rule: this file supports deterministic `TargetGovernanceZone` resolution for `AgentProposal` commit-eligibility checks only.

## Scope And Guardrails

- This Guard is not a new SOT layer.
- This Guard does not override any canonical source.
- This Guard evaluates only commitability of `AgentProposal`; it is not runtime behavior.
- Canonical precedence remains unchanged.

## Deterministic Path Classification

All input paths are repository-root-relative and normalized before matching:

1. Convert `\` to `/`.
2. Trim leading `./`.
3. Match case-insensitively.
4. Apply mapping rules in the table below.
5. If no rule matches, classify as `UNCLASSIFIED` and open a pre-decision item.

## TargetGovernanceZone Mapping

Mapping rule: one path maps to exactly one zone.

| Path pattern (repo relative) | TargetGovernanceZone |
| --- | --- |
| `AGENTS.md`, `README.md`, `docs/canonical-sources.md`, `docs/domain-scope.md`, `docs/interface-contracts.md`, `docs/architecture.md`, `docs/implementation-plan.md`, `docs/validation.md`, `.codex/shared-core-consumer.json`, `.codex/repo-intake-inputs.json` | `canonical_core` |
| `docs/governance/**`, `docs/repo-specific-canonical-sources.md`, `docs/codex-workflow-consumer.md` | `system_governance` |
| `WORK_LOG.md`, `docs/iterations/**`, `docs/slices/**`, `docs/execution/**` | `iteration_execution` |
| `scripts/**`, `system/**`, `src/**`, `runtime/**`, `app/**` | `runtime_governance_code` |
| `tests/**`, `test/**`, `__tests__/**`, `coverage/**`, `artifacts/**`, `docs/evidence/**` | `tests_evidence` |
| `notes/**`, `docs/notes/**`, `_tmp/**`, `tmp/**`, `scratch/**` | `working_notes` |

## Zone Strictness Order

Strictest-to-weakest order:

1. `canonical_core`
2. `system_governance`
3. `runtime_governance_code`
4. `tests_evidence`
5. `iteration_execution`
6. `working_notes`

## Multi-Path Rule

If an `AgentProposal` affects multiple paths:

1. Classify each path to one zone.
2. If any path is `UNCLASSIFIED`, result is `BLOCKED` until a pre-decision is recorded.
3. Otherwise, the strictest zone in the set wins and becomes the proposal `TargetGovernanceZone`.

## Examples

Single-path examples:

- `docs/domain-scope.md` -> `canonical_core`
- `docs/governance/agent-source-guard-zone-mapping.md` -> `system_governance`
- `WORK_LOG.md` -> `iteration_execution`
- `scripts/validate-consumer-linkage.ps1` -> `runtime_governance_code`
- `tests/target-governance-zone.spec.ts` -> `tests_evidence`
- `_tmp/scratch-note.md` -> `working_notes`

Mixed-path examples:

- `docs/governance/agent-source-guard-zone-mapping.md` + `WORK_LOG.md` -> `system_governance` (strictest wins)
- `scripts/validate-consumer-linkage.ps1` + `tests/target-governance-zone.spec.ts` -> `runtime_governance_code` (strictest wins)
- `docs/validation.md` + `notes/operator-note.md` -> `canonical_core` (strictest wins)
- `docs/governance/agent-source-guard-zone-mapping.md` + `unknown/path.md` -> `BLOCKED` (`UNCLASSIFIED` path present)

## Open Pre-Decision Fields For Unclassifiable Paths

Do not guess when a path is not reliably classifiable. Record and block:

| Field | Required value |
| --- | --- |
| `unclassified_path` | exact repo-relative path |
| `normalization_applied` | yes/no + normalized value |
| `reason_unclassifiable` | concrete rule gap |
| `candidate_zone_if_any` | one zone or `none` |
| `required_owner_decision` | owner/authority surface that must decide |
| `canonical_reference_to_update` | target canonical file if mapping must be promoted |
| `decision_status` | must remain `open` until resolved |

Until a pre-decision is resolved, affected proposals remain non-committable.
