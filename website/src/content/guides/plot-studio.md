---
title: Explore current results in Plot Studio
description: Choose a scientific quantity and domain, inspect current curves and exact
  cursor evaluations, and export only a current permitted graph.
order: 5
kind: guide
level: Foundation
readingMinutes: 3
related:
- learn/guides/manual-auto/
- learn/guides/result-validity/
updated: '2026-10-27'
image: plot-studio
---

## Choose a question before a curve

Decide whether you want variation with physical distance, time, frequency or a supported parameter. Select a quantity whose meaning and units answer that question. A real/imaginary phasor curve, magnitude envelope and instantaneous reconstructed voltage are different views, even when they originate from the same physical solution.

## Build a valid current plot

Configure and explicitly Run a Manual workbench first. In Plot Studio, choose supported quantities, domains and references. Respect per-point validity and singularities. A rejected point should remain a gap/status where appropriate, not a fabricated zero. Read both axes when using dual-axis presentations.

## Compare deliberately

For multiple workbenches, each Manual source requires its own explicit Run. A comparison does not secretly calculate the other side. Curves and existing plots must follow centralized visibility policy: revealing a permitted result is different from exposing a Hidden Throughout Exercise variable.

## Use scientific cursors

Keep the cursor's curve, coordinate and units clear. An exact evaluation from the current cached physical solution is different from guessing a nearby drawn pixel. At extrema and phase wrapping, inspect the underlying quantity and validity before declaring a physical discontinuity.

## Sweeps and rendering

A frequency sweep does not necessarily change every line quantity. For a constant-RLGC lossless line, characteristic impedance remains the same; investigate changing impedance with suitable supported parameter sequences. Broad physical-engine validity and bounded rendering resolution are separate concerns. A rendering limit must not quietly change the physical frequency or model.

## Current-only exports

CSV and PNG represent the **current permitted graph**, not measurement recording or simulation-run history. After a physical change, stale exports must not be presented as a current result. Check titles, units, sources and visibility before sharing a safe nonconfidential file.

Learn to interpret [standing waves](/experiments/standing-waves-vswr/) or the [propagation constant](/learn/concepts/propagation-constant/). The website does not implement a second plotting simulator; product images are actual desktop captures.
