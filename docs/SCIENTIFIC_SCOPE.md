# Scientific scope

RBE WaveLab V1 models supported positive-frequency, steady-state continuous-wave transmission-line experiments. It uses an analytical distributed RLGC model and reconstructs time-domain CW instrument waveforms from the physical solution. The Oscilloscope is not a transient/pulse solver or a physical data-acquisition device.

## Supported study areas

- Propagation, phase, wavelength, reflections and standing waves on lossless, lossy and distortionless lines.
- Matched, ideal open-circuit, ideal short-circuit and supported RLC load conditions.
- Voltage/current phasors, available steady-state measurements, relevant power quantities and scientific plots within their validity domains.
- Zero-length lines and supported chains of identical/electrically equivalent canonical RLGC sections. Equal characteristic impedance alone does not make physically different sections equivalent; arbitrary non-equivalent junction networks are not accepted.
- Source/load settings with explicit physical meanings. Characteristic impedance can be complex; fixed-power dBm excitation is limited to its documented positive-real impedance domain rather than silently treating a complex impedance as a real matched-power reference.

The five built-in experiments are Wave Propagation, Reflection Coefficient, Standing Waves & VSWR, Lossy Transmission Lines and Distortionless Transmission Lines. Experiment Builder supports educational templates and controlled reveal of protected theoretical variables. Hidden Throughout Exercise remains hidden after Reveal Results; legitimate instrument readings and protected theoretical values are distinct.

## Interpret results carefully

Respect validity, singular/OFF/configuration, scope valid-frequency/bandwidth/trigger, waveform reconstruction and plot rendering-limit messages. No invalid point should be interpreted as a fabricated zero. Manual comparisons do not secretly run another Manual workbench.

Only current permitted results are exported. V1 does not provide measurement recording, simulation-run history, PDF report generation, a general branched-circuit solver, a transient solver or an FMI runtime. These are boundaries, not promises for a later version. Simulated results do not certify real-world engineering outcomes; evaluate important conclusions independently.
