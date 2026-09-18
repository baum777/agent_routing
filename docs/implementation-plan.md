# Implementation Plan

Class: canonical.  
Use rule: ordered implementation gates; later slices are not automatically authorized.

## Target

Transform `agent_routing` from a Matrix-first docs shell into a domain-agnostic AI-OS harness control plane consuming `model-agnostic-workflow-system`.

## Slice 1 — Harness Control Plane Foundation

Status: `IMPLEMENTED_IN_FEATURE_BRANCH`

Included:

- reclassify repo around harness/AI-OS semantics
- Matrix becomes future adapter
- adopt `runtime-policy-auditor`
- define local harness and runtime policy
- implement TargetGovernanceZone resolution
- add fail-closed path handling
- add CLI and tests
- expose static status
- update consumer overlays

Excluded: executor, provider/model calls, credentials, network runtime, persistent memory, Matrix protocol runtime.

## Slice 2 — Proposal + Authority Gate

Preconditions:

- Slice-1 tests pass
- runtime-policy input contract validates
- shared-core consumer lock refreshed
- consumer linkage validates

Planned: machine-readable AgentProposal schema, authority-source declaration, approval requirement mapping, deterministic authority/approval evaluator, negative fixtures. No execution.

## Slice 3 — Context + Shared-Core Route Adapter

Planned: bounded ContextEnvelope, shared-core workflow-route consumption adapter, context minimization/provenance checks, route result attached to proposal.

Routing may narrow capability; it may not grant authority.

## Slice 4 — Execution Eligibility

Combine proposal, zone, authority, approval, capability, and validation state. Emit `READY_FOR_EXECUTOR` or `BLOCKED`. No effect execution.

## Slice 5 — First Bounded Executor

Not authorized by this plan. Requires a separate decision covering tool/capability boundary, identity/secrets, rollback, evidence, kill switch, runtime enforcement, and domain risk.

## Backmirror Rule

If a local pattern proves portable across multiple consumers, propose it back to `model-agnostic-workflow-system`; do not make this repository a second reusable-core authority.
