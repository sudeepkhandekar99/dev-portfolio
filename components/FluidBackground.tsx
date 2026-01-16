export default function FluidBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 liquid-gradient" />
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}