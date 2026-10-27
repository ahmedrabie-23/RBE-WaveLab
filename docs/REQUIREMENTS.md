# Platform and requirements

Initial target: **Windows 11 x64**, English interface. Windows 10, ARM64-native execution, Linux and macOS are not qualified release targets.

The application uses Microsoft Edge WebView2 Runtime for its desktop interface. End users do not need Node.js, Rust, Visual Studio, Dymola or a mandatory application account. A compatible maintained runtime, a permitted current-user installation location and writable project storage are needed. Managed-computer policies may require administrator assistance; do not bypass them.

A workspace of at least 900 × 600 logical pixels is intended; larger windows are more comfortable for instruments and plots. No measured universal minimum RAM, disk-space or performance guarantee is announced. Allow room for the application, installer/runtime provisioning if needed, your files and normal Windows headroom.

Calculations, built-in lessons and local save/open work offline. A full WebView2 Standalone is included in the current installer design, but disconnected clean-host provisioning is not yet qualified. Windows and WebView2 may communicate independently when connected under their own terms. GitHub community access requires internet connectivity.

There is no public installer offered by this prepared repository. Read [release status](RELEASE_STATUS.md) before interpreting platform or lifecycle claims.
