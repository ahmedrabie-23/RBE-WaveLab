---
title: Transmission-line matching
description: Distinguish zero voltage reflection at a boundary from a universal maximum-power
  claim or an arbitrary choice of source resistance.
order: 4
kind: concept
level: Foundation
readingMinutes: 3
related:
- experiments/wave-propagation/
- learn/concepts/characteristic-impedance/
updated: '2026-10-27'
---

## Match the wave boundary

For a supported uniform line at the load plane, a voltage-wave match means $Z_L=Z_c$. The load reflection coefficient then vanishes, provided the normalization is nonsingular. It does not mean every voltage equals the source's displayed open-circuit amplitude.

$$\Gamma_L=\frac{Z_L-Z_c}{Z_L+Z_c}.$$

Source impedance, excitation convention, line propagation and load matching play different roles. If a source specification uses available power or open-circuit voltage, preserve that physical meaning rather than inventing missing parameters when loading a project.

## A familiar independent example

For a real 50 Ω lossless line terminated by 50 Ω, voltage reflection is zero. Replacing the load with 100 Ω gives $\Gamma_L=1/3$. This is an analytical boundary example, not a screenshot-derived product measurement or an assertion about an arbitrary branched network.

## Complex-reference care

A complex match $Z_L=Z_c$ is a voltage-wave matching statement. It is not automatically a conjugate-load maximum-available-power statement. Do not silently use the magnitude of a complex impedance in a positive-real fixed-power formula. The implemented source domain and its diagnostics remain authoritative.

## In a WaveLab experiment

Use a supported setup, inspect source/line/load contracts, explicitly Run in Manual mode, then compare current reflected/total quantities. A current result is distinct from an Outdated one. If a comparison workbench is Manual, it must not be secretly solved just to fill a plot.

Start with [Wave Propagation](/experiments/wave-propagation/) and move to [Reflection Coefficient](/experiments/reflection-coefficient/). Matching is a useful baseline because it separates propagation from load interference.
