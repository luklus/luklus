// Kept as a compatibility shim for already-running Nuxt dev servers. No code
// imports Markdown files with `?raw`; a restart will regenerate auto-imports.
declare module '*?raw' {
  const content: string
  export default content
}
