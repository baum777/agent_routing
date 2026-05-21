# Validation

Class: canonical.
Use rule: this records validation posture and commands without overstating readiness.

## Current Evidence

- `model-agnostic-workflow-system` package version used: `0.2.1`
- `model-agnostic-workflow-system` package fingerprint used: `ac3d0d98be6d72c321e63649341481b2d4d0345dbcd00c02b490346328a04d99`
- Shared-core `npm run validate`: previously observed PASS.
- Shared-core `npm run validate-neutral`: previously observed PASS.
- Shared-core `npm run eval`: not PASS-evidenced for this slice; do not claim certification readiness from it.

## Local Validation Commands

Run from `C:\workspace\main_projects\agent_routing`:

```powershell
.\scripts\validate-consumer-linkage.ps1
C:\nvm4w\nodejs\node.exe C:\workspace\main_projects\model-agnostic-workflow-system\scripts\tools\validate-local-input-contract.mjs --contract C:\workspace\main_projects\agent_routing\.codex\repo-intake-inputs.json
```

Additional local checks:

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
