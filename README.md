# Project

> **Status: experimental, pre-1.0.** This package provides source-grounded project structure and procedures. Templates are not project facts until instantiated from sources, explicit decisions, labeled assumptions, or preserved unknowns.

A project is a **standalone bounded operating unit**, not merely a repository and not a subordinate object that requires an organization.

```bash
npx architectonic@latest init my-project --preset project --source npm
```

Use it for:

- purpose, scope, users, and success conditions;
- canonical sources and current architecture;
- decisions, risks, assumptions, and open questions;
- status, roadmap, tasks, verification, reconciliation, and handoff.

Promote to `project-system` when the project also needs its own knowledge corpus, reusable procedures, and upkeep:

```bash
npx architectonic@latest init my-project --preset project-system --source npm
```

Neither profile requires constitution or identity. Add organization governance or actor authority only when the project actually depends on those boundaries.

See [`STANDALONE.md`](./STANDALONE.md) and [`START_HERE.md`](./START_HERE.md).
