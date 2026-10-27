---
title: Standing Waves & VSWR
description: Connect interference to voltage maxima and minima, and apply the classical
  VSWR formula only within its lossless real-reference domain.
order: 3
kind: experiment
level: Foundation
readingMinutes: 4
related:
- learn/concepts/standing-waves/
- experiments/reflection-coefficient/
- learn/guides/plot-studio/
updated: '2026-10-27'
image: standing-waves-vswr
---

## What you will learn

- Explain the spatial pattern formed by forward and reflected waves.
- Relate maxima/minima to interference rather than independent sources of energy.
- State the assumptions behind classical VSWR before calculating it.

## Prerequisites and physical interpretation

Review the voltage reflection coefficient and phasor addition. A snapshot in time is different from the envelope of voltage amplitude along the line. With reflection, points of constructive and destructive interference appear. On a lossless line the standing-wave envelope is stationary even while the instantaneous voltage oscillates.

## Classical equations and domain

Use a **uniform lossless line**, real positive $Z_c$, a passive termination and a nonzero incident wave. The two wave amplitudes do not attenuate along that line. Then

$$|V|_{\max}=|V^+|(1+|\Gamma_L|),\qquad |V|_{\min}=|V^+|(1-|\Gamma_L|),$$

$$\mathrm{VSWR}=\frac{|V|_{\max}}{|V|_{\min}}=\frac{1+|\Gamma_L|}{1-|\Gamma_L|},\qquad 0\le|\Gamma_L|<1.$$

A matched case gives 1. Ideal total reflection gives a zero minimum and an infinite classical ratio; this is a limit, not an ordinary finite reading. Adjacent maxima are $\lambda/2$ apart; a neighboring maximum and minimum are $\lambda/4$ apart for this simple lossless pattern.

For a general lossy line, the forward and backward amplitudes vary with position and the observed envelope depends on the selected interval. Do not present the shortcut above as a universal measured finite-interval maximum/minimum ratio. For complex $Z_c$, do not assume a passive load bounds the voltage reflection magnitude by 1. A zero/OFF signal also does not define a meaningful measured 0/0 ratio.

| Quantity | Meaning | Unit |
|---|---|---|
| $\lvert V\rvert_{\max},\lvert V\rvert_{\min}$ | Voltage-amplitude envelope extrema | V |
| $\lambda$ | Spatial wavelength | m |
| VSWR | Classical maximum/minimum ratio | dimensionless |

## Independent analytical example

Not an application measurement: take the real lossless 50 Ω line and 100 Ω load, so $|\Gamma_L|=1/3$. With 1 V peak incident, maxima are 4/3 V and minima 2/3 V; VSWR is 2. For a 2 m wavelength, neighboring maxima are 1 m apart. The voltage-amplitude envelope and RMS envelope have the same ratio for consistent sinusoids; do not mix a peak maximum with an RMS minimum.

## Perform it in WaveLab

1. Open **Standing Waves & VSWR** with a supported start mode.
2. Verify the line/loss/reference assumptions of the experiment, then explicitly Run and wait for Current.
3. Inspect the current spatial voltage-magnitude/envelope curve and its valid extrema. Use Plot Studio cursors and actual native results.
4. Compare probe/scope values at selected physical positions; account for whether each readout is peak, RMS or phasor magnitude.
5. Change the load, predict whether the contrast increases or decreases, then Run again.
6. If investigating losses, switch to the appropriate model and interpretation rather than silently keeping a lossless VSWR shortcut.

## Expected results and typical mistakes

Stronger reflection gives greater lossless envelope contrast. A finite line or selected plot interval might not include a full maximum and minimum pair; sampling a small interval does not establish the global classical ratio. Instantaneous signed voltage minima are not envelope minima. An invalid/unsupported scalar should remain a labelled status, not become 0 or 1.

## Frequently asked questions

**Do the standing-wave nodes travel along the line?** The pure lossless standing-wave pattern has fixed node positions; instantaneous amplitude changes in time.

**Is infinite VSWR a software overflow?** It can represent the ideal total-reflection limit. The interface's validity/limit status determines how it is presented.

**Can I use the same formula on any lossy screenshot?** No. State the physical domain and what interval/result is actually being measured.

## References and scope

The workflow follows WaveLab's [authoritative scientific scope](/scientific-scope/) and [getting-started guide](/learn/getting-started/). Additional theory is cross-checked against David Staelin's original MIT [TEM transmission-line chapter](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/resources/mit6_013s09_chap07/) and [dissipative-line discussion](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/resources/mit6_013s09_chap08/). Explanations and diagrams here are original; textbook figures and substantial third-party prose are not reproduced. The general theory does not expand the application's implemented scope.
