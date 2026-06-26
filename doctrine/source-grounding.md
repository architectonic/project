---
type: Doctrine
title: Source Grounding
description: Rules for building project knowledge from recoverable source artifacts instead of memory or inference.
tags: [project, sources, evidence, source-review, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Source Grounding

Project knowledge must be grounded in recoverable sources.

## Source Artifact

A source artifact may be:

```text
code
configuration
documentation
commit
issue
pull request
design file
deployment state
log
explicit interview answer
external reference
```

## Source Indexes

Prefer source indexes over raw dumps.

A source index should record:

```text
source name
location
kind
authority level
last reviewed date
what it supports
known limitations
```

## Review Before Writing

Before writing project-native knowledge:

1. identify the relevant sources;
2. inspect the strongest available source artifact;
3. separate current state from target state;
4. distinguish facts from assumptions;
5. preserve open questions instead of filling gaps;
6. cite or reference the source.

## Conflict Resolution

When project sources conflict, prefer:

1. current source code and configuration;
2. current deployed/running state;
3. current human instruction;
4. recent project documentation;
5. older project documentation;
6. generated summaries;
7. inference.

## Failure Modes

This doctrine prevents:

```text
architecture drift
documentation hallucination
old plans being treated as current state
generated summaries becoming evidence
missing source authority boundaries
```
