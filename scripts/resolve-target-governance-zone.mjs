#!/usr/bin/env node
import { resolveTargetGovernanceZone } from '../src/governance/target-governance-zone.mjs';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log('Usage: node scripts/resolve-target-governance-zone.mjs <repo-relative-path> [more paths...]');
  process.exit(0);
}

const result = resolveTargetGovernanceZone(args);
console.log(JSON.stringify(result, null, 2));
process.exit(result.decision === 'ELIGIBLE' ? 0 : 2);
