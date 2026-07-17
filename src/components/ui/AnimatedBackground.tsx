export default function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[var(--bg)]" />
      <div className="soft-grid absolute inset-0 opacity-70" />
      <div className="ambient-shape -left-48 -top-64" />
      <div className="ambient-shape ambient-shape-secondary" />
    </div>
  );
}
