# Architecture

Class: canonical.
Use rule: this is an initial architecture boundary map, not a runtime design claim.

## Current Architecture Status

- Local repository shell: applied.
- Governance and consumer overlay: contract-backed.
- Product architecture: planned.
- Runtime architecture: missing.
- Deployment architecture: missing.
- Secret model: planned.

## Boundary Model

```text
portfolio/
  owns portfolio placement and inventory only

codex-workflow-core/
  owns reusable contracts, skills, templates, exports, validators

matrix-server/
  owns local product/runtime truth when implemented
  consumes shared core through explicit .codex contracts
```

## Current Local Surfaces

- `AGENTS.md`: local operating contract.
- `.codex/shared-core-consumer.json`: shared-core consumer manifest.
- `.codex/repo-intake-inputs.json`: local input contract for repo intake.
- `docs/`: canonical planning and validation documents.

## Non-Goals For This Slice

- no Matrix runtime code
- no server package scaffold
- no database or persistence claim
- no deployment target
- no secret handling implementation
- no federation, identity, bridge, or client API claim

## Planned Architecture Questions

- product scope and Matrix capability boundaries
- read-only versus write-capable posture
- identity and authentication model
- storage model
- deployment target and operational ownership
- shared-core candidates worth mirroring back generically
