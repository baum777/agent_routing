# Agent Routing

## Purpose

`agent_routing` is initialized as a local root repo under `C:\workspace\main_projects` for a future Matrix-related system.

This first slice is not runtime implementation. It creates durable local authority surfaces and an explicit consumer overlay to the shared core.

## Current Status

- Repo initialization: applied.
- Shared-core consumer overlay: contract-backed.
- Product specification: planned.
- Runtime implementation: missing.
- Deployment implementation: missing.
- Secret model: planned.
- Write/API/orchestration behavior: planned.

## Authority Boundary

- Repo-local truth starts in `AGENTS.md` and `docs/`.
- Portfolio truth stays in `C:\workspace\main_projects\portfolio`.
- Shared reusable workflow truth stays in `C:\workspace\main_projects\model-agnostic-workflow-system`.
- This repo must not copy shared-core rules into local authority when a consumer contract reference is enough.

## First Safe Slice

Included now:

- repo-local operating contract
- canonical source map
- architecture boundary map
- implementation plan
- validation plan
- shared-core consumer manifest
- repo-intake local input contract

Not included now:

- runtime code
- package manager setup
- Matrix protocol implementation
- deployment configuration
- environment or secret templates
- write-capable tools or services

## Validation

See `docs/validation.md`.

<!-- workspace-root-sync:readme:start -->
## Workspace Integration

This repository lives under `/home/baum/Schreibtisch/workspace/main_projects`. Its local `README.md`, `AGENTS.md`, `docs/`, manifests, contracts, validators, tests, and workflow files remain the authority for repo-specific product, runtime, archive, and implementation truth.

The workspace root is a routing and orientation layer. It points agents and humans to the correct authority surface; it must not be treated as a replacement for this repository's local truth.

### Workspace Work Path

```text
frontdoor -> authority check -> scope check -> reusable-surface check -> smallest safe work -> verification -> evidence / next gate
```

When work enters from the workspace root:

1. Read root `README.md` and root `AGENTS.md`.
2. Read this repository's `README.md`, `AGENTS.md`, and relevant local docs or contracts.
3. Identify the owning authority, scope, next gate, expected write targets, and validation path.
4. Check whether existing repo-local or shared-core assets already cover the task.
5. Make the smallest safe change and verify it locally.
6. Close with evidence, unresolved gaps, and the next re-entry pointer.

### Cross-Repo And Reusable Work

- Use portfolio surfaces for workspace inventory, cross-repo coordination, intake, disposition, daily notes, commit evidence, and re-entry tracking.
- Use `model-agnostic-workflow-system/` for reusable skills, contracts, templates, validators, provider exports, and workflow routing patterns.
- Do not duplicate root, portfolio, shared-core, or chat-room governance here unless this repository deliberately adopts a local copy.
- If this repository is `model-agnostic-workflow-system`, its own `AGENTS.md` and `WORKFLOW.md` are the local shared-core authority before reusable behavior is exported elsewhere.

### Evidence And Closure

Close meaningful work with:

- `Observed` facts from exact paths or commands;
- `Inferred` conclusions clearly labelled;
- `Applied` changes with exact paths;
- `Verified` checks or read-backs;
- `BLOCKED` items where authority, source, scope, validation, or permissions are insufficient;
- the next gate or re-entry pointer.

Do not treat summaries, imports, chat notes, MSPR packets, loose docs, archives, or derived knowledge as canonical truth until the owning surface has reviewed and promoted them.
<!-- workspace-root-sync:readme:end -->
