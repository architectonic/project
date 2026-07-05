---
type: Template
title: Implementation Plan Template
description: Runtime-neutral template for translating a feature specification into technical decisions, research, contracts, and validation.
tags: [project, template, implementation-plan, architecture, verification, okf]
okf_version: "0.1"
status: draft
---

# Implementation Plan: [FEATURE NAME]

**Workstream**: `[identifier]`

**Date**: [date]

**Spec**: [link or path]

**Input**: Feature specification from [path]

## Summary

[Primary requirement plus the selected technical approach.]

## Technical Context

**Language / Runtime**: [value or NEEDS CLARIFICATION]

**Primary Dependencies**: [value or NEEDS CLARIFICATION]

**Storage / State**: [value or N/A]

**Testing**: [value or NEEDS CLARIFICATION]

**Target Platform**: [value or NEEDS CLARIFICATION]

**Project Type**: [library, cli, web app, service, desktop app, mobile app, docs-only, other]

**Performance Goals**: [domain-specific target or N/A]

**Constraints**: [latency, memory, cost, security, deployment, compatibility, or N/A]

**Scale / Scope**: [users, repos, files, screens, APIs, tenants, agents, or N/A]

## Constitution And Project Gates

Record the project-specific gates that must hold before implementation.

- [ ] Source artifacts reviewed.
- [ ] Specification has no hidden unresolved questions.
- [ ] Technical choices trace to requirements.
- [ ] Simpler alternatives considered before adding complexity.
- [ ] Interfaces or contracts identified before implementation.
- [ ] Verification path is defined.

## Research Questions

Research only targeted uncertainties that affect the plan.

| Question | Why It Matters | Source / Method | Answer | Plan Impact |
| --- | --- | --- | --- | --- |
| [question] | [reason] | [source] | [answer] | [impact] |

## Project Structure

Document the real structure selected for this feature. Remove unused options.

```text
[path]/
  [file or directory]
```

**Structure Decision**: [Why this structure is the simplest coherent fit.]

## Contracts And Interfaces

List the contracts that should exist before implementation when behavior crosses a boundary.

```text
contracts/
  [api, event, cli, schema, or integration contract]
```

## Data Model

List durable entities, relationships, state transitions, and validation rules.

```text
[Entity]
  fields:
  relationships:
  validations:
  state transitions:
```

## Quickstart Validation

Define the shortest path proving the feature works.

```text
1. [setup]
2. [action]
3. [expected observation]
```

## Complexity Tracking

Fill only when the plan adds meaningful complexity.

| Complexity | Why Needed | Simpler Alternative Rejected Because | Revisit Condition |
| --- | --- | --- | --- |
| [item] | [reason] | [reason] | [condition] |

## Plan Readiness Checklist

- [ ] Technical context is concrete enough to task.
- [ ] Research questions are targeted, not generic.
- [ ] Structure decision names real paths.
- [ ] Contracts or interfaces are identified.
- [ ] Data model exists when durable state exists.
- [ ] Quickstart proves the main user story.
- [ ] Complexity is justified or removed.