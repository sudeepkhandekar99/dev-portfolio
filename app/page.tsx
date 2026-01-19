import Shell from "@/components/Shell";
import DraggablePhotoStack from "@/components/DraggablePhotoPile";
import DraggablePhotoPile from "@/components/DraggablePhotoPile";


export default function HomePage() {
  return (
    <Shell>
      <div className="glass max-w-xl p-7 md:p-8 space-y-5">
        <h1 className="text-lg md:text-xl italic">
          नमस्ते
        </h1>

        {/* <div className="text-sm text-[color:var(--muted)]">sudeep khandekar</div> */}
        <div className="text-sm text-[color:var(--muted)]">welcome to my little corner on the internet</div>

        <p className="text-sm leading-6 text-white/85">
          Guided by a love for thoughtful, intricate design and the small details
          that make life feel alive.
        </p>

        <p className="text-sm leading-6 text-white/85">
          To me, design isn’t a tool to solve problems, but one to add texture,
          warmth, and a subtle imperfection that give things their soul.
        </p>

        <div className="pt-6 border-t hairline" />

        {/* <div className="h-56 w-full rounded-2xl border hairline bg-white/5 overflow-hidden" /> */}
        {/* the draggable photo section */}
        <DraggablePhotoPile />
      </div>
    </Shell>
  );
}