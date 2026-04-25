# Shared-Core Consumer Overlay

Class: operational.
Use rule: read this with `.codex/shared-core-consumer.json`.

## Shared-Core Source

- Source: `C:\workspace\main_projects\codex-workflow-core`
- Mode: standalone local repo
- Version at adoption: `0.2.1`
- Package fingerprint lock: recorded in `.codex/shared-core-consumer.json`

## Adopted Now

- `repo-intake-sot-mapper`
- `planning-slice-builder`
- `implementation-contract-extractor`
- `test-matrix-builder`
- `failure-mode-enumerator`

## Deferred

- `runtime-policy-auditor`: blocked until runtime policy docs and control surfaces exist.
- live runtime readiness review: blocked until implementation exists.
- journal-to-learning extraction: planned only if project journals are introduced.

## Known Portfolio Condition

Existing shared-core consumer fingerprint drift elsewhere in the portfolio is known. This repo does not silently inherit stale fingerprints; its manifest carries the checked shared-core package fingerprint and consumer-linkage validation enforces it.

## Rule

Do not edit shared-core from this repo. Document reusable candidates in `docs/implementation-plan.md` and mirror them separately only after explicit review.
