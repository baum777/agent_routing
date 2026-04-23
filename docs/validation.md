# Validation

Class: canonical.
Use rule: this records validation posture and commands without overstating readiness.

## Current Evidence

- `codex-workflow-core` package version used: `0.2.1`
- `codex-workflow-core` package fingerprint used: `1c65348be21702e8947019bdc5da1d2f8949421865bf87974ad5643b0f75d8e8`
- Shared-core `npm run validate`: previously observed PASS.
- Shared-core `npm run validate-neutral`: previously observed PASS.
- Shared-core `npm run eval`: not PASS-evidenced for this slice; do not claim certification readiness from it.

## Local Validation Commands

Run from `C:\workspace\main_projects\codex-workflow-core`:

```powershell
C:\nvm4w\nodejs\node.exe scripts\tools\validate-consumer-linkage.mjs --consumer C:\workspace\main_projects\matrix-server
C:\nvm4w\nodejs\node.exe scripts\tools\validate-local-input-contract.mjs --contract C:\workspace\main_projects\matrix-server\.codex\repo-intake-inputs.json
```

Run from `C:\workspace\main_projects\matrix-server`:

```powershell
git diff --check
git status --short --untracked-files=all
```

## Blocked Checks

- Runtime tests: missing because no runtime exists.
- Deployment checks: missing because no deployment surface exists.
- Secret-boundary runtime checks: planned, blocked until secret model exists.
- Runtime-policy input validation: blocked until runtime policy surfaces exist.

## Pass Criteria For This Slice

- shared-core consumer linkage validates
- repo-intake local input contract validates
- no runtime readiness claims appear in local docs
- working tree contains only intended initialization surfaces

