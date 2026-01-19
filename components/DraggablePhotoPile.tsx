"use client";

import * as React from "react";
import { motion } from "motion/react";

type Photo = {
  id: string;
  src: string;
  alt: string;
  initial: { x: number; y: number; r: number };
};

function PhotoCard({
  photo,
  constraintRef,
  bringToFront,
  zIndex,
}: {
  photo: Photo;
  constraintRef: React.RefObject<HTMLDivElement | null>;
  bringToFront: (id: string) => void;
  zIndex: number;
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 cursor-grab active:cursor-grabbing select-none"
      style={{
        zIndex,
        x: photo.initial.x,
        y: photo.initial.y,
        rotate: photo.initial.r,
        translateX: "-50%",
        translateY: "-50%",
      }}
      whileTap={{ scale: 1.03 }}
      drag
      dragConstraints={constraintRef}
      dragElastic={0.12}
      dragMomentum={false}
      onPointerDown={() => bringToFront(photo.id)}
    >
      {/* “polaroid” frame */}
      <div className="rounded-2xl bg-white/90 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-black/10">
        {/* subtle stacked sheets behind */}
        <div className="relative">
          <div className="absolute -inset-2 -z-10 rotate-[2deg] rounded-2xl bg-white/35" />
          <div className="absolute -inset-3 -z-10 -rotate-[2deg] rounded-2xl bg-white/25" />

          <img
            src={photo.src}
            alt={photo.alt}
            className="h-52 w-44 rounded-xl object-cover ring-1 ring-black/10"
            draggable={false}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function DraggablePhotoPile() {
  const constraintRef = React.useRef<HTMLDivElement | null>(null);

  // Put your images in /public/photos/*
  const photos: Photo[] = React.useMemo(
    () => [
      { id: "1", src: "/photos/p1.jpg", alt: "Photo 1", initial: { x: -130, y: -20, r: -10 } },
      { id: "2", src: "/photos/p2.jpg", alt: "Photo 2", initial: { x: -60, y: 40, r: 6 } },
      { id: "3", src: "/photos/p3.jpg", alt: "Photo 3", initial: { x: 10, y: -35, r: 2 } },
      { id: "4", src: "/photos/p4.jpg", alt: "Photo 4", initial: { x: 70, y: 20, r: -4 } },
      { id: "5", src: "/photos/p5.jpg", alt: "Photo 5", initial: { x: 130, y: -20, r: -6 } },
    ],
    []
  );

  // z-index manager: last clicked goes top
  const [order, setOrder] = React.useState<string[]>(photos.map((p) => p.id));
  const bringToFront = (id: string) =>
    setOrder((prev) => [...prev.filter((x) => x !== id), id]);

  return (
    <div className="glass-soft rounded-3xl border hairline p-4 md:p-6">
      <div
        ref={constraintRef}
        className="relative h-[420px] w-full overflow-hidden rounded-3xl bg-white/[0.04] ring-1 ring-white/10"
      >
        {/* soft spotlight */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_45%_35%,rgba(255,255,255,0.12),transparent_60%)]" />

        {order.map((id, idx) => {
          const p = photos.find((x) => x.id === id)!;
          return (
            <PhotoCard
              key={p.id}
              photo={p}
              constraintRef={constraintRef}
              bringToFront={bringToFront}
              zIndex={10 + idx}
            />
          );
        })}
      </div>
    </div>
  );
}