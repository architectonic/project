# project

A public package for defining a project as an operating unit for human + AI collaboration.

## Premise

Agents need more than a prompt and a repo. They need a source-grounded model of the project they are working inside.

`project` defines the doctrine, templates, and interrogation procedures for turning vague project intent into durable operating knowledge.

## What a project means here

A project is an operating unit with goals, sources, constraints, architecture, decisions, open questions, memory, and handoffs.

A project is not just a repository. It may include code, documents, designs, deployments, conversations, decisions, assets, research, and external references.

## Core project files

```text
vision.md          # the shortest stable statement of what the project exists to make true
project_profile.md # purpose, scope, users, source repositories, status, and boundaries
ontology.md        # project-specific entities, terms, relationships, and distinctions
architecture.md    # current and target structure, components, data flow, dependencies, constraints
design.md          # product/design language, UX principles, interfaces, and communication patterns
sources.md         # recoverable source artifacts and their authority
 decisions.md      # durable decisions with reasons, alternatives, date, status, and scope
open_questions.md  # known unknowns that must not be filled by inference
roadmap.md         # staged desired outcomes and sequencing
log.md             # chronological project updates and reconciliation notes
handoff.md         # structured continuity package for another agent or human
```

## Public template vs. private instance

This repository should contain reusable doctrine, schemas, templates, and examples.

It should not contain private project facts.

```text
project template
→ agent-guided grilling and source review
→ project-specific operating memory
```

## Instantiation rule

Do not fill templates from imagination.

Replace template material only with:

1. source-grounded facts;
2. explicit human answers;
3. labeled assumptions;
4. open questions;
5. documented decisions.

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

## ADR rule

Do not create decision records for every preference.

Create a decision record only when:

1. reversal cost is meaningful;
2. future readers would not understand the choice without context;
3. real alternatives existed.

## Relationship to teleology

`teleology` defines what the collaboration is for.

`project` defines the operating unit where that purpose becomes concrete work.

## Status

Early vocabulary and ontology work.
