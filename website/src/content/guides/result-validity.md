---
title: Understand result states and common errors
description: Distinguish absent, stale, invalid and physically singular results, and
  respond to scope, probe and plot limitations without fabricating readings.
order: 8
kind: guide
level: Foundation
readingMinutes: 3
related:
- learn/guides/manual-auto/
- learn/guides/result-validity/
updated: '2026-10-27'
---

## Begin with the status, not the number

**Not Calculated / Run Required** means a result does not exist. Finish a supported configuration and explicitly Run a Manual workbench. **Outdated** means an existing result no longer matches the configuration. Neither status means the physical voltage is zero.

## Check physical position and topology

**Invalid Position** means a probe is outside its attached physical line, for example after shortening it. Reposition it explicitly. Supported equivalent canonical section chains do not authorize arbitrary non-equivalent junctions; equal $Z_c$ alone is not sufficient equivalence. Inspect physical length/settings rather than visual screen geometry.

## Respect model and source domains

A Lossless or Distortionless label carries constraints. Positive-real fixed-power excitation has a specific domain; a complex characteristic impedance must not be silently replaced by its magnitude. OFF, singular, unsupported and invalid-input statuses have different causes and must not collapse into invented numeric output.

## Instruments and plots have their own validity

A solver-supported frequency can exceed a chosen waveform reconstruction/display's valid range. Bandwidth, trigger crossing, sample/rendering bounds and zero-signal measurements need truthful messages. Phase/frequency is not meaningful for every signal. A plot can contain invalid points; a gap/status can be more accurate than a connected line through an artificial zero.

## Asynchronous and visibility state

After a new physical change, a late older response is not a current result. A visual redraw is not proof that the network was recalculated. Manual comparisons must not launch hidden solves. Hidden theoretical values remain governed by the same visibility authority across plots, aliases and exports.

## A productive troubleshooting sequence

1. Record the actual status and units without changing protection settings.
2. Confirm the supported topology, physical model, positive-frequency input and parameter units.
3. Inspect probe position and connected measurement references.
4. Explicitly Run if Manual, then wait for a matching Current result.
5. Check scope/plot validity and visibility before interpreting absent values.
6. Report a minimal nonconfidential reproduction through [Issues](/community/).

The [scientific scope](/scientific-scope/) and [release status](/release-status/) remain the authoritative boundaries. Do not call an unexecuted test passed because a warning was accepted by an owner.
