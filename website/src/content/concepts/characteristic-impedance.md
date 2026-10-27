---
title: Characteristic impedance
description: Understand a traveling wave’s voltage-to-current ratio, why it can be
  complex, and why a source resistance is not automatically the same quantity.
order: 1
kind: concept
level: Foundation
readingMinutes: 3
related:
- learn/concepts/rlgc-modeling/
- experiments/reflection-coefficient/
updated: '2026-10-27'
---

## A ratio for a traveling wave

Characteristic impedance $Z_c$ relates voltage and current of a single forward wave on a uniform line. It is not the same as the input impedance of a finite terminated line, a source's internal resistance or a lumped resistor drawn in the workbench.

With peak phasors and $e^{j\omega t}$ convention at a nonsingular point,

$$Z_c=\frac{R+j\omega L}{\gamma},\qquad\gamma=\sqrt{(R+j\omega L)(G+j\omega C)}.$$

Use a branch consistent with physical propagation. For a lossless line with positive $L,C$, $Z_c=\sqrt{L/C}$ is real positive. For general lossy parameters it can be complex and frequency-dependent. $R$ is in Ω/m, $L$ H/m, $G$ S/m and $C$ F/m; the resulting ratio is in $\Omega$.

## An independent simple example

For $L=250$ nH/m and $C=100$ pF/m on a lossless line, $Z_c=50\,\Omega$. Changing frequency alone leaves this value unchanged if those parameters stay constant. Changing the L/C ratio is a different, meaningful way to explore varying real $Z_c$ with fixed-power excitation.

## Do not transfer power shortcuts blindly

Voltage reflection $(Z_L-Z_c)/(Z_L+Z_c)$ can use complex $Z_c$, but a reflected-power fraction is not automatically its squared magnitude. WaveLab's fixed-power dBm source domain requires positive-real reference impedance. Neither $|Z_c|$ nor $\operatorname{Re}Z_c$ is an unannounced replacement for an unsupported complex reference.

Equal $Z_c$ alone also does not establish electrical equivalence of two line sections. Propagation and canonical distributed parameters matter. Study [reflection](/experiments/reflection-coefficient/) and [RLGC modeling](/learn/concepts/rlgc-modeling/) for the necessary distinctions.
