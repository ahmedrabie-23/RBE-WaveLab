---
title: Attenuation along a transmission line
description: Relate exponential forward-amplitude decay, nepers and decibels while
  keeping reflected total voltage and real power distinct.
order: 6
kind: concept
level: Foundation
readingMinutes: 3
related:
- experiments/wave-propagation/
- learn/concepts/characteristic-impedance/
updated: '2026-10-27'
---

## Amplitude loss per unit distance

The real part of propagation constant is $\alpha$, in Np/m. A uniform line's forward voltage-amplitude factor over distance $\ell$ is $e^{-\alpha\ell}$. This describes a traveling-wave component, not a guarantee that every total voltage reading decreases monotonically when reflections are present.

The positive forward-amplitude attenuation in decibels is

$$A_{\mathrm{dB}}=\frac{20}{\ln 10}\alpha\ell\approx 8.68589\alpha\ell.$$

The 20 factor belongs to an amplitude ratio. For a uniform isolated forward component, power has an $e^{-2\alpha\ell}$ dependence with consistent reference. General total real power comes from voltage and current, not a shortcut that discards interference or complex impedance.

## An independent numerical illustration

If $\alpha=0.02$ Np/m and $\ell=10$ m, the forward-amplitude ratio is $e^{-0.2}\approx 0.81873075$, corresponding to about 1.73718 dB attenuation. This is an analytical illustration, not a measured WaveLab screenshot. Check whether a displayed quantity is peak voltage, RMS voltage, magnitude or power before comparing it.

## Loss is not necessarily dispersion

A line can attenuate and still satisfy the ideal constant-parameter distortionless condition. Conversely, arbitrary lossy parameters can make phase velocity and impedance frequency-dependent. Do not describe every loss as distortion, or every distortionless line as lossless.

The [Lossy Transmission Lines experiment](/experiments/lossy-transmission-lines/) uses the complete RLGC relations. The [Distortionless experiment](/experiments/distortionless-transmission-lines/) shows the special balance. Per-length units matter: use actual physical length, not the symbol's size on screen.
