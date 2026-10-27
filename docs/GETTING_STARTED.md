# Getting started

**Preparation preview: there is no public application download or Stable release yet.** The following describes an implemented workflow for an authorized candidate or a separately approved future release. This page is not an instruction to obtain an unofficial installer or redistribute RC5.

1. When a build is officially authorized for your computer, read its supplied license, requirements and notices. Use the normal installer; keep security protections enabled. Current candidate installer consent and ordinary removal qualification remain incomplete.
2. Open RBE WaveLab, then **Experiment Library → Wave Propagation**.
3. Choose **Preconfigured Setup → Start experiment**. Equipment Ready is a different starting mode for assembling supplied components; Empty Setup begins without them.
4. Read the guide and choose **Run**. Built-in lessons use Manual mode. Wait for **Current** before interpreting results.
5. Inspect probe readings. Open the **Oscilloscope**, assign connected measurements to CH1–CH4, and use **Measure** and time/voltage cursors.
6. Open **Plot Studio** for a current supported curve. Read axes, units and validity messages. CSV/PNG export the current permitted graph, not a recorded measurement history.
7. Change a component's physical settings, then explicitly Run again in Manual mode. Moving a symbol or resizing a panel does not change physical line length.
8. Save a `.wavelab` project in a permitted user-writable folder. Reopen it through Open. Manual workbenches restore configuration and require Run again; no saved result recording is implied. `.wavelab-exp` stores portable experiment templates.

**Not Calculated / Run Required** means no result exists. **Outdated** means an existing result no longer matches the configuration. **Invalid Position** requires repositioning a probe on its physical line. Invalid/unresolved readings are not zero measurements. If a save is refused, keep the message and choose another permitted destination; do not disable protection.

See [scientific scope](SCIENTIFIC_SCOPE.md), [requirements](REQUIREMENTS.md) and [release limitations](RELEASE_STATUS.md).
