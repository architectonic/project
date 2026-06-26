---
type: Entry Point
title: project
description: Runtime-neutral project operating-unit package for source-grounded human-agent collaboration.
tags: [project, operating-unit, source-grounding, documentation, handoff, okf]
okf_version: "0.1"
status: draft
---

# project

`project` is the project operating-unit package for a runtime-neutral knowledge operating system for human-agent collaboration.

It defines doctrine, templates, and interrogation procedures for turning vague project intent into durable, source-grounded operating knowledge.

This repository is not a private project vault. It does not contain project-specific facts. It defines the reusable structure that a private or project-specific instance can later instantiate.

The current GitHub namespace is only a publishing location. It is not the project name.

## Purpose

Agents need more than a prompt and a repository URL. They need a source-grounded model of the project they are working inside.

A project package should help agents understand:

```text
what the project is for
what exists now
what target state is being pursued
what terms mean
what sources are authoritative
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
```

A project is not just a repository. A repository may be one source artifact inside a larger project.

## Core project files

A project instance may contain:

```text
vision.md          # the shortest stable statement of what the project exists to make true
project_profile.md # purpose, scope, users, source repositories, status, and boundaries
ontology.md        # project-specific entities, terms, relationships, and distinctions
architecture.md    # current and target structure, components, data flow, dependencies, constraints
design.md          # product/design language, UX principles, interfaces, and communication patterns
sources.md         # recoverable source artifacts and their authority
decisions.md       # durable decisions with reasons, alternatives, date, status, and scope
open_questions.md  # known unknowns that must not be filled by inference
roadmap.md         # staged desired outcomes and sequencing
log.md             # chronological project updates and reconciliation notes
handoff.md         # structured continuity package for another agent or human
```

These files are templates until instantiated. Template language is not project knowledge.

## Relationship to OKF

This repository should be maintained as an OKF-compatible knowledge bundle.

Concept documents should use Markdown with YAML frontmatter. `index.md` files should provide progressive disclosure. `log.md` files should record meaningful changes. Cross-links should connect related concepts. Citations should be used when factual claims depend on external sources.

OKF is the carrier format. Project is the operating-unit model.

## Public template vs. private instance

This repository should contain reusable doctrine, schemas, templates, examples, and procedures.

It must not contain private project facts.

```text
project template
→ agent-guided interrogation and source review
→ project-specific operating memory
```

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
8. update docs as understanding crystallizes.

## Decision rule

Do not create decision records for every preference.

Create a decision record only when:

1. reversal cost is meaningful;
2. future readers would not understand the choice without context;
3. real alternatives existed.

## Relationship to other packages

```text
teleology = defines what the collaboration is for and how truth, authority, and memory should be handled
identity  = defines who or what is participating
project   = defines the operating unit where work happens
skills    = defines reusable procedures
agents    = composes doctrine, identity, skills, tools, prompts, scripts, and loops
operator  = installs, updates, audits, and exports packages into runtimes
```

Project instances may consume teleology, identity, skills, agents, and operator procedures. The project package should not redefine them.

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

A file belongs here only if it helps agents instantiate, understand, continue, or verify project work.

Keep material that clarifies project purpose, scope, ontology, architecture, sources, decisions, open questions, logs, or handoffs.

Remove material that is generic, redundant, decorative, project-specific, or unable to improve future project continuity.

## Status

Draft. The immediate goal is to define the reusable project operating-unit package without leaking private project instances or runtime-specific assumptions into public doctrine.
