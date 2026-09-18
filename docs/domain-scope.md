# Domain And Scope Lock

Class: canonical.  
Use rule: defines the current product and execution boundary.

## Product Class

Current product class:

`AI operating-system harness routing/control-plane consumer`

The repository coordinates governed agent work for a concrete repository/workspace while consuming reusable semantics from `model-agnostic-workflow-system`.

It is not a model provider, autonomous agent runtime, workflow-framework fork, or deployment service.

## Primary Purpose

Turn an incoming task into a bounded, inspectable decision chain:

```text
Intent
  -> Context
  -> Shared-Core Route
  -> AgentProposal
  -> Governance Zone
  -> Authority / Approval Gates
  -> Execution Eligibility
  -> Evidence
```

Only the governance-zone resolver is runtime-implemented in the current slice. Execution eligibility beyond that gate remains contract-only, and execution itself remains absent.

## Runtime Class

Current runtime class:

`local manually-invoked control-plane CLI/tooling`

Implemented runtime behavior is limited to deterministic local classification and validation. No provider/model/tool executor exists.

## Domain Adapters

Domain-specific behavior belongs below the harness boundary.

Current adapter status:

- Matrix: `planned`
- repository/file governance: `active control-plane domain`
- provider adapters: `not implemented`
- MCP/tool adapters: `not implemented`

Matrix therefore remains a future integration domain, not the architectural identity of this repository.

## In Scope

- repo-local context and authority boundaries
- AgentProposal governance semantics
- deterministic path normalization/classification
- TargetGovernanceZone resolution
- approval and execution-eligibility contracts
- shared-core consumer overlays
- local runtime-policy declaration
- tests, evidence, status, handoff

## Out Of Scope

- autonomous agent loop
- model/provider calls
- secret loading
- persistent runtime memory
- remote network execution
- deployment topology
- write-capable external tools
- Matrix protocol traffic
- homeserver/client/federation implementation

## Next Scope Gate

The next runtime-bearing slice may implement an `ExecutionEligibility` evaluator only after:

1. authority inputs are explicit;
2. approval semantics are explicit;
3. proposal schema is file-backed;
4. local tests cover deny/unknown paths;
5. the shared-core consumer lock is refreshed and validated.
