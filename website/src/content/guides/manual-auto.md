---
title: Manual, Auto and current results
description: Know when a calculation occurs, what restores on reopen, and how Not
  Calculated differs from an existing Outdated result.
order: 3
kind: guide
level: Foundation
readingMinutes: 3
related:
- learn/guides/workbench/
- learn/guides/projects/
updated: '2026-10-27'
---

## Two modes, one meaning of Current

Manual mode waits for an explicit **Run**. Auto schedules calculations according to the normal physical-update policy. Neither mode turns visual panel movement into a change to the line's physical model. A result is **Current** only when it matches the current configuration and valid publication state.

## Before the first calculation

If no result exists, show **Not Calculated / Run Required**. That is different from **Outdated**, which describes a real existing result that no longer matches the changed configuration. Do not read an old display as a newly calculated measurement merely because it is visible.

## After a physical edit

Predict the effect first. In Manual mode, press Run after changing source/load/RLGC/length settings. In Auto, allow normal scheduling and wait for a matching Current result. Fast edits can create asynchronous work; a late response to an older configuration must not replace the current state.

Instrument display edits such as scale or cursors can evaluate or render current cached data without necessarily solving the entire network again. A different plot request is not automatically a different physical network. Read the actual diagnostic/state rather than infer a new solve from every visible redraw.

## Multiple workbenches and comparisons

Comparing results does not permit secretly running a Manual workbench. Configure and explicitly Run each Manual experiment that needs a result. If a comparison is unavailable because one side has no current result, that is useful information, not a missing permission to calculate silently.

## Save and reopen

A project stores authored configuration. On reopen, Manual workbenches must remain uncalculated until Run is selected. Auto can follow its normal scheduling. The absence of saved recordings is intentional V1 behavior; the project is not a simulation-run history file.

For measurement-specific diagnostics, continue to [result validity](/learn/guides/result-validity/). For portable files, see [projects and templates](/learn/guides/projects/).
