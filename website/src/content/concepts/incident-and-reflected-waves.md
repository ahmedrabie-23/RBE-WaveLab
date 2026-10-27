---
title: Incident and reflected waves
description: Use voltage and current superposition with the correct reflected-current
  sign and a clearly stated load reference plane.
order: 3
kind: concept
level: Foundation
readingMinutes: 3
related:
- experiments/wave-propagation/
- learn/concepts/characteristic-impedance/
updated: '2026-10-27'
---

## A boundary requires a second component

A forward wave travels toward the load. Unless the load matches the characteristic impedance at its reference plane, a backward component is generally required to satisfy both voltage and current at the boundary. These components are a physical decomposition of the supported solution, not two unrelated saved recordings.

With the source-to-load coordinate x and the stated $e^{j\omega t}$ convention,

$$V(x)=V_0^+e^{-\gamma x}+V_0^-e^{\gamma x},$$

$$I(x)=\frac{V_0^+e^{-\gamma x}-V_0^-e^{\gamma x}}{Z_c}.$$

The minus sign in the reflected current follows its opposite propagation direction. A coefficient referred to the load differs from a ratio formed at another position by propagation factors; name the reference plane before comparing.

## Interpret the special loads

At the load, a matched condition gives zero reflected voltage. An ideal open has $\Gamma_L=+1$ for voltage and zero total load current. An ideal short has $\Gamma_L=-1$ and zero total load voltage. The total field can have nodes and antinodes without indicating energy generation.

## Voltage ratios versus power

For real positive reference impedance in the classical lossless case, squared voltage-wave magnitudes relate directly to separated wave powers. With complex characteristic impedance, use the actual voltage/current and appropriate power definition instead of automatically treating $|\Gamma|^2$ as reflected-power fraction. A passive complex-reference voltage ratio can exceed one without proving an active load.

Try [Reflection Coefficient](/experiments/reflection-coefficient/) or [Standing Waves & VSWR](/experiments/standing-waves-vswr/), keeping the physical domain explicit.
