// Ambient declarations for UI components to allow hybrid typing while we migrate to strong types.
// These declarations keep the build green by treating UI components as permissively typed modules.

declare module "@/components/ui/*" {
  const content: any;
  export default content;
}

declare module "@/components/ui" {
  const content: any;
  export default content;
}
