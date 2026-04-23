# Matrix Server Operating Contract

Class: canonical.
Use rule: this file is the repo-local operating contract for `matrix-server`.

## Current Status

- Repo status: initialized local root repo.
- Implementation status: authority-and-consumer-surfaces only.
- Runtime status: missing.
- Deployment status: missing.
- Secret handling status: planned.
- Write/API/orchestration status: planned.

Do not claim runtime readiness, deployment readiness, Matrix protocol support, identity support, federation support, write capability, or production operation until file-backed implementation and validation evidence exists.

## Authority Model

- This repo owns its local product, runtime, implementation, and validation truth once those surfaces exist.
- `C:\workspace\main_projects\portfolio` owns portfolio placement, inventory, and cross-repo governance only.
- `C:\workspace\main_projects\codex-workflow-core` owns reusable shared-core contracts, skills, templates, provider exports, and validators.
- Shared-core assets are consumed through `.codex/shared-core-consumer.json` and local input contracts only.

## Required Read Order

Before implementation:

1. `AGENTS.md`
2. `README.md`
3. `docs/canonical-sources.md`
4. `.codex/shared-core-consumer.json`
5. `.codex/repo-intake-inputs.json`
6. `docs/domain-scope.md`
7. `docs/architecture.md`
8. `docs/implementation-plan.md`
9. `docs/validation.md`

## Working Rules

- Governance-first, fail-closed, consumer-overlay-first.
- Prefer shared-core reuse through explicit consumer contracts.
- Keep generic reusable candidates documented as candidates; do not edit shared-core from this repo.
- Do not create runtime code before authority, validation, secret, write, and deployment boundaries are explicit.
- Treat generated artifacts, logs, exports, and temporary output as non-authoritative.
- Mark unavailable capability as `missing`, `planned`, `contract-only`, or `blocked`.
