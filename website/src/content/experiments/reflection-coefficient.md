---
title: Reflection Coefficient
description: Explain impedance matching, ideal open and short loads, and the distinction
  between voltage reflection and reflected power.
order: 2
kind: experiment
level: Foundation
readingMinutes: 4
related:
- learn/concepts/incident-and-reflected-waves/
- learn/concepts/matching/
- experiments/standing-waves-vswr/
updated: '2026-10-27'
image: reflection-coefficient
---

## What you will learn

- Predict the sign/phase of a load-reflected voltage wave.
- Distinguish a characteristic-impedance match from an arbitrary source/load resistance choice.
- Keep complex-reference voltage reflection separate from a power-wave claim.

## Prerequisites and physical picture

Start with forward propagation and phasors. At a load, voltage and current must satisfy the termination boundary. A reflected component supplies the difference between that boundary and a forward traveling wave alone. Reflection does not mean the source signal was recorded or played backward.

## Load boundary and equations

For a uniform line at the load plane, using a consistent characteristic-impedance branch and a nonzero incident amplitude,

$$V_L=V_L^++V_L^-,\qquad I_L=\frac{V_L^+-V_L^-}{Z_c}.$$

The **voltage** reflection coefficient is

$$\Gamma_L=\frac{V_L^-}{V_L^+}=\frac{Z_L-Z_c}{Z_L+Z_c},\qquad Z_L+Z_c\ne 0.$$

This voltage relation remains meaningful with complex $Z_c$ at a nonsingular point. It is not automatically a power-wave normalization. In particular, $|\Gamma_L|^2$ is not a universal reflected-power fraction for complex $Z_c$, and a passive load need not have voltage $|\Gamma_L|\le 1$ for a complex reference.

At the load, $Z_L=Z_c$ gives $\Gamma_L=0$. Ideal open and short limits give $+1$ and $-1$ respectively for voltage. Current reflection has the opposite sign relative to the forward-current convention. A singular denominator is a diagnostic, not an instruction to display a fabricated zero.

| Parameter | Meaning | Unit |
|---|---|---|
| $Z_L,Z_c$ | Load and characteristic impedance | $\Omega$ |
| $\Gamma_L$ | Voltage-wave ratio at the load | dimensionless |
| $V_L^+,V_L^-$ | Incident/reflected peak voltage phasors | V |

## Independent analytical example

Not a captured application result: for a real positive $Z_c=50\,\Omega$ and $Z_L=100\,\Omega$ on a lossless line, $\Gamma_L=1/3$. With 1 V peak incident at the load, the reflected peak is $1/3$ V and total peak there is $4/3$ V. In this **real-reference lossless** case the reflected/incident power ratio is $1/9$. Do not transfer that last shortcut to a general complex-reference case.

## Perform it in WaveLab

1. Select **Reflection Coefficient**, choose Preconfigured Setup and start.
2. Inspect the supported line and load contract. Begin with a simple lossless real-impedance reference if testing the classical examples.
3. Explicitly Run in Manual mode and wait for Current. Inspect load-adjacent voltage/probe data and an available incident/reflected/current curve.
4. Predict a matched case, then supported ideal open and short cases. Change one termination at a time and Run again.
5. Check physical phase/sign, actual validity diagnostics and reference plane. A scope trigger can change the common displayed time origin.

## Expected results and mistakes to avoid

A match removes the load-reflected voltage component. Open and short voltage reflections differ in sign; their total voltage/current boundary behavior is different. The reflection observed away from the load includes propagation to that reference plane. Do not compare load-plane coefficients to another position without accounting for it.

Matching a complex $Z_L$ to $Z_c$ is voltage-wave matching, not an unconditional maximum-available-power/conjugate-match statement. Fixed-power dBm excitation in WaveLab has its own positive-real domain restriction; do not replace a complex impedance by its magnitude.

## Frequently asked questions

**Does $|\Gamma|>1$ prove an active load?** Not for a general complex voltage reference. Evaluate the actual power and reference definition.

**Does zero measured voltage always mean a short?** No. An interference node, an OFF/zero signal or invalid measurement has a different interpretation.

**Can I assemble any junction network?** No. The documented supported chain/equivalence rules apply; equal $Z_c$ alone does not make different sections equivalent.

## References and scope

The workflow follows WaveLab's [authoritative scientific scope](/scientific-scope/) and [getting-started guide](/learn/getting-started/). Additional theory is cross-checked against David Staelin's original MIT [TEM transmission-line chapter](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/resources/mit6_013s09_chap07/) and [dissipative-line discussion](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-spring-2009/resources/mit6_013s09_chap08/). Explanations and diagrams here are original; textbook figures and substantial third-party prose are not reproduced. The general theory does not expand the application's implemented scope.
