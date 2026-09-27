// ESM shim for the locally vendored Mermaid bundle (see conf.py).
// _static/mermaid.min.js is a self-contained IIFE loaded as a classic
// <script> tag; it assigns the library to globalThis.mermaid. This file
// is what sphinxcontrib-mermaid imports (import mermaid from <url>), so it
// re-exports that global. Classic scripts run during parsing while module
// scripts are deferred, so the global is set before this module runs.
export default globalThis.mermaid;
