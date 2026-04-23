# Interface Contracts

Class: canonical.
Use rule: this file defines only the currently justified interface surface for `matrix-server`.

## Current Contract Scope

This document covers only the `artifact/spec ingestion boundary`.

It does not define service APIs, runtime interfaces, protocol transports, network endpoints, execution flows, or deployment behavior.

## Boundary Name

`artifact/spec ingestion boundary`

## Boundary Purpose

This boundary governs which pre-runtime materials may enter the repository's experimentation surface as inputs for classification, comparison, and later authority work.

The boundary is documentation-first and contract-only.

## Materials Allowed To Cross The Boundary

Allowed input classes:

- protocol-adjacent specifications
- design notes
- comparison notes
- structured or semi-structured research artifacts
- documentation excerpts or summaries
- candidate schemas or shape descriptions that are explicitly non-executable

Allowed authority posture for these materials:

- reference input
- comparison input
- research input
- contract-drafting input

## Intake Expectations

Materials crossing this boundary must be treated as:

- non-runtime
- non-deployment
- non-authoritative until classified by local canonical docs
- insufficient evidence for implementation claims by themselves

When preserved in the repo, they should support later authority work such as:

- narrowing product scope
- refining capability boundaries
- deciding whether future interface contracts are justified

## Explicit Exclusions

This boundary does not cover:

- live Matrix traffic
- protocol request or response handling
- homeserver or client runtime behavior
- transport bindings
- service endpoints
- auth flows
- write operations
- deployment descriptors
- production integration commitments

## Non-Implications

This contract does not imply:

- a stable external API
- an internal service boundary
- a runtime class selection
- read-capable execution behavior
- write-capable execution behavior
- protocol conformance
- deployment readiness

## Current Status

- Boundary status: established.
- Runtime relation: runtime remains `missing`.
- Posture relation: read/write/hybrid posture remains `blocked`.
- Runtime-policy relation: `docs/runtime-policy.md` remains unjustified.
- Runtime input contract relation: `.codex/runtime-policy-inputs.json` remains unjustified.

## Next Gate

Use this boundary only as the authority basis for future interface-contract refinement if later domain work identifies a narrower and stable sub-boundary.

Do not use this file to justify runtime implementation or protocol execution behavior.
