# Architecture

Class: canonical.  
Use rule: canonical architecture for the local AI-OS harness control plane.

## Architecture Status

- Shared-core consumer boundary: contract-backed.
- Harness model: canonical.
- Governance-zone resolver: runtime-implemented.
- Runtime policy: canonical / consumer-contract-backed.
- Authority evaluator: planned.
- Execution eligibility evaluator: planned.
- External executor: absent / blocked.
- Provider/model runtime: absent / blocked.
- Matrix adapter: planned.

## Boundary Model

```text
workspace / operator
        |
        v
+----------------------- agent_routing -----------------------+
| Context Plane                                               |
|   repo-local scope / sources / constraints                   |
|            |                                                 |
|            v                                                 |
| Routing Plane                                                |
|   consumes model-agnostic-workflow-system                    |
|            |                                                 |
|            v                                                 |
| AgentProposal                                                |
|            |                                                 |
|            v                                                 |
| Governance Plane                                             |
|   TargetGovernanceZone -> authority -> approval              |
|            |                                                 |
|            v                                                 |
| Execution Eligibility                                        |
|            |                                                 |
|            X  executor absent / fail closed                  |
|                                                              |
| Evidence Plane: tests / status / handoff                     |
+--------------------------------------------------------------+
        |
        +--> future domain adapters (Matrix, MCP, provider ...)
```

## Shared Core vs Consumer

Shared Core owns portable skill semantics, workflow classes/routing contracts, provider-neutral capability contracts, output contracts, validators/evals, and shared-with-local-inputs skills.

`agent_routing` owns repo-local authority, local context rules, target-zone semantics, local approval posture, local runtime posture, local adapters, and local evidence.

## Machine-Readable Local Surfaces

- `.codex/shared-core-consumer.json`
- `.codex/repo-intake-inputs.json`
- `.codex/runtime-policy-inputs.json`
- `system/harness/harness-contract.json`
- `system/harness/status.json`

The files under `system/harness/` are operational projections. They may not silently expand canonical prose. Conflict with canonical docs fails closed.

## Transferability

The architecture is domain-agnostic:

`intent -> context -> route -> proposal -> governance -> eligibility -> executor -> evidence`.

This can serve repository coding agents, MCP workflows, business-process agents, Matrix integrations, or later service agents without making those domains part of the core governance model.
