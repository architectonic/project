---
type: Template
title: Implementation Tasks Template
description: Runtime-neutral template for dependency-aware, independently verifiable implementation tasks.
tags: [project, template, tasks, implementation, verification, okf]
okf_version: "0.1"
status: draft
---

# Tasks: [FEATURE NAME]

> This file decomposes one specified change. It is not a project backlog or live
> status authority. When Rail is present, link this artifact from one Rail item and
> keep selection, ownership, dependencies between work items, status, and completion
> evidence in the canonical ledger.

**Input**: Design artifacts from [workstream path]

**Prerequisites**: specification, plan, and any required research, contracts, data model, or quickstart.

**Organization**: Tasks are grouped by phase and user story so each story can be implemented and verified independently.

## Format

```text
- [ ] T001 [P?] [Story?] Specific action in exact/path.ext
```

- `[P]` means the task can run in parallel because it touches different files and has no hidden dependency.
- `[US1]`, `[US2]`, or similar maps the task to a user story.
- Every implementation task should name exact file paths.

## Phase 1: Setup

**Purpose**: Create or adjust shared project structure required by later tasks.

- [ ] T001 Create [directory or file] in [exact/path]
- [ ] T002 Configure [tool or dependency] in [exact/path]
- [ ] T003 [P] Add [supporting file] in [exact/path]

**Checkpoint**: Shared setup is complete.

---

## Phase 2: Foundation

**Purpose**: Blocking prerequisites required before user-story work begins.

- [ ] T004 Create [schema, contract, adapter, service boundary] in [exact/path]
- [ ] T005 [P] Add validation or error handling foundation in [exact/path]
- [ ] T006 [P] Add test or verification harness in [exact/path]

**Checkpoint**: User-story work can begin without rediscovering foundations.

---

## Phase 3: User Story 1 - [title] (Priority: P1)

**Goal**: [What this story delivers.]

**Independent Test**: [How to verify this story by itself.]

### Tests Or Validation

- [ ] T007 [P] [US1] Add contract or integration check in [exact/path]
- [ ] T008 [P] [US1] Add user-journey validation in [exact/path]

### Implementation

- [ ] T009 [P] [US1] Create or update [entity/model] in [exact/path]
- [ ] T010 [US1] Implement [service or behavior] in [exact/path]
- [ ] T011 [US1] Wire [UI, CLI, API, or workflow] in [exact/path]

**Checkpoint**: US1 works independently and can be demonstrated.

---

## Phase 4: User Story 2 - [title] (Priority: P2)

**Goal**: [What this story delivers.]

**Independent Test**: [How to verify this story by itself.]

- [ ] T012 [P] [US2] Add validation in [exact/path]
- [ ] T013 [US2] Implement [behavior] in [exact/path]

**Checkpoint**: US2 works independently and does not break US1.

---

## Final Phase: Polish And Reconciliation

- [ ] T900 Run quickstart validation and record evidence.
- [ ] T901 Reconcile changed behavior back into specification or plan.
- [ ] T902 Update decisions or open questions if implementation changed the plan.
- [ ] T903 Write handoff with changed paths, verification evidence, and next action.

## Dependency Order

```text
setup -> foundation -> user stories by priority or safe parallelism -> reconciliation
```

Rules:

- Foundational tasks block user-story implementation.
- Tasks touching the same file are usually sequential.
- Tasks changing a shared contract should complete before consumers update.
- Each story should remain independently testable.
- Stop at checkpoints when human review, product validation, or runtime proof is needed.

## Quality Checklist

- [ ] No vague tasks.
- [ ] Exact paths are present.
- [ ] Parallel markers only appear on safe tasks.
- [ ] Dependencies are explicit.
- [ ] Verification precedes completion claims.
- [ ] Reconciliation and handoff are included.
