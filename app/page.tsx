import Shell from "@/components/Shell";

export default function HomePage() {
  return (
    <Shell>
      <div className="max-w-xl space-y-5">
        <div className="text-sm text-[color:var(--muted)]">家榕 jia rong</div>
        <div className="text-sm text-[color:var(--muted)]">est. 2007</div>

        <h1 className="text-lg md:text-xl italic">
          a creative, a designer, and a tinkerer
        </h1>

        <p className="text-sm leading-6 text-white/85">
          Guided by a love for thoughtful, intricate design and the small
          details that make life feel alive.
        </p>

        <p className="text-sm leading-6 text-white/85">
          To me, design isn’t a tool to solve problems, but one to add texture,
          warmth, and a subtle imperfection that give things their soul.
        </p>

        <div className="pt-6 border-t hairline" />

        <div className="h-56 w-full rounded-xl border hairline bg-white/5 overflow-hidden">
          {/* placeholder image area */}
        </div>
      </div>
    </Shell>
  );
}