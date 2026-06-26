---
type: Doctrine
title: Decisions
description: Rules for recording durable project decisions with reason, alternatives, date, status, and scope.
tags: [project, decisions, adr, governance, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Decisions

A decision is a durable record of a meaningful choice.

It should explain what was chosen, why, what alternatives existed, and when the choice should be revisited.

## When To Record A Decision

Do not record every preference as a decision.

Create a decision record when:

1. reversal cost is meaningful;
2. future readers would not understand the choice without context;
3. real alternatives existed;
4. the decision affects architecture, scope, authority, cost, privacy, deployment, or workflow.

## Decision Fields

A useful decision record includes:

```text
date
decision
reason
alternatives considered
status
scope
consequences
revisit conditions
source or authority
```

## Status Values

Suggested statuses:

```text
proposed
accepted
superseded
deprecated
rejected
revisit-needed
```

## Failure Modes

This doctrine prevents:

```text
important choices disappearing into chat
future agents reversing choices by accident
preferences being over-recorded as architecture
assumptions masquerading as decisions
context-free ADR bloat
```
