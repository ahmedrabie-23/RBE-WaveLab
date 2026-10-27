---
title: Wave Propagation
description: Follow phase along a matched transmission line and connect frequency,
  wavelength, phase velocity and real instrument observations.
order: 1
kind: experiment
level: Foundation
readingMinutes: 5
related:
- learn/concepts/propagation-constant/
- learn/guides/oscilloscope/
- experiments/reflection-coefficient/
updated: '2026-10-27'
image: wave-propagation
---

## What you will learn

- Relate a continuous traveling wave to phase change between two physical positions.
- Distinguish frequency in time from wavelength along the line.
- Use a shared scope time reference and a spatial plot to test an explanation.

## Before you start

Know sinusoidal voltage, frequency and basic complex-number notation. Use an authorized WaveLab build and the **Wave Propagation** recipe. The public application release is still being prepared; this page is not a download offer.

## Physical interpretation

A transmission line distributes electric and magnetic energy along its length. A source's variation does not appear everywhere with zero delay. In the matched case a forward wave can be examined without a load-reflected component. The waveform has the same frequency at each position, but a different phase.

On a uniform passive line, $\gamma=\alpha+j\beta$. The forward voltage phasor is

$$V^+(x)=V_0^+e^{-\gamma x}.$$

Its amplitude falls as $e^{-\alpha x}$ and its phase changes by $-\beta\Delta x$ between positions. This sign follows the stated coordinate/phasor convention; a different shared time reference does not change the relative progression.

## Equations with their assumptions

For a lossless line with $R=G=0$ and positive $L,C$,

$$Z_c=\sqrt{L/C},\qquad \beta=\omega\sqrt{LC},\qquad v_p=\frac{\omega}{\beta}=\frac 1{\sqrt{LC}},\qquad \lambda=\frac{2\pi}{\beta}=\frac{v_p}{f}.$$

For a general lossy model, use its actual phase constant where defined. The lossless $1/\sqrt{LC}$ shortcut must not silently replace a dispersive result.

## Notation and units

Distance $x$ increases from the source toward a load at $x=\ell$. These explanations use peak phasors with $v(x,t)=\operatorname{Re}\{V(x)e^{j\omega t}\}$ and $\omega=2\pi f$, $f>0$. The lowercase $\omega$ is angular frequency in rad/s; uppercase $\Omega$ means ohms. A scope trigger or a sine-versus-cosine reference can shift the common time origin without changing a physical relative phase.

| Quantity | Meaning | Unit |
|---|---|---|
| $R,L$ | Series resistance and inductance per length | $\Omega/\mathrm m$, H/m |
| $G,C$ | Shunt conductance and capacitance per length | S/m, F/m |
| $\alpha,\beta$ | Amplitude attenuation and phase constant | Np/m, rad/m |
| $Z_c$ | Characteristic impedance | $\Omega$ |

## An independent analytical example

This is a calculation for explanation, **not a captured WaveLab measurement**. Let $L=250$ nH/m, $C=100$ pF/m and $f=100$ MHz, with a lossless matched line. Then $Z_c=50\,\Omega$, $v_p=2\times 10^8$ m/s, $\beta=\pi$ rad/m and $\lambda=2$ m. Two points separated by 0.5 m differ by $-\pi/2$ rad under the stated convention. RMS and peak are different quantities; a 1 V peak sinusoid is about 0.707107 V RMS.

## Perform it in WaveLab

1. Open **Experiment Library → Wave Propagation**.
2. Choose **Preconfigured Setup → Start experiment**. Equipment Ready requires assembly; Empty Setup starts without equipment.
3. Inspect the supported source, line and load settings and the physical probe positions. The screenshot is an actual candidate view, not proof that every number equals the independent example above.
4. Select **Run** and wait for **Current**. Open the Oscilloscope and assign connected probes to channels sharing one time origin.
5. Use Measure/phase or cursors where valid. Inspect a spatial voltage-phase curve in Plot Studio.
6. Predict the effect of frequency or position, change one physical setting, explicitly Run again and compare.

## Expected interpretation and typical mistakes

A matched lossless example shows phase progression without amplitude attenuation. Do not interpret wrapping from $+\pi$ to $-\pi$ as a discontinuous physical jump. Moving a component symbol does not change physical line length. A zero signal does not supply a meaningful measured frequency/phase. Respect scope valid-frequency, bandwidth and waveform-resolution diagnostics.

## Frequently asked questions

**Why do the channels look shifted?** Different physical positions can have different phase; use the same trigger/time origin before comparing.

**Does a frequency sweep always change $Z_c$?** No. A constant-RLGC lossless line has frequency-independent $\sqrt{L/C}$, so change appropriate physical parameters to investigate changing impedance.

**Is this a pulse experiment?** No. WaveLab V1 reconstructs supported steady-state CW waveforms; it is not a transient solver.

## References and scope

The workflow follows WaveLab's [authoritative scientific scope](/scientific-scope/) and [getting-started guide](/learn/getting-started/). Additional theory is cross-checked against David Staelin's original MIT [TEM transmission-line chapter](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/resources/mit6_013s09_chap07/) and [dissipative-line discussion](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/resources/mit6_013s09_chap08/). Explanations and diagrams here are original; textbook figures and substantial third-party prose are not reproduced. The general theory does not expand the application's implemented scope.
