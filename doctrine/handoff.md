---
type: Doctrine
title: Handoff
description: Rules for writing structured continuity notes that let another human or agent continue project work without guessing.
tags: [project, handoff, continuity, memory, verification, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Handoff

A handoff is a structured continuity note.

It is not a transcript, summary dump, or chat recap.

## Purpose

A good handoff lets another human or agent continue work without guessing.

## Required Content

A useful handoff includes:

```text
summary
current state
changed files or concepts
next action
owner or responsible actor
decisions
assumptions
open questions
blockers
verification evidence
```

## Verification Evidence

Evidence may include:

```text
commit SHA
file path
test result
build result
API response
log excerpt
manual verification note
source citation
```

Do not say work is complete without evidence.

## When To Write

Write a handoff when:

```text
work spans sessions
another actor will continue
source state changed
decisions were made
verification is partial
there are unresolved blockers
context would otherwise be lost
```

## Failure Modes

This doctrine prevents:

```text
agents restarting discovery from zero
chat transcripts masquerading as continuity
next steps being vague
verification evidence disappearing
assumptions being forgotten
```
