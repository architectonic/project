---
type: Doctrine
title: Project Operating Unit
description: Defines a project as a source-grounded operating unit for human-agent collaboration.
tags: [project, operating-unit, source-grounding, memory, okf]
timestamp: 2026-06-26T00:00:00-03:00
okf_version: "0.1"
source_status: distilled
source_name: Agent Memory Ops Kit and private dogfood patterns
risk_level: low
---

# Project Operating Unit

A project is an operating unit for human-agent collaboration.

It is not merely a repository.

## Project Contents

A project may include:

```text
code
documents
design files
deployments
conversations
decisions
assets
research
external references
source indexes
logs
handoffs
```

## Project Knowledge

Project-native knowledge describes:

```text
purpose
scope
current state
target state
architecture
ontology
sources
decisions
assumptions
open questions
roadmap
handoffs
```

## Gathering Requirement

Project-native knowledge requires source review or explicit interview.

Do not infer project truth from memory alone.

## Core Files

A project instance may contain:

```text
vision.md
project_profile.md
ontology.md
architecture.md
design.md
sources.md
decisions.md
open_questions.md
roadmap.md
log.md
handoff.md
```

These files are templates until instantiated.

## Project Ontology

Project ontology should define terms, entities, relationships, and distinctions that matter inside the project.

Do not impose generic architecture terms before reading the source artifacts.

## Failure Modes

This doctrine prevents:

```text
repo URL being mistaken for project context
chat history becoming project truth
agents inventing target state
architecture being documented from inference
decisions disappearing across sessions
```
