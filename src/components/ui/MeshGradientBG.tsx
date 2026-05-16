"use client";

export default function MeshGradientBG() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[var(--bg)]" />
      <div className="soft-grid absolute inset-0 opacity-70" />
      <div className="absolute -inset-x-16 -top-40 h-[38rem] bg-[radial-gradient(ellipse_at_50%_0%,rgba(125,211,252,0.18),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_44%,rgba(5,6,10,0.58)_100%)]" />
    </div>
  );
}
