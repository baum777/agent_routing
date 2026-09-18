# Agent Routing

`agent_routing` is a repository-local **AI operating-system harness control plane** for governed agent work.

Its job is not to provide another agent framework or model runtime. It sits around agents and models and decides **what context they receive, which shared workflows apply, what they may propose, which authority gates apply, and whether a later execution surface may act**.

The repository consumes reusable, provider-neutral capabilities from `model-agnostic-workflow-system` and adds the repo-specific control layer that must remain local.

## Core Idea

```text
Intent
  ↓
Context
  ↓
Shared-Core Routing
  ↓
AgentProposal
  ↓
TargetGovernanceZone
  ↓
Authority + Approval
  ↓
Execution Eligibility
  ↓
Executor
  ↓
Evidence
```

The current implementation stops before the executor.

That separation is intentional:

```text
proposal ≠ authority
routing  ≠ permission
approval ≠ execution
evidence ≠ canonical truth
```

## What This Repo Owns

`agent_routing` owns the **local harness layer**:

- repository and task context boundaries
- target-governance-zone resolution
- local authority and approval semantics
- runtime posture and stop conditions
- execution-eligibility decisions
- local domain/adaptor boundaries
- validation and evidence

It does **not** own reusable workflow semantics.

Those stay in:

`agentic_workflow/model-agnostic-workflow-system`

## Shared-Core Consumer Model

The shared core provides reusable building blocks such as:

- workflow classes and routing semantics
- portable skills
- output contracts
- provider-neutral capability definitions
- validators and evals
- shared-with-local-inputs skills

This repository consumes them through explicit overlays:

- `.codex/shared-core-consumer.json`
- `.codex/repo-intake-inputs.json`
- `.codex/runtime-policy-inputs.json`

Shared-core routing may narrow a local operation, but it may never widen local authority or bypass a local block.

## AI-OS Planes

The harness is split into seven logical planes:

| Plane | Responsibility | Current state |
| --- | --- | --- |
| Context | sources, scope, constraints, provenance | contract-defined |
| Routing | workflow and skill selection from shared core | consumer-backed |
| Governance | source hierarchy, zone, authority, approval | partially implemented |
| Capability | tools, providers, MCPs, adapters | blocked by default |
| Execution | convert eligible proposals into effects | not implemented |
| Memory | scoped non-canonical runtime/project memory | not implemented |
| Evidence | tests, gate results, status, handoff | active |

The model itself is only one component inside this harness.

## Implemented Slice

Current implementation includes:

- canonical harness architecture
- canonical runtime-policy boundary
- `runtime-policy-auditor` consumer adoption
- deterministic `TargetGovernanceZone` resolver
- exact-path and prefix-rule classification
- case-insensitive path matching
- Windows/POSIX path normalization
- repository-escape detection
- separate `INVALID_PATH` and `UNCLASSIFIED` states
- strictest-zone-wins resolution for multi-path proposals
- CLI surface
- Node test coverage
- static machine-readable harness status

Primary implementation:

```text
src/governance/target-governance-zone.mjs
scripts/resolve-target-governance-zone.mjs
tests/target-governance-zone.test.mjs
system/harness/harness-contract.json
system/harness/status.json
```

## Fail-Closed Behavior

Examples:

```text
docs/architecture.md
  → canonical_core

src/governance/target-governance-zone.mjs
  → runtime_governance_code

tests/target-governance-zone.test.mjs
  → tests_evidence

../../outside.md
  → INVALID_PATH
  → BLOCKED

unknown/new-surface.md
  → UNCLASSIFIED
  → BLOCKED
```

For proposals touching multiple paths, the strictest governance zone wins.

Successful zone resolution means only that the target was classified. It does **not** authorize a commit or execution.

## Transferability

The harness is deliberately domain-agnostic.

The same control chain can sit in front of:

- coding agents
- repository maintenance agents
- MCP workflows
- business-process agents
- provider-specific agents
- Matrix integrations
- later service or orchestration runtimes

Domain-specific logic should be implemented as an adapter below the harness rather than becoming part of the governance core.

Matrix therefore remains a **future domain adapter**, not the identity of this repository.

## Current Boundary

Not implemented or authorized:

- provider/model invocation
- autonomous loops
- write-capable external executor
- network runtime
- background workers or daemons
- provider credentials or secret loading
- persistent memory
- Matrix protocol execution
- deployment service

Unknown capability or authority fails closed.

## Local Commands

```bash
npm test

npm run harness:resolve -- \
  docs/architecture.md \
  src/governance/target-governance-zone.mjs
```

For shared-core linkage and consumer validation, see `docs/validation.md`.

## Next Slice

The next control-plane slice is:

```text
AgentProposal
    ↓
Authority Resolution
    ↓
Approval Requirements
    ↓
ExecutionEligibility
```

Planned work:

1. machine-readable `AgentProposal` contract
2. authority-source contract
3. approval requirements by governance zone
4. deterministic authority/approval evaluator
5. negative fixtures
6. execution-eligibility decision

The executor remains outside that slice.

## Authority

Read before implementation:

1. `AGENTS.md`
2. `docs/canonical-sources.md`
3. `docs/harness.md`
4. `docs/runtime-policy.md`
5. `docs/architecture.md`
6. `docs/implementation-plan.md`
7. `docs/validation.md`

The workspace root provides routing and orientation.  
`model-agnostic-workflow-system` owns reusable shared semantics.  
`agent_routing` owns the local harness/control-plane decisions and their evidence.
