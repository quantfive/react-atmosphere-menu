---
name: dep-install
description: Installs project dependencies for a repository. Use when setting up a fresh clone or worktree that needs node_modules, .venv, or other dependency directories populated.
---

# Dependency Installation

## Objective

Analyze this repository and create an idempotent shell script at `.codepress-package-install` that installs all project dependencies. Do NOT run the script — just create it. The caller will execute it separately.

## Workflow

1. **Analyze the repository** — look for dependency manifests:
   - `package.json` / `package-lock.json` / `yarn.lock` / `pnpm-lock.yaml` / `bun.lockb` (Node.js)
   - `requirements.txt` / `pyproject.toml` / `Pipfile` / `setup.py` / `setup.cfg` (Python)
   - `Gemfile` / `Gemfile.lock` (Ruby)
   - `go.mod` (Go)
   - `composer.json` (PHP)
   - Check for monorepo structures (workspaces, multiple package.json files in subdirs)

2. **Detect the correct package manager** by checking lock files:
   - `package-lock.json` → npm
   - `yarn.lock` → yarn
   - `pnpm-lock.yaml` → pnpm
   - `bun.lockb` → bun
   - `uv.lock` or `pyproject.toml` with `[tool.uv]` → uv
   - `Pipfile.lock` → pipenv
   - `poetry.lock` → poetry
   - If no lock file, infer from the project's README or configuration

3. **Write `.codepress-package-install`** — a bash script that:
   - Starts with `#!/bin/bash` and `set -e`
   - Changes to the repo root directory (`cd "$(dirname "$0")"`)
   - Installs dependencies using the detected package manager
   - Handles monorepo workspaces if applicable
   - Is idempotent (safe to run multiple times)
   - Does NOT include git operations (no clone, fetch, pull)
   - Does NOT run build steps, tests, or dev servers
   - Focuses solely on dependency installation

## Script Examples

### Node.js (npm)

```bash
#!/bin/bash
set -e
cd "$(dirname "$0")"
npm ci --prefer-offline 2>/dev/null || npm install
```

### Node.js (yarn)

```bash
#!/bin/bash
set -e
cd "$(dirname "$0")"
yarn install --frozen-lockfile 2>/dev/null || yarn install
```

### Node.js (pnpm)

```bash
#!/bin/bash
set -e
cd "$(dirname "$0")"
pnpm install --frozen-lockfile 2>/dev/null || pnpm install
```

### Python (uv)

```bash
#!/bin/bash
set -e
cd "$(dirname "$0")"
uv sync
```

### Python (pip)

```bash
#!/bin/bash
set -e
cd "$(dirname "$0")"
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

### Monorepo

```bash
#!/bin/bash
set -e
cd "$(dirname "$0")"
# Root dependencies
npm ci --prefer-offline 2>/dev/null || npm install
# Workspace dependencies (if not hoisted)
# npm run bootstrap  # or equivalent
```

## Important Rules

- Only install dependencies — nothing else
- Prefer deterministic installs (`ci`, `--frozen-lockfile`) with fallback to regular install
- Do not modify any source files
- Do not run migrations, builds, or tests
- If the repo has no dependencies to install, create the script with just a comment explaining there are no dependencies
- Suppress non-critical warnings to keep output clean

## Excluded Dependencies — Do NOT Install

The following should NEVER be included in the install script, even if their manifests exist in the repo. These are heavy toolchains that are not needed by the agent:

- **Rust / Cargo** — Do not install Rust toolchains, run `cargo fetch`, `cargo build`, or process `Cargo.toml` / `Cargo.lock` files
- **Java / Gradle / Maven** — Do not install JDKs or run `./gradlew`, `mvn install`
- **Swift / Xcode** — Do not run `swift package resolve` or process `Package.swift`
- **C/C++ system libraries** — Do not run `apt-get install`, `brew install`, `make`, or `cmake`
- **Docker images** — Do not pull Docker images or run `docker build`

In monorepos, some subdirectories may contain these manifests (e.g., a `Cargo.toml` in a desktop app subfolder). Ignore them entirely — only install Node.js, Python, Ruby, Go, and PHP dependencies.
