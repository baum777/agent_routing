# Canonical Sources

Class: canonical.
Use rule: this file maps local authority; it does not replace portfolio or shared-core authority.

## Local Canonical Sources

- `AGENTS.md`: repo-local operating contract and implementation constraints.
- `README.md`: repo purpose, current status, and public entrypoint.
- `docs/architecture.md`: architecture boundary and claim-status map.
- `docs/implementation-plan.md`: ordered implementation gates.
- `docs/validation.md`: validation evidence and blocked checks.
- `.codex/shared-core-consumer.json`: shared-core consumer overlay manifest.
- `.codex/repo-intake-inputs.json`: local input contract for shared repo-intake skill.
- `system/map.md`: lightweight repo-local map for current surfaces.

## External Authority

- Portfolio placement and inventory: `C:\workspace\main_projects\portfolio`.
- Reusable shared contracts, skills, templates, provider exports, and validators: `C:\workspace\main_projects\codex-workflow-core`.

## Non-Authoritative Surfaces

The following are not durable truth if they appear later:

- logs
- generated output
- exports
- `dist/`
- `.next/`
- `coverage/`
- artifacts
- daily notes not condensed into canonical files

## Current Claim Status

- Runtime behavior: missing.
- Deployment behavior: missing.
- Secret handling: planned.
- Write/API behavior: planned.
- Orchestration behavior: planned.
- Shared-core consumption: contract-backed through `.codex/shared-core-consumer.json`.

