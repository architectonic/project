# Project

**Architectonic layer:** [main CLI and adaptive profiles](https://github.com/architectonic/architectonic)
**Live work contract when needed:** [Rail](https://github.com/architectonic/rail)

> **Status: experimental, pre-1.0.** This package provides source-grounded project structure and procedures. Templates are not project facts until instantiated from sources, explicit decisions, labeled assumptions, or preserved unknowns.

A project is a **standalone bounded operating unit**, not merely a repository and not a subordinate object that requires an organization.

```bash
npx architectonic@latest init my-project --preset project --source npm
```

Use it for:

- purpose, scope, users, and success conditions;
- canonical sources and current architecture;
- decisions, risks, assumptions, and open questions;
- specifications, plans, task decomposition, verification, reconciliation, and handoff.

`project` explains the work. Rail coordinates the work. When a project needs durable
multi-session or multi-agent execution, bind one Rail ledger—normally
`operations/ledger.json`—as the only authority for live selection, ownership,
dependencies, status, and completion evidence. Specifications, plans, task files,
roadmaps, changelogs, and handoffs remain source and context artifacts; they do not
become competing queues.

Small, short-lived projects may omit Rail. Add it when live work must survive a
handoff, coordinate actors, or be selected without relying on chat history.

Promote to `project-system` when the project also needs its own knowledge corpus, reusable procedures, and upkeep:

```bash
npx architectonic@latest init my-project --preset project-system --source npm
```

Neither profile requires constitution or identity. Add organization governance or actor authority only when the project actually depends on those boundaries.

See [`STANDALONE.md`](./STANDALONE.md) and [`START_HERE.md`](./START_HERE.md).
