# Runtime Policy

Class: canonical.  
Use rule: local runtime policy for the harness control-plane slice.

## Runtime Posture

Default posture: `blocked-by-default`.

Implemented mode: `local-governance-evaluation`.

Implemented effects:

- parse CLI path arguments
- normalize repository-relative paths
- classify paths
- select strictest TargetGovernanceZone
- emit JSON decision evidence
- run deterministic tests

Not implemented:

- agent/model invocation
- external tool execution
- file mutation by the resolver
- network access
- daemon/background runtime
- scheduler
- secret loading
- persistent memory
- domain protocol execution

## Modes

### blocked
No runtime behavior should be relied on beyond static file inspection.

### local-governance-evaluation
Allows only the deterministic local resolver and local validators/tests.

There is currently no `execute` mode.

## Kill / Stop Boundary

`system/harness/harness-contract.json` declares:

- `executionEnabled: false`
- `networkEnabled: false`
- `autonomousLoopEnabled: false`

These fields describe current posture. Because no executor exists, they are not presented as a production kill-switch implementation.

Any future executor must separately enforce these values or replace them with an enforcing policy surface before execution can be claimed.

## Approval Boundary

- proposal generation may be automated later;
- authority resolution must remain explicit;
- required approval must be present before execution eligibility;
- approval does not grant undeclared capability;
- approval does not cause an effect.

## Fail-Closed Rules

Block when:

- path set is empty;
- path is absolute or escapes repository root;
- path cannot be classified;
- authority is missing/ambiguous;
- requested capability is undeclared;
- required approval is missing, expired, or revoked;
- local and shared-core constraints conflict without a precedence decision.

## Secrets And Environment

No environment file is required for Slice 1. Do not add provider keys, Matrix credentials, tokens, or secret templates until a dedicated secret/identity boundary is canonical and tested.

## Health / Status

Static current status is exposed in `system/harness/status.json`. This is a declaration surface, not a live service health endpoint.
