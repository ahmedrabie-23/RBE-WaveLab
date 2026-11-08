# Platform and requirements

Verified operating environment: **Windows 11 x64**, English interface. Windows 10, ARM64-native execution, Linux and macOS are not qualified release targets.

The application uses Microsoft Edge WebView2 Runtime for its desktop interface. End users do not need Node.js, Rust, Visual Studio, Dymola or a mandatory application account. A compatible maintained runtime, a permitted current-user installation location and writable project storage are needed. Managed-computer policies may require administrator assistance; do not bypass them.

A workspace of at least 900 × 600 logical pixels is intended; larger windows are more comfortable for instruments and plots. No measured universal minimum RAM, disk-space or performance guarantee is announced. Allow room for the application, installer/runtime provisioning if needed, your files and normal Windows headroom.

Calculations, built-in lessons and local save/open work offline. A full WebView2 Standalone is embedded in the frozen V1.0.0 installer, but disconnected clean-host provisioning is not yet qualified. Windows and WebView2 may communicate independently when connected under their own terms. GitHub community access requires internet connectivity.

The V1.0.0 installer and accompanying materials are available in the [official GitHub Release](https://github.com/ahmedrabie-23/RBE-WaveLab/releases/tag/v1.0.0). The website remains unpublished. Read [release status](RELEASE_STATUS.md) before interpreting platform or lifecycle claims.

Published frozen V1.0.0 installer: RBE_WaveLab_1.0.0_x64-setup.exe. Its normal installation was not executed: NOT TESTED — Owner-Accepted Risk. Current-host extracted-payload execution does not verify installation, provisioning or removal. Public availability is governed by the actual approved Release and current release manifest, not this filename alone.
