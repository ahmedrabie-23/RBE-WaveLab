---
title: Use the four-channel Oscilloscope
description: Assign connected measurements, understand steady-state reconstruction,
  use a valid common trigger and interpret measurements and cursors.
order: 4
kind: guide
level: Foundation
readingMinutes: 3
related:
- learn/guides/manual-auto/
- learn/guides/result-validity/
updated: '2026-10-27'
image: oscilloscope
---

## What the scope represents

WaveLab's Oscilloscope reconstructs supported steady-state continuous-wave voltage waveforms from the real analytical solution. It is not a physical acquisition device and does not numerically solve arbitrary pulses or transients. Its controls should make that valid signal understandable without fabricating data.

## Connect and configure channels

Attach voltage probes to valid physical positions and assign connected measurement sources to CH1–CH4. Enable the channels you need. Inspect Volts/Div and channel position for the selected channel; different scales do not imply different physical amplitudes. Use Time/Div and horizontal position to choose a useful view of the same steady-state signal.

## Respect frequency and reconstruction limits

A physically valid solver frequency does not guarantee a waveform can be faithfully rendered under every display setting. Respect valid-frequency, bandwidth and reconstruction/rendering-limit messages. An unresolved trace must not be silently aliased to a lower frequency or interpreted as a zero signal.

## Establish a common time reference

Choose a connected valid trigger source, level and rising/falling slope with a mathematically available crossing. Trigger controls align a common time origin for all channels; they must not independently rephase each waveform. A flat zero signal does not supply a normal crossing or a meaningful measured phase/frequency.

## Use Measure and cursors

Select supported measurements and read their validity. Peak, RMS, instantaneous voltage and phasor magnitude are not interchangeable. A voltage cursor reads the selected channel/reference, not an unspecified waveform after channel changes. Time cursors and voltage cursors answer different questions; keep units visible when comparing a value to theory.

## A useful first check

Run the preconfigured Wave Propagation example, wait for Current and compare probes at different physical positions. Read relative phase with the shared trigger. Changing display scale should not change the physical solution. If a readout is invalid, retain the status and consult [validity guidance](/learn/guides/result-validity/), not an invented numerical replacement.

The [Wave Propagation experiment](/experiments/wave-propagation/) provides a labelled independent sinusoidal example; screenshots show real candidate behavior, not a claimed match to every illustrative parameter.
