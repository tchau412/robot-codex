# Robot Codex

This repository is a monorepo containing all components of the Robot Codex project.

## Structure

- backend/ - backend services
- frontend/ - web frontend
- infrastructure/ - infrastructure as code

## Development

This repository uses [pre-commit](https://pre-commit.com/) to enforce
formatting with **black** and **eslint**. Install the hooks with:

```bash
pre-commit install
```

Running `pre-commit` locally ensures the same checks as the CI workflow.

