# Domain And Scope Lock

Class: canonical.
Use rule: this file locks Phase-1 product/domain boundaries before runtime, interface, deployment, or secret surfaces are introduced.

## Phase-1 Status

- Spec status: contract-only.
- Runtime status: missing.
- Deployment status: missing.
- Matrix protocol implementation status: missing.
- Write capability status: blocked.
- Shared-core consumption status: contract-backed.

## System Purpose

`matrix-server` is a local root repo for defining a future Matrix-related system in a governance-first, fail-closed way.

Phase 1 purpose is to lock product/domain scope and capability boundaries before runtime implementation.

## Product Class

Current product class: `Matrix protocol experimentation repo`.

Allowed Phase-1 product-class candidates:

- Matrix operations/control-plane service
- Matrix integration gateway
- Matrix observability or administration support surface
- Matrix protocol experimentation repo

Selected Phase-1 product class: `Matrix protocol experimentation repo`.

Selection rule: this is the narrowest candidate that keeps runtime, deployment, protocol implementation, and write-capability behavior uncommitted while still classifying the repo more specifically than a generic future system.

Do not treat this classification as evidence of protocol implementation, homeserver behavior, client API behavior, federation support, or runtime readiness.

## Runtime Class

Current runtime class: `missing`.

Allowed future runtime-class candidates:

- read-only service
- write-capable service
- local CLI/tooling surface
- API server
- worker or scheduled job
- documentation/spec-only package

No runtime class is selected yet.

## Posture Decision

Current posture: `blocked`.

No read-only, write-capable, or hybrid posture is selected yet.

Rules:

- Read-only posture may be selected only after source systems and allowed read surfaces are documented.
- Write-capable posture may be selected only after approval boundaries, rollback expectations, identity model, and safety gates are documented.
- Hybrid posture may be selected only after read and write capabilities are separated by explicit interface contracts.

## Non-Goals

This repo does not currently provide:

- Matrix homeserver implementation
- Matrix federation implementation
- Matrix client API implementation
- identity provider
- production deployment
- secret management implementation
- persistence layer
- write-capable automation
- runtime orchestration

## External Dependencies

Current status: `planned`.

Known external dependency categories:

- Matrix server or Matrix API surface: planned
- identity/auth provider: planned
- persistence store: planned
- deployment/runtime platform: planned
- shared-core workflow assets: contract-backed through `.codex/shared-core-consumer.json`

No live external dependency is configured.

## Secrets, Identity, Persistence

- Secrets: planned; no secret classes selected.
- Identity: planned; no auth model selected.
- Persistence: planned; no storage model selected.

Do not add `.env`, secret templates, runtime policy inputs, or deployment files until these sections are decided.

## Next Authority Gate

Before runtime work, add one of:

1. `docs/runtime-policy.md` if runtime class, posture, identity, secrets, and control surfaces are selected.
2. `docs/interface-contracts.md` if capability boundaries and actors are selected but runtime remains deferred.
3. no new file if product class remains unresolved.

## Validation Impact

After this file is added:

- update `docs/canonical-sources.md`
- update `.codex/repo-intake-inputs.json`
- rerun shared-core consumer linkage validation
- rerun repo-intake input contract validation
- do not claim `npm run eval` PASS unless it is actually rerun and recorded
