---
feature: dep-install
area: .claude/skills
created: 2026-04-23
last_updated: 2026-04-23
---

# Dep Install

## Overview

CodePress dep-install skill configuration for react-atmosphere-menu. Provides agents with an idempotent script template for installing Node.js dependencies in this repo using npm, so the environment is ready before running builds, tests, or the dev server.

## Architecture

The skill defines a standard npm install workflow: prefer `npm ci --prefer-offline` (deterministic, uses lockfile) with a fallback to `npm install`. The script is written to repo root as `.codepress-package-install` and executed by the CodePress agent infrastructure before tasks that require node_modules to be present.

## Key Files

- `.claude/skills/dep-install/SKILL.md` - Skill definition consumed by the CodePress agent; describes package manager detection, script format, and excluded dependency types

## Keywords

dep-install, dependency installation, npm install, npm ci, node_modules, package-lock.json, codepress skill, package manager
