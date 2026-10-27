<img src="assets/rbe-wavelab-icon.png" alt="RBE WaveLab icon" width="80" height="80">

# RBE WaveLab

A free desktop virtual laboratory for learning transmission-line and communication engineering through interactive simulations.

**Pre-release community preparation. V1.0.0 has not been released.** The latest internal candidate is **1.0.0-rc.5**. This repository provides public documentation and community resources; no application installer or download is currently offered. Independent installer consent and ordinary uninstall/reinstall verification are still pending.

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

Use a preconfigured example, assemble supplied equipment, or start an empty setup. [Getting started](docs/GETTING_STARTED.md) describes the intended first experiment when an authorized build is available.

## Platform and release status

The initial target is **Windows 11 x64**, with an English interface and Microsoft Edge WebView2 Runtime. End users do not need Rust, Node.js, Visual Studio or Dymola. Calculations and local learning/project workflows run offline; GitHub community participation requires internet access and GitHub's usual account requirements.

Current-host candidate checks cover real Tauri/WebView2 operation and forced 100%/150% renderer scaling. They do not establish Windows 10 compatibility, actual Windows DPI transitions, every runtime installation state or a successful independent ordinary uninstall. The candidate is unsigned. Read [Requirements](docs/REQUIREMENTS.md) and [Release status and limitations](docs/RELEASE_STATUS.md).

## Free to use; application source remains private

RBE WaveLab is **proprietary freeware**, not open-source software. All V1.x releases and updates remain free for personal, educational, academic, institutional, research and commercial use under the [approved license](LICENSE.txt). The original unchanged installer may be redistributed without charging for the proprietary application/installer, while preserving required notices and third-party rights. This permission is not an announcement that an installer is available here.

Copyright holder/licensor: **Ahmed Rabie**, an individual. **RBE** is the display brand. Public availability of these documents does not grant access to the proprietary application source. Independent third-party components retain their own licenses and required covered-source rights. [Copyright and licensing](COPYRIGHT.md).

No mandatory application account or application telemetry is introduced. Feedback is optional. Windows, WebView2 and GitHub have separate behavior and terms. [Privacy](docs/PRIVACY.md).

## Documentation and community

- [Getting started](docs/GETTING_STARTED.md)
- [Scientific scope](docs/SCIENTIFIC_SCOPE.md)
- [Requirements](docs/REQUIREMENTS.md)
- [Release status](docs/RELEASE_STATUS.md) and [Roadmap](ROADMAP.md)
- [Support](SUPPORT.md), [Contributing](CONTRIBUTING.md), [Code of conduct](CODE_OF_CONDUCT.md) and [Security reporting](SECURITY.md)

Once the repository and community features are published, use [Issues](https://github.com/ahmedrabie-23/RBE-WaveLab/issues) for bugs and [Discussions](https://github.com/ahmedrabie-23/RBE-WaveLab/discussions) for questions, learning and suggestions. These feature links are planned destinations; their presence in this prepared documentation is not a claim that the online features have been enabled.

General owner contact and collaboration: [Ahmed Rabie on LinkedIn](https://www.linkedin.com/in/ahmedrabie23). Support is community-based and best-effort, with no guaranteed response or repair time. Never post confidential projects, credentials or proprietary engineering data.
