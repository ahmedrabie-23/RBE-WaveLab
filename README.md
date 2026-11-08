<img src="assets/rbe-wavelab-icon.png" alt="RBE WaveLab icon" width="80" height="80">

# RBE WaveLab

A free desktop virtual laboratory for learning transmission-line and communication engineering through interactive simulations.

**RBE WaveLab V1.0.0 is published.** The [official GitHub Release](https://github.com/ahmedrabie-23/RBE-WaveLab/releases/tag/v1.0.0), ID 438495818, was published on 2026-11-08 at 20:55:53 UTC, targeting public website/documentation commit 3f86a9c4671322d73ff5c8f9b694617adb4203b6. The official website is not yet published; its direct installer CTA remains inactive in this local preparation candidate. Final Stable installation and Q05/Q06 RC5 uninstall/reinstallation are **NOT TESTED — Owner-Accepted Risk**. Acceptance of risk is not test success; installation/removal is not fully qualified.

## Explore transmission-line behavior

RBE WaveLab helps engineering students, educators and engineers connect a source, transmission line and load, change physical parameters, and examine the resulting voltages, currents, propagation and reflections.

Implemented capabilities exercised in candidate qualification include:

- Analytical distributed **RLGC** models for lossless, lossy and distortionless lines, with supported source/load contracts and validity diagnostics.
- Interactive workbenches with physical connections, component editors, voltage probes, and **Auto / Manual** calculation. Manual workbenches calculate only after an explicit Run.
- A four-channel **Oscilloscope** with reconstructed steady-state voltage waveforms, numerical measurements, trigger controls, and time/voltage cursors.
- **Plot Studio** for current spatial, time, frequency and supported parameter curves, scientific axes/cursors, comparisons and current CSV/PNG export.
- An **Experiment Library**, guided educational workflows and **Experiment Builder**, including instructor-controlled theoretical-result visibility.
- Local project/template save and reopen using `.wavelab` and `.wavelab-exp`, with validated migration of supported earlier formats.

These are simulated readings within the documented analytical model, not acquisition from physical laboratory instruments. See [Scientific scope](docs/SCIENTIFIC_SCOPE.md) for boundaries.

## Five guided experiments

1. Wave Propagation
2. Reflection Coefficient
3. Standing Waves & VSWR
4. Lossy Transmission Lines
5. Distortionless Transmission Lines

Use a preconfigured example, assemble supplied equipment, or start an empty setup. [Getting started](docs/GETTING_STARTED.md) describes the first experiment using the official release.

## Platform and release status

The verified operating environment is **Windows 11 x64**, with an English interface and Microsoft Edge WebView2 Runtime. End users do not need Rust, Node.js, Visual Studio or Dymola. Calculations and local learning/project workflows run offline; GitHub community participation requires internet access and GitHub's usual account requirements.

Current-host candidate checks cover real Tauri/WebView2 operation and forced 100%/150% renderer scaling. They do not establish Windows 10 compatibility, actual Windows DPI transitions, every runtime installation state or a successful independent ordinary uninstall. The V1.0.0 installer is unsigned. Read [Requirements](docs/REQUIREMENTS.md) and [Release status and limitations](docs/RELEASE_STATUS.md).

## Free to use; application source remains private

RBE WaveLab is **proprietary freeware**, not open-source software. All V1.x releases and updates remain free for personal, educational, academic, institutional, research and commercial use under the [approved license](LICENSE.txt). The original unchanged installer may be redistributed without charging for the proprietary application/installer, while preserving required notices and third-party rights. Use the original installer and accompanying materials from the official GitHub Release; the license remains the controlling text.

Copyright holder/licensor: **Ahmed Rabie**, an individual. **RBE** is the display brand. Public availability of these documents does not grant access to the proprietary application source. Independent third-party components retain their own licenses and required covered-source rights. [Copyright and licensing](COPYRIGHT.md).

No mandatory application account or application telemetry is introduced. Feedback is optional. Windows, WebView2 and GitHub have separate behavior and terms. [Privacy](docs/PRIVACY.md).

## Documentation and community

- [Getting started](docs/GETTING_STARTED.md)
- [Scientific scope](docs/SCIENTIFIC_SCOPE.md)
- [Requirements](docs/REQUIREMENTS.md)
- [Release status](docs/RELEASE_STATUS.md) and [Roadmap](ROADMAP.md)
- [Support](SUPPORT.md), [Contributing](CONTRIBUTING.md), [Code of conduct](CODE_OF_CONDUCT.md) and [Security reporting](SECURITY.md)

Use [Issues](https://github.com/ahmedrabie-23/RBE-WaveLab/issues) for bugs and [Discussions](https://github.com/ahmedrabie-23/RBE-WaveLab/discussions) for questions, learning and suggestions. Issues and Discussions are enabled for this public community repository.

General owner contact and collaboration: [Ahmed Rabie on LinkedIn](https://www.linkedin.com/in/ahmedrabie23). Support is community-based and best-effort, with no guaranteed response or repair time. Never post confidential projects, credentials or proprietary engineering data.

## Public repository archives

GitHub-generated Source code (zip/tar.gz) archives contain this public documentation/branding/website tree. They do not contain the proprietary desktop application source, do not install WaveLab and are not substitutes for the exact approved Windows installer. Public website source remains subject to its separate notices and independent component rights.
