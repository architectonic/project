---
type: Entry Point
title: project
description: Runtime-neutral project operating-unit package for source-grounded human-agent collaboration.
tags: [project, operating-unit, source-grounding, stakeholders, decisions, handoff, okf]
okf_version: "0.1"
status: draft
---

# project

`project` is the operating-unit package for an Architectonic constitution.

Install it with:

```bash
npx architectonic add project
```

It defines doctrine, templates, and interrogation procedures for turning vague project intent into durable, source-grounded operating knowledge.

This repository is not a private project vault. It does not contain project-specific facts. It defines the reusable structure that a private or project-specific instance can later instantiate.

## Purpose

Agents need more than a prompt and a repository URL. They need a source-grounded model of the operating unit they are working inside.

A project package should help agents understand:

```text
what the project is for
what exists now
what target state is being pursued
what terms mean
what sources are authoritative
who the relevant stakeholders are
who can decide, approve, or stop
what incentives, costs, risks, and benefits matter
what decisions have been made
what remains unknown
what happened last
where work should continue
```

## What a project means here

A project is an operating unit.

It may include:

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
artifacts
stakeholders
risks
```

A project is not just a repository. A repository may be one source artifact inside a larger project.

## Core project files

A project instance may contain:

```text
vision.md          # the shortest stable statement of what the project exists to make true
project.md         # purpose, scope, users, source repositories, status, and boundaries
ontology.md        # project-specific entities, terms, relationships, and distinctions
sources.md         # recoverable source artifacts and their authority
decisions.md       # durable decisions with reasons, alternatives, date, status, and scope
open_questions.md  # known unknowns that must not be filled by inference
log.md             # chronological project updates and reconciliation notes
handoff.md         # structured continuity package for another agent or human
```

Optional sections or expanded files may cover architecture, design, stakeholders, incentives, authority, risks, and artifact policy. Do not create these as separate files unless they will be actively maintained.

These files are templates until instantiated. Template language is not project knowledge.

## Instantiation rule

Do not fill templates from imagination.

Replace template material only with:

1. source-grounded facts;
2. explicit human answers;
3. labeled assumptions;
4. open questions;
5. documented decisions with reasons and scope.

A source artifact outranks memory. A claim without evidence remains a claim.

## Grill-with-docs procedure

A project profile should be built through interrogation and evidence review, not passive form filling.

The agent should:

1. ask what the project is trying to make true;
2. identify source artifacts;
3. challenge vague or overloaded terms;
4. separate current state from target state;
5. record resolved vocabulary in `ontology.md`;
6. record hard-to-reverse tradeoffs in `decisions.md`;
7. preserve unknowns in `open_questions.md` instead of guessing;
8. identify stakeholders, authority, incentives, risks, and artifact ownership when they affect shared work;
9. update docs as understanding crystallizes.

## Decision rule

Do not create decision records for every preference.

Create a decision record only when:

1. reversal cost is meaningful;
2. future readers would not understand the choice without context;
3. real alternatives existed.

## Relationship to other packages

```text
constitution = root scaffold that composes Architectonic layers
doctrine     = defines governing principles, epistemology, ontology, ethics, governance, and oikonomia
identity     = defines who or what is participating
project      = defines the operating unit where work happens
skills       = defines reusable procedures
knowledge    = stores the disclosed corpus of knowledge and evidence
meta         = stores upkeep and self-improvement procedures
```

Project instances may consume doctrine, identity, skills, knowledge, meta, and runtime procedures. The project package should not redefine them.

## Public boundary

This repository may contain:

```text
general project doctrine
project schemas
project templates
source-review procedures
decision-recording procedures
handoff templates
anonymized examples
```

It must not contain:

```text
private project memory
private source paths
client-sensitive facts
private decisions
runtime secrets
private handoffs
product-specific operational state
```

## Quality rule

A file belongs here only if it helps agents build and preserve source-grounded project understanding.

Remove material that is generic, stale, redundant, or likely to become template sludge.

## Status

Draft. The immediate goal is to define a minimal operating-unit model without turning every possible concern into a default file.
