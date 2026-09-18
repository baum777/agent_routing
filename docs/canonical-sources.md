# Canonical Sources

Class: canonical.  
Use rule: maps local authority; does not replace shared-core or workspace authority.

## Local Canonical Sources

- `AGENTS.md`: repo-local operating contract.
- `README.md`: purpose and entrypoint.
- `docs/domain-scope.md`: product/runtime/domain boundary.
- `docs/harness.md`: local harness and AI-OS model.
- `docs/interface-contracts.md`: local interface boundaries.
- `docs/runtime-policy.md`: local runtime posture and stop rules.
- `docs/architecture.md`: architecture and ownership boundary.
- `docs/implementation-plan.md`: ordered gates.
- `docs/validation.md`: evidence posture.
- `.codex/shared-core-consumer.json`: shared-core consumer overlay.
- `.codex/repo-intake-inputs.json`: repo-intake local input contract.
- `.codex/runtime-policy-inputs.json`: runtime-policy local input contract.

## Operational Projections

These are machine-readable implementation/config/status surfaces, not independent higher-precedence sources:

- `system/harness/harness-contract.json`
- `system/harness/status.json`
- `src/governance/target-governance-zone.mjs`
- `scripts/resolve-target-governance-zone.mjs`

If an operational projection conflicts with canonical policy, fail closed.

## External Authority

- workspace/portfolio coordination: workspace root and `agentic_workflow/portfolio`
- reusable workflow/core semantics: `agentic_workflow/model-agnostic-workflow-system`

## Non-Authoritative Surfaces

Logs, generated output, coverage, temporary files, unreviewed notes, runtime evidence by itself, and `docs/governance/**/*.md` working artifacts unless promoted.

## Claim Status

- harness control-plane model: canonical
- shared-core consumption: contract-backed
- target-zone resolver: runtime-implemented
- authority/approval evaluator: planned
- executor: missing / blocked
- provider/model runtime: missing / blocked
- persistent memory: missing
- Matrix runtime: planned only
