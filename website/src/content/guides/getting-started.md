---
title: Your first Wave Propagation experiment
description: Open a supported preconfigured experiment, explicitly Run it, inspect
  genuine measurements and save the local configuration.
order: 1
kind: guide
level: Start here
readingMinutes: 3
related:
- learn/guides/manual-auto/
- learn/guides/result-validity/
updated: '2026-10-27'
image: workbench
---

## Before opening an experiment

Use only an authorized build on a permitted computer. The public Stable application has not been released, and the Download page deliberately offers no installer. Consult [requirements](/requirements/) and [release status](/release-status/). Read the application terms and keep Windows protections enabled.

## Start with a connected example

1. On Home, open **Experiment Library** and select **Wave Propagation**.
2. Choose **Preconfigured Setup**, then **Start experiment**. This is different from Equipment Ready, where you assemble supplied equipment, and Empty Setup, which begins without equipment.
3. Read the guide and inspect the source, physical transmission line, load and probes. A component symbol is a visual object; its position is not its physical line length.
4. Select **Run**. Built-in lessons use Manual mode. Wait for **Current** before treating a reading as current evidence.

## Inspect a result in two ways

Use the voltage probes for selected physical positions. Open the **Oscilloscope**, enable/assign connected measurements to CH1–CH4 and inspect Measure and cursors. Compare channels with one shared time reference, and respect trigger, bandwidth and valid-frequency messages.

Open **Plot Studio** for a current supported spatial or other scientific curve. Read the axes and units before comparing its values with scope RMS/peak values. A screenshot of an instantaneous waveform is not the same quantity as a voltage-amplitude envelope.

## Make one deliberate change

Predict what a frequency, physical length or termination change should do. Change one supported parameter in its component editor. In Manual mode, select Run again. Auto follows its normal scheduling for physical edits; moving symbols or resizing panels should not become a hidden physical calculation.

## Save the configuration

Save or Save As a `.wavelab` project to a permitted local location. Reopen it using Open. A reopened Manual workbench restores settings and requires explicit Run; no calculated result recording is implied. A `.wavelab-exp` file serves a different role: it is a portable experiment template.

## Read statuses precisely

**Not Calculated / Run Required** means no result exists. **Outdated** means an existing result no longer matches the configuration. **Invalid Position** requires an explicit probe reposition on the physical line. An invalid or unresolved reading is not a measured zero. Retain useful diagnostics instead of hiding them.

Next, [study the propagation experiment](/experiments/wave-propagation/) or learn the [workbench workflow](/learn/guides/workbench/).
