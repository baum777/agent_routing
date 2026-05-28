# Agent Routing Operating Contract

Class: canonical.
Use rule: this file is the repo-local operating contract for `agent_routing`.

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
- `C:\workspace\main_projects\model-agnostic-workflow-system` owns reusable shared-core contracts, skills, templates, provider exports, and validators.
- Shared-core assets are consumed through `.codex/shared-core-consumer.json` and local input contracts only.

## Required Read Order

Before implementation:

1. `AGENTS.md`
2. `README.md`
3. `docs/canonical-sources.md`
4. `.codex/shared-core-consumer.json`
5. `.codex/repo-intake-inputs.json`
6. `docs/domain-scope.md`
7. `docs/interface-contracts.md`
8. `docs/architecture.md`
9. `docs/implementation-plan.md`
10. `docs/validation.md`

## Working Rules

- Governance-first, fail-closed, consumer-overlay-first.
- Prefer shared-core reuse through explicit consumer contracts.
- Keep generic reusable candidates documented as candidates; do not edit shared-core from this repo.
- Do not create runtime code before authority, validation, secret, write, and deployment boundaries are explicit.
- Treat generated artifacts, logs, exports, and temporary output as non-authoritative.
- Mark unavailable capability as `missing`, `planned`, `contract-only`, or `blocked`.

<!-- workspace-root-sync:agents:start -->
## Workspace Root Integration

Class: repo-local agent frontdoor extension.
Use rule: read after this repository's own opening instructions. The workspace root `README.md` and `AGENTS.md` route entry, authority checks, reusable-surface checks, evidence, and stop rules; this repository's local files remain the canonical source for repo-specific product, runtime, archive, contract, and implementation truth.

### Authority And Scope

- Repo-local `AGENTS.md`, `README.md`, `docs/`, manifests, contracts, validators, tests, and workflow files govern this repository.
- Workspace-root files provide routing and constraints only; they do not replace repo-local architecture, implementation, product, runtime, or archive truth.
- Portfolio surfaces may classify, coordinate, or record cross-repo work, but they do not override this repository unless this repository explicitly adopts them.
- Shared-core assets under `model-agnostic-workflow-system/` are the reusable authority for portable skills, contracts, templates, validators, provider exports, and workflow routing patterns.
- For non-trivial, cross-repo, governance-related, reusable, prompt/system-prompt, validator, template, skill, or workflow/path-routing work, check existing repo-local and shared-core assets before creating a new surface.

### Entry Sequence

1. When entering from `/home/baum/Schreibtisch/workspace/main_projects`, read the root `README.md` and root `AGENTS.md` first.
2. Read this repository's frontdoors next: `AGENTS.md`, `README.md`, relevant `docs/`, manifests, contracts, validators, tests, and local workflow files.
3. Identify owner, scope, canonical file, expected write targets, dirty/user-made changes, validation path, and next gate before editing.
4. Prefer existing repo-local or shared-core scripts, templates, validators, contracts, and docs over new files.
5. Apply the smallest safe change.
6. Verify by reading changed state and running the relevant local checks.
7. Report results with exact paths, evidence, unresolved gaps, and next gate.

### TTD-first / TDD-inside

For meaningful work, state a compact TTD frame before writing:

- Decision: what must become unambiguously true after the slice.
- Owner / Scope: which repo, surface, file family, or authority plane owns the change.
- Contract: which file, API behavior, UI state, schema, policy, or doc proves the decision.
- Gate / Test: the smallest check that would fail if the decision is false.
- Implementation Slice: the smallest safe change needed to make the gate pass.
- Evidence: the command, output, file, or log that proves the result.
- Next Gate: what remains deliberately not claimed or deferred.

Use TDD inside implementation-bearing slices. TDD tests code behavior; TTD tests whether the development claim is valid. A task is done only when the claimed decision state is locally verifiable with evidence, or when the result is explicitly reported as `partial` or `BLOCKED`.

### Evidence Language

Use exact paths and label claims as:

- `Observed`: directly read from files, commands, repo state, or tool output.
- `Inferred`: reasoned from observed evidence.
- `Recommended`: proposed next action.
- `Applied`: a real write occurred and the path is named.
- `Verified`: applied change was read back or checked with named evidence.
- `BLOCKED`: authority, source, scope, validation, permission, or preservation of existing work is insufficient.

Do not present imported, summarized, compressed, assumed, or loose-doc context as canonical repo truth unless the owning surface has reviewed and promoted it.

### Stop Conditions

Stop and report `BLOCKED` when:

- owner, scope, authority, source, or validation is unclear;
- root, portfolio, shared-core, and repo-local guidance conflict;
- a loose doc, chat summary, archive, or imported source would drive implementation without owning-surface approval;
- required checks or evidence cannot prove the claim;
- an edit would overwrite user or agent work that was not created by the current task.
<!-- workspace-root-sync:agents:end -->
