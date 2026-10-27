---
title: Configure the physical Workbench
description: Understand source–line–load connections, physical probe positions, component
  editors and the difference between geometry and model parameters.
order: 2
kind: guide
level: Foundation
readingMinutes: 3
related:
- learn/guides/manual-auto/
- learn/guides/result-validity/
updated: '2026-10-27'
image: workbench
---

## Think in physical connections

The supported core experiment is a source, transmission line and load, with non-invasive voltage probes attached at physical line positions. Wires and ports carry connection meaning; visual proximity alone does not establish a physical connection. Use the supported topology and read diagnostics rather than drawing an arbitrary branched network and assuming it is valid.

## Use the component editors

Open a component's popup editor to inspect its supported source/load/line settings. Expand Advanced only when the investigation requires those settings. Check units and the selected model before running. Lossless, Lossy and Distortionless labels carry requirements; a conflicting parameter set must not silently become another model.

## Geometry is not physical length

Dragging a symbol, resizing a panel or changing a visual ruler is not the same as editing physical line length. The line's own configuration defines its length. Place a probe at an actual position on that physical line, not merely at a convenient screen coordinate.

If shortening a line leaves a probe outside it, **Invalid Position** is appropriate. Reposition it explicitly. Silently clamping it to the new end would alter the meaning of the measurement.

## Sections and supported equivalents

Zero-length lines and supported equivalent canonical RLGC chains are implemented. Equal characteristic impedance alone does not make two physically different line sections equivalent. Follow the documented source–line–load/equivalence checks and treat unsupported junctions as unsupported, not a reason to replace the device by a mock.

## Run, inspect and revise

In Manual mode, a valid configuration still needs **Run**. Wait for Current before reading measurements. A comparison does not authorize a hidden solve of another Manual workbench. Use the [calculation-mode guide](/learn/guides/manual-auto/) to distinguish a configuration change from a result publication.

Use newly created nonconfidential examples for public support questions. [Scientific scope](/scientific-scope/) is the authority for what the model supports.
