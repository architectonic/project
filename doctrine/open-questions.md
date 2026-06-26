---
type: Doctrine
title: Open Questions
description: Rules for preserving known unknowns instead of filling project gaps by inference.
tags: [project, open-questions, uncertainty, source-grounding, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Open Questions

An open question is a known unknown that should not be filled by inference.

Open questions are valuable because they tell future humans and agents where evidence is still missing.

## When To Record

Record an open question when:

```text
source evidence is missing
sources conflict
human intent is unresolved
a project term is overloaded
a decision requires authority
target state differs from current state
risk is known but not quantified
```

## Question Fields

A useful open question includes:

```text
question
why it matters
current evidence
missing evidence
owner or next investigator
status
last reviewed date
```

## Resolution

When an open question is answered, move the result into the appropriate durable location:

```text
fact
decision
assumption
source index
project ontology
roadmap
```

Do not leave answered questions as stale unknowns.

## Failure Modes

This doctrine prevents:

```text
agents inventing missing requirements
uncertainty being hidden
old unknowns blocking future work
answered questions remaining stale
project docs looking complete while hiding gaps
```
