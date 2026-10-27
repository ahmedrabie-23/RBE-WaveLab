---
title: The distributed RLGC model
description: Understand resistance, inductance, conductance and capacitance per length,
  the assumptions of a uniform line and the boundary of supported section chains.
order: 7
kind: concept
level: Foundation
readingMinutes: 3
related:
- experiments/wave-propagation/
- learn/concepts/characteristic-impedance/
updated: '2026-10-27'
---

## Distributed parameters, not four lumped parts

A transmission-line model assigns series resistance $R$ and inductance $L$, plus shunt conductance $G$ and capacitance $C$, per unit length. Small sections collectively support propagation and energy exchange along the line. Their units are Ω/m, H/m, S/m and F/m respectively.

For the uniform positive-frequency phasor model,

$$\frac{dV}{dx}=-(R+j\omega L)I,\qquad\frac{dI}{dx}=-(G+j\omega C)V.$$

The general propagation and characteristic-impedance relations follow from these coupled equations. Keep square-root branches consistent rather than choosing their signs independently.

## Three useful cases

- **Lossless:** $R=G=0$, with positive $L,C$. Then $Z_c=\sqrt{L/C}$ and $\beta=\omega\sqrt{LC}$.
- **General lossy:** retain the full RLGC expressions and interpret generally complex, frequency-dependent quantities.
- **Distortionless constant-parameter case:** $R/L=G/C$, giving balanced loss rates under the stated assumptions. This may still dissipate power.

## Equivalence is physical, not cosmetic

WaveLab supports zero-length lines and supported equivalent canonical chains. Equal characteristic impedance alone does not prove two sections have the same electrical behavior. Propagation and canonical parameters matter. Roundoff-only equivalence criteria must not be widened to accept a physically different section merely because two plotted values look close.

## Modeling boundaries

Real media may have frequency-dependent parameters and additional effects. That general engineering fact is not evidence of an implemented arbitrary cable/skin-effect model. The public scientific scope governs current solver behavior. V1 does not provide arbitrary branched networks or a transient/FMI runtime.

Use [lossy propagation](/experiments/lossy-transmission-lines/) and [result validity](/learn/guides/result-validity/) to connect this model with supported product workflows.
