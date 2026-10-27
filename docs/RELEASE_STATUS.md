# Release status and current limitations

**V1.0.0 Stable is not released.** The latest internal candidate is **1.0.0-rc.5**. This documentation/community preparation does not publish RC5, an installer, a release tag, a GitHub Release or a website. There is no working application download in this repository.

Implemented scientific, instrument, plot and educational workflows have candidate qualification evidence on the current Windows 11 x64 host. That evidence is not a guarantee for every computer or platform, and private build scripts/test records are not published here.

## Remaining qualification

- The actual independent installer license display/Agree/Decline workflow is not yet verified. The exact owner-approved terms are integrated; wording approval is distinct from execution testing.
- A historical ordinary uninstall left program resources behind. Source-level cleanup hardening has not demonstrated a successful independent ordinary uninstall/reinstall and data-retention cycle. The issue is **not verified resolved**.
- Missing/old/broken WebView2 states, clean-machine disconnected provisioning, installer upgrade and real Internet-origin trust behavior have not all been qualified. Including a full runtime installer is a design choice, not evidence of a passed clean-host test.
- The candidate is unsigned; there is no Authenticode Verified Publisher claim. Keep protection enabled. Do not treat a matching checksum as proof of authenticity or harmlessness.
- Windows 10, other platforms, actual Windows DPI transitions and multi-monitor behavior are not qualified. Forced renderer scaling at 100%/150% is different from OS DPI testing.
- There is no automatic updater. Project/template compatibility checks do not prove an installer upgrade/downgrade lifecycle.

Unexecuted tests and owner risk acceptance are not successful test results. Stable release and installer publication need separate approval after the mandatory gates are addressed. [Roadmap](../ROADMAP.md), [Requirements](REQUIREMENTS.md), [Support](../SUPPORT.md).
