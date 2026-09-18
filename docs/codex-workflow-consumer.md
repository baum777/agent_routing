# Shared-Core Consumer Overlay

Class: operational.  
Use rule: read this with `.codex/shared-core-consumer.json`.

## Shared-Core Source

- Source: `agentic_workflow/model-agnostic-workflow-system`
- Mode: standalone local repo
- Version at adoption: `0.2.1`
- Package fingerprint lock: recorded in `.codex/shared-core-consumer.json`

## Adopted Now

- `repo-intake-sot-mapper`
- `planning-slice-builder`
- `implementation-contract-extractor`
- `test-matrix-builder`
- `failure-mode-enumerator`
- `runtime-policy-auditor`

The runtime-policy skill is consumed through the local contract:

`.codex/runtime-policy-inputs.json`

The shared core provides reusable semantics and validators. It does not become the source of repo-local authority, target-zone rules, approval decisions, or execution permissions.

## Deferred

- `paper-to-live-readiness-reviewer`: no live executor or deployment exists.
- `journal-to-learning-extractor`: deferred until a deliberate memory/learning boundary exists.

## Harness Consumption Rule

The local harness may consume:

- shared workflow classes
- portable skills
- output contracts
- validators/evals
- shared-with-local-inputs skills

The local harness may not use shared-core routing as permission expansion. Local blocks and local canonical authority remain effective.

## Consumer Lock State

The 2026-09-19 audit found prior lock drift:

- the consumer manifest still used the previous Windows workspace path;
- the prior manifest and validation doc contained different package fingerprints.

The source path is corrected in the harness feature branch. The package fingerprint must be refreshed locally from the current shared-core checkout before consumer-linkage PASS is claimed.

## Rule

Do not edit shared-core from this repo. Portable candidates are documented here first and proposed back to the shared core only after explicit review and evidence of reuse.
