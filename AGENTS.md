# Agent Routing Operating Contract

Class: canonical.  
Use rule: repo-local operating contract for `agent_routing`.

## Mission

`agent_routing` is a local AI-OS harness control plane and a consumer of `model-agnostic-workflow-system`.

It MUST NOT become a copied or forked shared core. Portable skills, workflow classes, provider-neutral contracts, validators, and reusable templates remain owned by the shared core. This repository owns only local context, local governance decisions, local control-plane implementation, local adapters, and local evidence.

## Current Claim Status

- Shared-core consumption: contract-backed.
- Harness architecture: canonical and contract-backed.
- Target-governance-zone resolution: runtime-implemented as a local deterministic CLI/library.
- Runtime-policy consumer inputs: contract-backed.
- Execution adapter: missing / blocked.
- Provider invocation: missing / blocked.
- Network runtime: missing / blocked.
- Persistent memory: missing / blocked.
- Matrix adapter/runtime: planned only.
- Production/deployment readiness: not claimed.

## Required Read Order

1. `AGENTS.md`
2. `README.md`
3. `docs/canonical-sources.md`
4. `.codex/shared-core-consumer.json`
5. `.codex/repo-intake-inputs.json`
6. `.codex/runtime-policy-inputs.json`
7. `docs/domain-scope.md`
8. `docs/harness.md`
9. `docs/interface-contracts.md`
10. `docs/runtime-policy.md`
11. `docs/architecture.md`
12. `docs/implementation-plan.md`
13. `docs/validation.md`

## Core Invariants

1. Governance-first and fail-closed.
2. `AgentProposal` is not authority.
3. Approval is not execution.
4. Routing never widens permissions or authority.
5. Provider choice never widens permissions, context, tool scope, or data exposure.
6. Unknown or invalid target paths block the proposal.
7. Shared-core artifacts are consumed through explicit contracts; do not copy reusable semantics into local authority without an adoption decision.
8. Local memory, if added later, is non-canonical until explicit review/promotion.
9. Evidence is required for implementation claims.
10. No secret-bearing data may be added to model-visible or persisted surfaces without a separately approved secret boundary.

## Current Execution Boundary

Allowed now:

- local deterministic parsing/classification
- local proposal/governance evaluation
- read-only shared-core contract consumption
- tests and validators
- evidence/status production

Not allowed now:

- autonomous execution
- remote execution
- provider/model calls
- write-capable external tools
- background jobs/daemons
- credential discovery
- Matrix traffic
- deployment activation

## Shared-Core Boundary

Shared-core authority:

- portable skills
- workflow routing classes
- output contracts
- provider-neutral capability semantics
- shared validators/evals
- shared-with-local-inputs skills such as `repo-intake-sot-mapper` and `runtime-policy-auditor`

Repo-local authority:

- target governance zones
- local proposal semantics
- local runtime posture
- local approval/authority policy
- local domain adapters
- local evidence and validation state

## TTD / Evidence Rule

For meaningful work record:

- Decision
- Owner / Scope
- Contract
- Gate / Test
- Smallest implementation slice
- Evidence
- Next gate

## Stop Conditions

Stop and report `BLOCKED` when:

- authority or source precedence is unclear;
- a path is invalid or unclassified;
- a proposal attempts to bypass approval or policy;
- a shared-core/local contract conflict is unresolved;
- a required validator cannot be run or evidence cannot be produced;
- an edit would overwrite unknown concurrent work;
- execution requires a capability not explicitly implemented and allowed.

## Workspace Root Integration

When entering from `/home/baum/workspace/baum-os`:

1. read root frontdoor files;
2. read this repository's frontdoor and canonical docs;
3. identify local vs shared-core ownership;
4. reuse existing shared-core assets where applicable;
5. implement the smallest safe local slice;
6. validate and record evidence;
7. leave unresolved runtime or authority expansion blocked.
