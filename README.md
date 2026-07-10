---
type: Entry Point
title: project
description: Runtime-neutral project operating-unit package for source-grounded human-agent collaboration.
tags: [project, operating-unit, source-grounding, stakeholders, decisions, handoff, okf]
okf_version: "0.1"
status: draft
---

# project

```bash
npx architectonic add project
```

`project` defines doctrine, templates, and interrogation procedures for turning vague intent into durable, source-grounded operating knowledge about a concrete unit of work.

This repository is not a private project vault. It defines reusable structure that a private or project-specific instance can later instantiate.

## In the ensemble

```text
constitution      composition contract for the ensemble
doctrine          purpose, principles, ontology, epistemology, ethics, governance, incentives
identity          actors, roles, authority, delegation, incentives, privacy
project           operating-unit context, sources, decisions, risks, continuity
skills            reusable procedures, verification, failure handling
knowledge         claims, sources, evidence, uncertainty, known unknowns
models            model metadata, evaluations, capability requirements, routing policy
agents            software actors composed from identity, skills, models, knowledge, permissions
living-knowledge  optional: governed maintenance of frequently changing corpora
meta              audit, upkeep, drift review, revision policy
```

A project is an operating unit — code, documents, deployments, decisions, stakeholders, risks, and source artifacts. It is not just a repository. A repository may be one source inside a larger project.

## Commands

```bash
npx architectonic add project
npx architectonic add project --source npm
npx architectonic init
npx architectonic list
npx architectonic doctor
```

CLI: https://github.com/architectonic/architectonic

## Core project files

A project instance may contain:

```text
vision.md          shortest stable statement of what the project exists to make true
project.md         purpose, scope, users, sources, status, boundaries
ontology.md        project-specific entities, terms, relationships
sources.md         recoverable source artifacts and their authority
decisions.md       durable decisions with reasons, alternatives, date, status, scope
open_questions.md  known unknowns that must not be filled by inference
log.md             chronological updates and reconciliation notes
handoff.md         structured continuity for another agent or human
```

These are templates until instantiated. Template language is not project knowledge.

## Instantiation rule

Replace template material only with source-grounded facts, explicit human answers, labeled assumptions, open questions, and documented decisions with reasons and scope.

A source artifact outranks memory. A claim without evidence remains a claim.

## Boundary

This repository may contain general project doctrine, schemas, templates, and procedures.

It must not contain private project memory, private source paths, client-sensitive facts, private decisions, runtime secrets, or product-specific operational state.
