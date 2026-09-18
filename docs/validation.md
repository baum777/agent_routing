# Validation

Class: canonical.  
Use rule: records what can and cannot currently be claimed.

## Slice-1 Gates

### Local deterministic tests

```bash
npm test
```

Covers exact paths, case-insensitive matching, Windows separators, internal `..` normalization, prefix matching, strictest-zone selection, unclassified blocking, invalid path blocking, and empty-target blocking.

### CLI smoke

```bash
npm run harness:resolve -- docs/architecture.md src/governance/target-governance-zone.mjs
```

Expected resolved zone: `canonical_core`.

### Runtime-policy consumer contract

From the shared-core checkout:

```bash
node scripts/tools/validate-runtime-policy-input-contract.mjs --contract ../agent_routing/.codex/runtime-policy-inputs.json
```

### Consumer linkage

Run `scripts/validate-consumer-linkage.ps1` or the shared-core consumer-linkage validator.

## Existing Lock Drift

Observed during the 2026-09-19 audit:

- manifest still carried an old Windows shared-core path;
- `.codex/shared-core-consumer.json` and the previous `docs/validation.md` recorded different fingerprints;
- the shared core evolved while remaining package version `0.2.1`.

This branch corrects source path and skill/overlay adoption but **does not invent a new package fingerprint**.

Therefore consumer-linkage PASS is NOT claimed until the lock is refreshed locally:

```bash
node scripts/tools/refresh-consumer-lock.mjs --consumer ../agent_routing
```

Then rerun consumer linkage.

## Pass Criteria

- `npm test` PASS
- runtime-policy input contract PASS
- repo-intake input contract PASS
- refreshed consumer lock PASS
- no executor/provider/network capability introduced

## Not Proven

Live agent execution, provider/model execution, Matrix behavior, deployment readiness, secret handling, persistent memory, or production kill-switch enforcement.
