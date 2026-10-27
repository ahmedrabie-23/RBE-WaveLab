---
title: Distortionless Transmission Lines
description: Derive the Heaviside condition for constant distributed parameters and
  distinguish a lossy distortionless line from a lossless line.
order: 5
kind: experiment
level: Intermediate
readingMinutes: 4
related:
- learn/concepts/propagation-constant/
- experiments/lossy-transmission-lines/
- learn/guides/result-validity/
updated: '2026-10-27'
image: distortionless-transmission-lines
---

## What you will learn

- State the Heaviside condition with its parameter and frequency assumptions.
- Explain why distortionless does not necessarily mean lossless.
- Separate a general theoretical waveform property from WaveLab V1's CW simulation scope.

## Prerequisites and physical interpretation

Review propagation constant and RLGC losses. In the ideal constant-parameter model, a distortionless forward wave has frequency-independent attenuation and a phase constant proportional to angular frequency. That gives a common delay across the modelled band. This general theoretical property does not turn the desktop application into a transient solver.

## Condition, derivation and domain

Assume uniform frequency-independent $R,L,G,C$, with $L,C>0$, $R,G\ge 0$. Heaviside's condition is

$$\frac{R}{L}=\frac{G}{C}=k,\qquad k\ge 0.$$

Both ratios have units $\mathrm s^{-1}$. Then

$$\gamma=\sqrt{LC}\,(k+j\omega),\qquad Z_c=\sqrt{L/C},$$

$$\alpha=k\sqrt{LC}=\sqrt{RG},\qquad\beta=\omega\sqrt{LC},\qquad v_p=\frac 1{\sqrt{LC}}.$$

For the stated constant-parameter model, attenuation is frequency-independent and the characteristic impedance is real positive. If $k>0$, power is dissipated: the line is lossy **and** distortionless. $R=G=0$ is the lossless special case. Merely finding a numerical equality at one isolated frequency in arbitrary frequency-dependent parameters does not prove broadband distortionless propagation.

| Parameter | Meaning | Unit |
|---|---|---|
| $R/L,G/C,k$ | Matched distributed loss rates | $\mathrm s^{-1}$ |
| $\alpha$ | Amplitude attenuation | Np/m |
| $\beta$ | Phase constant | rad/m |
| $v_p$ | Phase velocity in this ideal model | m/s |

## Independent analytical example

Not a captured application output: $L=250$ nH/m, $C=100$ pF/m, $R=1\,\Omega/\mathrm m$ and $G=0.4$ mS/m give $R/L=G/C=4\times 10^6\,\mathrm s^{-1}$. Thus $Z_c=50\,\Omega$ and $\alpha=0.02$ Np/m. At 100 MHz, $\beta=\pi$ rad/m; over 10 m a forward amplitude changes by $e^{-0.2}=0.81873075$. Attenuation is present even though the line meets the ideal distortionless condition.

## Perform it in WaveLab

1. Open **Distortionless Transmission Lines** and select the supported starting setup.
2. Inspect all four distributed parameters and the selected model. Verify the condition rather than relying on its label.
3. Explicitly Run and wait for Current. Inspect actual valid voltage/current/phase observations.
4. Compare supported frequency or parameter curves. A constant-RLGC distortionless sweep alone does not vary $Z_c$; changing suitable parameters is a different investigation.
5. To deliberately study a non-Heaviside case, select the general Lossy model before changing a distributed parameter inconsistently. A falsely labelled Distortionless configuration must reject rather than silently calculate a different model.

## Expected results and common mistakes

Under the stated assumptions $\beta$ changes linearly with frequency while $\alpha$ does not. A matched forward magnitude decays along the line. Do not describe a visible CW screenshot as evidence that arbitrary pulses have been propagated. Do not replace physical equivalence tolerances with loose scientific-reference tolerances: electrically different sections must still be rejected.

## Frequently asked questions

**Is distortionless the same as zero loss?** No. Nonzero $R,G$ can satisfy the condition and attenuate the wave.

**Why is my Distortionless setup invalid?** Check units, positivity and the parameter condition; do not simply widen a tolerance to accept different physics.

**Does WaveLab show a pulse retaining its shape?** V1 does not provide that transient experiment. The broader theoretical property is explained separately from implemented CW behavior.

## References and scope

The workflow follows WaveLab's [authoritative scientific scope](/scientific-scope/) and [getting-started guide](/learn/getting-started/). Additional theory is cross-checked against David Staelin's original MIT [TEM transmission-line chapter](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/resources/mit6_013s09_chap07/) and [dissipative-line discussion](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/resources/mit6_013s09_chap08/). Explanations and diagrams here are original; textbook figures and substantial third-party prose are not reproduced. The general theory does not expand the application's implemented scope.
