---
title: The propagation constant
description: Read attenuation and phase from gamma, keep angular frequency distinct
  from the ohm unit, and know when wavelength and phase velocity are defined.
order: 2
kind: concept
level: Foundation
readingMinutes: 3
related:
- experiments/wave-propagation/
- learn/concepts/characteristic-impedance/
updated: '2026-10-27'
---

## One complex quantity, two effects

The propagation constant $\gamma=\alpha+j\beta$ describes a uniform line's forward phasor factor $e^{-\gamma x}$. The amplitude factor is $e^{-\alpha x}$; the phase factor is $e^{-j\beta x}$. $\alpha$ is measured in Np/m, $\beta$ in rad/m.

At positive frequency, with distributed parameters and consistent branches,

$$\gamma=\sqrt{(R+j\omega L)(G+j\omega C)},\qquad\omega=2\pi f.$$

The lowercase $\omega$ is angular frequency in rad/s. The uppercase $\Omega$ is an electrical resistance/impedance unit; the two symbols must not be interchanged. This site renders both mathematically rather than substituting Latin letters.

## Wavelength and velocity

Where a meaningful positive phase constant is defined,

$$\lambda=\frac{2\pi}{\beta},\qquad v_p=\frac{\omega}{\beta}.$$

For a lossless line with positive constant $L,C$, these reduce to $\beta=\omega\sqrt{LC}$ and $v_p=1/\sqrt{LC}$. A dispersive lossy model needs its actual phase constant. Do not silently divide by an undefined/zero quantity and label the result a measured speed.

## Interpret a phase plot

Wrapped phase can jump by $2\pi$ while the physical progression is continuous. A common time-reference offset from source phase or trigger alignment does not change relative phase versus distance. Use the same physical coordinate and reference plane when comparing instruments with a plot.

The [Wave Propagation experiment](/experiments/wave-propagation/) provides a labelled independent example. The [Distortionless experiment](/experiments/distortionless-transmission-lines/) explains the special condition for phase linearity and constant attenuation under constant coefficients.
