# Matrix Server

## Purpose

`matrix-server` is initialized as a local root repo under `C:\workspace\main_projects` for a future Matrix-related system.

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
- Shared reusable workflow truth stays in `C:\workspace\main_projects\codex-workflow-core`.
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
