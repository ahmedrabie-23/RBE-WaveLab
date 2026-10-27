---
title: Lossy Transmission Lines
description: Use distributed RLGC to explain attenuation, phase and complex characteristic
  impedance without confusing amplitude loss with a reflected-power shortcut.
order: 4
kind: experiment
level: Intermediate
readingMinutes: 5
related:
- learn/concepts/rlgc-modeling/
- learn/concepts/attenuation/
- experiments/distortionless-transmission-lines/
updated: '2026-10-27'
image: lossy-transmission-lines
---

## What you will learn

- Connect series and shunt loss terms to propagation along a uniform line.
- Read attenuation, phase and a generally complex characteristic impedance.
- Compare a forward traveling-wave attenuation example with total voltage in a reflected experiment.

## Prerequisites and physical picture

Know the lossless propagation model and complex phasors. $R$ represents distributed series resistance and $G$ distributed shunt conductance. The stored-energy terms are $L$ and $C$. Together they determine both attenuation and phase; a lossy line is not merely a lossless curve multiplied by an arbitrary display scale.

## General equations

For nonnegative $R,G$, positive $L,C$ and positive frequency at a nonsingular point,

$$\gamma=\alpha+j\beta=\sqrt{(R+j\omega L)(G+j\omega C)},\qquad Z_c=\frac{R+j\omega L}{\gamma},\qquad \omega=2\pi f.$$

Choose physically consistent branches; do not independently pick incompatible square-root signs. The usual passive forward-propagation branch has nonnegative attenuation. The telegrapher equations are

$$\frac{dV}{dx}=-(R+j\omega L)I,\qquad\frac{dI}{dx}=-(G+j\omega C)V.$$

The forward-wave amplitude over distance $\ell$ changes by $e^{-\alpha\ell}$. Its positive attenuation expressed in dB is

$$A_{\mathrm{dB}}=20\log_{10}\!\left(\frac{|V^+(0)|}{|V^+(\ell)|}\right)=\frac{20}{\ln 10}\alpha\ell.$$

This is a forward-wave amplitude statement. Reflected total voltage can have local maxima/minima; it is not guaranteed to decrease monotonically. A pure forward wave's average power is proportional to $e^{-2\alpha x}$ for a uniform line and consistent reference, but general total power must be evaluated from the actual voltage/current solution.

## Notation and units

Distance $x$ increases from the source toward a load at $x=\ell$. These explanations use peak phasors with $v(x,t)=\operatorname{Re}\{V(x)e^{j\omega t}\}$ and $\omega=2\pi f$, $f>0$. The lowercase $\omega$ is angular frequency in rad/s; uppercase $\Omega$ means ohms. A scope trigger or a sine-versus-cosine reference can shift the common time origin without changing a physical relative phase.

| Quantity | Meaning | Unit |
|---|---|---|
| $R,L$ | Series resistance and inductance per length | $\Omega/\mathrm m$, H/m |
| $G,C$ | Shunt conductance and capacitance per length | S/m, F/m |
| $\alpha,\beta$ | Amplitude attenuation and phase constant | Np/m, rad/m |
| $Z_c$ | Characteristic impedance | $\Omega$ |

## Independent analytical example

Not an application measurement: choose $R=1\,\Omega/\mathrm m$, $L=250$ nH/m, $G=0.2$ mS/m, $C=100$ pF/m and $f=100$ MHz. Direct complex calculation gives approximately $\alpha=0.0149999810$ Np/m, $\beta=3.1415966324$ rad/m and $Z_c=50.0003166-j 0.0795762\,\Omega$. Over 10 m the forward-amplitude ratio is 0.86070814, or about 1.30288 dB attenuation. These numbers are independent analytical values, not labels extracted from the product image.

## Perform it in WaveLab

1. Start **Lossy Transmission Lines** and inspect each RLGC value and its per-length unit.
2. Select a supported source/load configuration; do not use fixed-power dBm outside its positive-real impedance domain.
3. Explicitly Run, wait for Current and inspect valid voltage/current curves and scope/probe measurements.
4. Change one loss parameter, predict the effect, Run again and compare like quantities at the same positions.
5. Use frequency or supported parameter curves only within the actual model and analysis domain. Read invalid-point and reconstruction limits.

## Expected interpretation and common mistakes

Greater attenuation suppresses a forward amplitude, but matching and reflection still affect the total distribution. Per-metre conductance is not a lumped resistor value. Do not convert ohms per metre into ohms without including physical length. Constant RLGC is an assumed model; real cable parameters can depend on frequency, but the website must not invent an unimplemented skin-effect model.

## Frequently asked questions

**Can a lossy line also be distortionless?** Yes, when the appropriate Heaviside assumptions hold.

**Can I use $\sqrt{L/C}$ for every lossy line?** No. Use the complete complex expression unless a valid simplifying condition is stated.

**Does a local voltage increase imply energy gain?** Not necessarily. Reflected-wave interference can change local voltage amplitude without an active medium.

## References and scope

The workflow follows WaveLab's [authoritative scientific scope](/scientific-scope/) and [getting-started guide](/learn/getting-started/). Additional theory is cross-checked against David Staelin's original MIT [TEM transmission-line chapter](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/resources/mit6_013s09_chap07/) and [dissipative-line discussion](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/resources/mit6_013s09_chap08/). Explanations and diagrams here are original; textbook figures and substantial third-party prose are not reproduced. The general theory does not expand the application's implemented scope.
