---
type: Agent Instruction
title: Project Agent Instructions
description: Rules for agents reading or modifying the project operating-unit bundle.
tags: [agents, instructions, project, source-grounding, spec-driven-development, okf]
okf_version: "0.1"
status: draft
---

# Agent Instructions

## Scope

These instructions apply to agents working with this repository.

`project` defines reusable doctrine, templates, and procedures for project operating units.

It does not store private project facts. It provides public structure that can be instantiated into a project-specific vault or workspace elsewhere.

## Read Order

1. Read `README.md`.
2. Read `START_HERE.md`.
3. Read `index.md`.
4. Read `doctrine/index.md`.
5. Read `doctrine/source-grounding.md` before writing project-native claims.
6. Read `doctrine/spec-driven-development.md` before turning intent into feature, refactor, installer, or runtime work.
7. Read the specific doctrine concept relevant to the task.

## Core Rules

- A project is an operating unit, not merely a repository.
- Project-native knowledge requires source review or explicit interview.
- Do not infer project truth from memory alone.
- Separate current state from target state.
- Preserve open questions instead of filling gaps.
- Record decisions only when reversal cost or future context justifies it.
- Keep specification, plan, tasks, verification evidence, and handoff as separate roles when work is durable.
- A handoff is continuity, not transcript.

## Before Writing

Before creating or editing a file:

1. Verify the target repository and path.
2. Read the current file or nearest existing pattern.
3. Classify the material as project doctrine, source grounding, spec-driven development, decision, open question, handoff, template, example, or temporary context.
4. Reject private project memory, private source paths, client-sensitive facts, secrets, raw dumps, and product-specific operational state.
5. Make the smallest coherent change.
6. Read back the result.
7. Report changed paths and commit SHAs.

## Completion Standard

A change is complete only when:

1. the intended file was created or updated;
2. the content is compact and source-grounded or procedure-grounded;
3. the content has OKF-compatible frontmatter unless it is `index.md` or `log.md`;
4. private-instance content was not introduced;
5. the result was read back or otherwise verified.