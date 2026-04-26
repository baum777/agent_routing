# Implementation Plan

Class: canonical.
Use rule: this plan gates work; it does not claim implementation.

## Placement Decision

`C:\workspace\main_projects\agent_routing` is intentionally activated as a new local root repo.

This decision does not treat the prior empty folder as product evidence. The folder is now the target because it is the only concrete candidate path named for the new Matrix-related system and can be initialized without touching existing product repos or shared-core authority.

## Slice 0 Applied Scope

- durable repo-local authority files
- explicit shared-core consumer manifest
- repo-intake local input contract
- canonical source map
- architecture boundary map
- validation plan

## Blocked Or Planned Scope

- Runtime code: blocked until product scope and runtime policy exist.
- Deployment config: blocked until runtime target and operational owner exist.
- Secret templates: blocked until secret classes and env model are defined.
- Write-capable operations: blocked until approval and safety boundaries exist.
- Matrix protocol claims: planned only after implementation evidence exists.

## Next Gates

Precondition for Slice 1 (Agent Source Guard):

- `docs/governance/agent-source-guard-zone-mapping.md` must be used as a non-canonical working spec for deterministic `TargetGovernanceZone` resolution by changed path.
- For proposals with multiple changed paths, the strictest mapped zone must win.
- If any changed path is unclassifiable, the proposal remains blocked until an explicit pre-decision record exists.
- This precondition does not create a new SOT layer and does not override canonical sources.

1. Define product scope and non-goals.
2. Decide read-only, write-capable, or hybrid posture.
3. Add runtime-policy docs before adopting `.codex/runtime-policy-inputs.json`.
4. Choose implementation stack only after architecture boundaries are file-backed.
5. Add runtime code in a separate slice with tests and validation evidence.

## Shared-Core Backmirror Candidates

- Consumer-overlay examples for new root repos may become a reusable template after at least one more consumer proves the pattern.

Status: candidate only. No shared-core implementation is included in this repo initialization.
