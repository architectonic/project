---
type: Doctrine
title: Spec-Driven Development
description: Distills GitHub Spec Kit into a runtime-neutral project procedure for executable specifications, plans, tasks, and verification.
tags: [project, spec-driven-development, specifications, planning, tasks, verification, okf]
timestamp: 2026-07-05T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: GitHub Spec Kit README, spec-driven.md, and core templates
risk_level: low
---

# Spec-Driven Development

Spec-driven development treats the specification as the primary expression of intent. Code is an implementation artifact that should trace back to specification, plan, tasks, contracts, and verification evidence.

For `project`, this is a project-operating procedure, not a required dependency on GitHub Spec Kit, its CLI, or its file names.

## Core Inversion

```text
old default: prompt or ticket -> code -> partial documentation
spec-driven: intent -> specification -> plan -> tasks -> implementation -> verification -> reconciliation
```

The important shift is that durable project work should be expressed first as stable intent and acceptance criteria, then translated into technical decisions and executable tasks.

## Canonical Loop

Use this loop for feature work, refactors, installer changes, runtime changes, and other durable project work:

```text
1. Intent
2. Clarification
3. Specification
4. Plan
5. Research
6. Contracts and data model
7. Tasks
8. Implementation
9. Verification
10. Reconciliation
11. Handoff
```

This extends the base project loop:

```text
Read -> Classify -> Inspect -> Plan -> Act -> Verify -> Reconcile -> Handoff
```

## Artifact Roles

A project instance may use any file names, but the roles should remain separate:

```text
constitution or principles   # non-negotiable project rules and quality gates
specification                # what users need, why it matters, acceptance scenarios, success criteria
clarifications               # questions and resolved answers for underspecified areas
plan                         # technical approach, stack, constraints, structure, and rationale
research                     # targeted answers to concrete planning questions
contracts                    # APIs, events, schemas, CLI interfaces, or integration surfaces
data model                   # domain entities, relationships, state, and validation rules
quickstart                   # shortest validation path through the feature
tasks                        # ordered, file-specific, dependency-aware implementation work
verification evidence        # tests, builds, manual checks, runtime proof, review notes
handoff                      # continuity package for the next actor
```

Do not collapse these roles into a single transcript. Separation is what lets later agents audit intent, technical translation, and execution independently.

## Specification Rules

A specification should describe the what and why before the how.

Required qualities:

```text
user stories are prioritized
user stories are independently testable
acceptance scenarios use concrete given/when/then behavior
requirements are testable and unambiguous
success criteria are measurable
edge cases are explicit
assumptions are labeled
uncertainty is marked instead of guessed
```

Use an explicit uncertainty marker when a requirement is underspecified:

```text
[NEEDS CLARIFICATION: specific missing decision or missing evidence]
```

Do not quietly choose authentication models, retention periods, permissions, deployment targets, data ownership rules, or security boundaries unless the source artifacts or human authority support the choice.

## Planning Rules

A plan translates stable intent into a technical route.

A useful plan records:

```text
primary requirement
technical approach
language and runtime
major dependencies
storage and state model
testing strategy
target platform
performance goals
constraints
scale and scope
source-code structure
constitutional or project-principle gates
complexity exceptions
```

The plan may include implementation details, but it should not become an unreadable code dump. Move contracts, schemas, data models, validation scenarios, and deep research into their own artifacts when they become independently useful.

## Research Rules

Research should answer targeted implementation questions, not perform broad ambient browsing.

Good research question:

```text
Which currently supported version of this framework should this feature target, and what API differences affect the plan?
```

Weak research question:

```text
Research this framework in general.
```

Every research note should state:

```text
question
answer
source or evidence
impact on plan
remaining uncertainty
```

## Task Rules

Tasks should be executable without rediscovery.

A useful task has:

```text
stable task id
parallel marker when safe
user-story or phase mapping
exact file path
specific action
clear dependency or checkpoint
```

Example shape:

```text
- [ ] T012 [P] [US1] Add contract test for POST /sessions in tests/contract/sessions.test.ts
```

Tasks that touch the same file, depend on the same migration, or mutate the same public contract are not parallel even if they look independent.

## Gate Rules

Use gates before implementation, after design, and before handoff.

Minimum gates:

```text
spec has no unresolved clarification markers unless explicitly accepted
spec separates what/why from how
plan traces technical choices to requirements
complexity has a documented reason and rejected simpler alternative
contracts or interfaces exist before implementation when behavior crosses a boundary
tests or validation steps exist before claiming completion
tasks include exact file paths and dependency order
verification evidence is recorded
```

The gate is allowed to fail. A failed gate should produce either a clarification, a plan change, a decision record, or an open question.

## Brownfield Rule

For existing systems, keep these two changes separate:

```text
tooling or template updates
feature artifact evolution
```

Do not treat a tooling refresh as a behavior change. Do not treat a behavior change as a tooling refresh.

Brownfield work should start by reconciling current source state with target specification state. If current code and existing docs disagree, inspect code and running behavior before rewriting the spec.

## Convergence Rule

After implementation, compare:

```text
specification
plan
tasks
changed source files
verification evidence
runtime behavior
```

Then record one of:

```text
complete with evidence
partial with remaining tasks
blocked with reason
spec changed during implementation
plan changed during implementation
decision required
open question remains
```

Convergence is how project memory avoids becoming a stale promise.

## Relationship To Project Doctrine

This doctrine depends on:

```text
source-grounding.md   # claims require recoverable sources
decisions.md          # meaningful tradeoffs require records
open-questions.md     # unresolved uncertainty must remain visible
handoff.md            # continuity requires evidence and next action
```

It should not replace those files. It gives project work a disciplined feature-development shape.