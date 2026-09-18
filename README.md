# Agent Routing

`agent_routing` is the repository-local **AI operating-system harness control plane** for governed agent work.

It consumes provider-neutral workflow assets from `model-agnostic-workflow-system` and adds the local decisions that cannot safely live in a shared core: repository context, governance-zone resolution, authority boundaries, approval posture, execution eligibility, and evidence closure.

## Current Status

Implemented in this slice:

- explicit shared-core consumer overlay
- AI-OS / harness architecture contract
- local runtime-policy input contract
- deterministic `TargetGovernanceZone` resolver
- fail-closed handling for invalid, empty, and unclassified path sets
- local CLI for zone resolution
- deterministic node:test coverage
- static harness status surface

Still blocked / absent:

- model invocation runtime
- autonomous loops
- write-capable executor
- provider credentials or secret loading
- remote/network execution
- persistent memory
- Matrix protocol runtime
- deployment/runtime service

## System Role

The repository is a **consumer and local control plane**, not a replacement for the shared core.

```text
intent / task
    |
    v
repo-local context
    |
    v
shared-core workflow + skill routing
    |
    v
AgentProposal
    |
    v
TargetGovernanceZone resolution
    |
    v
authority / approval / policy gates
    |
    v
execution eligibility
    |
    +---- execution adapter: BLOCKED / not implemented
    |
    v
evidence + handoff
```

## AI-OS Planes

- **Context plane**: local task, repo, source, and constraint context.
- **Routing plane**: workflow/skill routing consumed from the shared core.
- **Governance plane**: local source hierarchy, target zone, authority, and approval checks.
- **Capability plane**: declared tool/provider/adapter capabilities; unknown capability fails closed.
- **Execution plane**: deliberately absent in Slice 1.
- **Memory plane**: no local persistence in Slice 1; no automatic canonical promotion.
- **Evidence plane**: tests, validation receipts, status, and handoff evidence.

Matrix is retained only as a **future domain adapter candidate**. It no longer defines the repository's primary architecture.

## Shared-Core Relationship

Reusable semantics stay in:

`agentic_workflow/model-agnostic-workflow-system`

Local authority stays here.

The consumer boundary is declared by:

- `.codex/shared-core-consumer.json`
- `.codex/repo-intake-inputs.json`
- `.codex/runtime-policy-inputs.json`

Read `AGENTS.md` and `docs/canonical-sources.md` before implementation.

## Local Commands

```bash
npm test
npm run harness:resolve -- docs/architecture.md src/governance/target-governance-zone.mjs
```

Consumer validation additionally depends on the local shared-core checkout and its lock fingerprint. See `docs/validation.md`.

## Workspace Integration

This repository lives under `/home/baum/workspace/baum-os/agentic_workflow/agent_routing`.

The workspace root routes entry. Portfolio surfaces coordinate cross-repo work. The shared core owns reusable workflow semantics. This repository remains authoritative for its local harness overlay, local product/control-plane decisions, and local implementation evidence.
