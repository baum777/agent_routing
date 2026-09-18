# Interface Contracts

Class: canonical.  
Use rule: defines the local harness boundaries justified by the current implementation.

## Contract Chain

### Intent Intake
Input: task intent, repository/workspace target, explicit constraints. Output: bounded task description. No execution occurs.

### Context Envelope
Logical fields: sources, scope, constraints, provenance, excluded sources. The current slice defines the boundary but does not implement an automatic context assembler.

### Shared-Core Route
Consumed from `model-agnostic-workflow-system`. It may select reusable workflow/skill/output/validation semantics. It must not create local authority, widen tool permissions, bypass a local block, or promote memory/evidence to canonical truth.

### AgentProposal
A future proposal envelope must at minimum identify proposal id, intent, affected paths, requested capability, evidence inputs, and requested action class. A proposal is an input to governance. It is never authority by itself.

### TargetGovernanceZone Resolution
Implemented by:

- `src/governance/target-governance-zone.mjs`
- `scripts/resolve-target-governance-zone.mjs`

Input: one or more repository-root-relative paths.

Output:

- per-path normalization evidence
- per-path classification
- resolved strictest zone or null
- `ELIGIBLE` or `BLOCKED`
- deterministic reason

`ELIGIBLE` means only that zone resolution succeeded. It does not authorize commit or execution.

### Authority / Approval Boundary
Current status: contract-only.

Required semantics:

- unknown authority => block
- missing approval where required => block
- expired/revoked approval => block
- approval may narrow but not expand canonical policy
- approval does not itself execute an effect

### Execution Eligibility
Current status: not implemented. A future evaluator may return only a decision for a later executor. It must not perform the effect.

### Evidence / Handoff
Outputs should record observed inputs, resolution/gate results, validation evidence, blocked reasons, and next gate.

## Explicit Exclusions

No interface here authorizes provider/model calls, remote writes, network services, Matrix traffic, secrets, or deployment activation.
