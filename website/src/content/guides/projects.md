---
title: Save projects and portable experiment templates
description: Use .wavelab and .wavelab-exp for their intended roles, reopen Manual
  configurations honestly and handle save errors without weakening protections.
order: 7
kind: guide
level: Foundation
readingMinutes: 3
related:
- learn/guides/manual-auto/
- learn/guides/result-validity/
updated: '2026-10-27'
---

## Two formats, two roles

`.wavelab` stores a structured project and its authored workbench configuration. `.wavelab-exp` stores an experiment template for educational reuse. They are local structured contracts, not arbitrary executable plugins or recording archives. Supported earlier schemas migrate through validated application logic rather than invented missing physical parameters.

## Save safely

Use Save or Save As and choose a permitted user-writable location. Keep backups of valuable originals. An error, denied folder or unavailable path is not a successful save. Retain the exact message and select another authorized destination instead of disabling Windows protection or changing unrelated permissions.

## Reopen honestly

On reopen, the saved source/load/line/probe and instrument configuration returns. Manual workbenches remain **Not Calculated / Run Required** until the user selects Run. Auto follows normal scheduling. No saved measurement recording or run history is implied. **Outdated** applies when an existing calculated result no longer matches the present settings.

## Check portability

Test a nonconfidential copy of an experiment/project in a separate permitted profile or location while preserving the original. Self-contained content should not depend on hidden absolute paths. Preferences that belong to the user's environment are distinct from a scientific project's physical meaning; do not assume every global setting travels with a template.

## Share only what you intend

Before sharing, inspect project names, authored instructions, labels and any embedded content for private information. Use a newly created minimal example in public bug reports. Application-level save/open and migration tests are not proof of installer upgrade/uninstall/reinstall behavior; those lifecycle gates are separate and remain unverified for the internal candidate.

Continue with [Manual/Auto](/learn/guides/manual-auto/), [Experiment Builder](/learn/guides/experiment-builder/) or [support](/support/).
