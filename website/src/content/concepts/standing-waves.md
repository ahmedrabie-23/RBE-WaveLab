---
title: Standing waves and envelope extrema
description: Separate a voltage-amplitude envelope from an instantaneous waveform
  and keep the classical standing-wave ratio in its correct domain.
order: 5
kind: concept
level: Foundation
readingMinutes: 3
related:
- experiments/wave-propagation/
- learn/concepts/characteristic-impedance/
updated: '2026-10-27'
---

## The pattern comes from superposition

Incident and reflected voltages add as phasors. In the classical lossless case, constructive and destructive interference creates a stationary amplitude envelope. The instantaneous voltage still oscillates. A minimum of the signed instantaneous trace is not the envelope's nonnegative minimum.

For a uniform lossless line, real positive characteristic impedance, passive termination and nonzero incident amplitude,

$$\mathrm{VSWR}=\frac{1+|\Gamma_L|}{1-|\Gamma_L|}.$$

This finite expression applies for $|\Gamma_L|<1$; the ideal total-reflection limit is infinite. Neighboring maxima are $\lambda/2$ apart, and a neighboring maximum/minimum pair is $\lambda/4$ apart. These distances refer to the simple lossless pattern, not an arbitrary finite lossy interval.

## What the shortcut does not prove

The ratio of extrema sampled over a short plot interval may differ because the interval does not contain both global extrema. General lossy forward/backward amplitudes vary with position. Complex reference impedances require further care; the passive-load voltage magnitude need not satisfy the lossless bounds. A zero signal does not define a useful 0/0 measured ratio.

## Read instruments consistently

Compare peak with peak or RMS with RMS for like sinusoids. Keep the selected curve/channel and physical position explicit. Exact current cursor evaluation is not the same as guessing a screen pixel, and validity diagnostics are part of the result.

The [standing-wave experiment](/experiments/standing-waves-vswr/) derives the classical relation and gives an independent 2:1 example. [Plot Studio guidance](/learn/guides/plot-studio/) explains how to inspect the actual current product result without inventing a recording history.
