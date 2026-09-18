# Harness Operating Model

Class: canonical.  
Use rule: canonical local harness/AI-OS model. It does not authorize external execution.

## Definition

The harness is the control system around an agent/model. It determines what context enters, which reusable workflow semantics apply, what the agent may propose, which authority checks apply, and what evidence must exist before a later execution surface could act.

The model is a component inside the harness, not the harness itself.

## Control Pipeline

```text
[1] INTENT
      |
[2] CONTEXT ASSEMBLY
      |
[3] SHARED-CORE ROUTING
      |
[4] AGENT PROPOSAL
      |
[5] TARGET GOVERNANCE ZONE
      |
[6] AUTHORITY + APPROVAL
      |
[7] EXECUTION ELIGIBILITY
      |
[8] EXECUTION ADAPTER        <- absent / blocked in Slice 1
      |
[9] EVIDENCE + HANDOFF
```

## AI-OS Planes

### Context Plane
Owns repo-local source selection, scope, constraints, task context, and context minimization. No source becomes canonical merely because it entered model context.

### Routing Plane
Consumes shared-core workflow classes, portable skills, output contracts, validators, and provider-neutral routing semantics. Local routing may narrow shared behavior. It may not widen shared or local authority.

### Governance Plane
Owns source hierarchy, TargetGovernanceZone, authority boundary, approval boundary, and stop/block decisions. The implemented Slice-1 resolver lives here.

### Capability Plane
Declares available tools, providers, MCP surfaces, adapters, and their bounded intent. Current external capability set is empty.

### Execution Plane
Would convert an approved, eligible proposal into effects. Current status: `missing / blocked`. No other plane may simulate successful execution.

### Memory Plane
Would store non-canonical runtime/project memory with explicit scope, TTL, provenance, and promotion rules. Current status: `not implemented`.

### Evidence Plane
Captures tests, gate outcomes, proposal resolution, runtime status, and handoff evidence. Evidence proves only the scope of the named gate.

## Stable vs Local Surfaces

Shared/stable reusable surfaces are consumed from `model-agnostic-workflow-system`.

Local/pluggable surfaces live here:

- governance-zone mapping
- local runtime posture
- local authority/approval policy
- local context sources
- domain adapters
- local status and evidence

## Non-Negotiable Boundaries

- proposal != authority
- approval != execution
- routing != permission
- memory != canonical truth
- provider choice != capability expansion
- evidence != automatic promotion
- unknown state => block
