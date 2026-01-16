"use client";

import { useState } from "react";
import NavTree from "@/components/NavTree";
import { NAV } from "@/lib/nav";

export default function MobileTopbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="md:hidden fixed top-3 left-3 right-3 z-20">
        <div className="glass-soft px-4 py-3 flex items-center justify-between">
          <div className="text-sm">
            <span className="opacity-90">With Love, </span>
            <span className="opacity-90">Jia</span>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="h-9 w-9 grid place-items-center rounded-md border hairline bg-white/5 focus-ring"
            aria-label="Open menu"
          >
            <div className="space-y-1">
              <div className="h-[2px] w-5 bg-white/80" />
              <div className="h-[2px] w-5 bg-white/80" />
              <div className="h-[2px] w-5 bg-white/80" />
            </div>
          </button>
        </div>
      </header>

      {open && (
        <div className="md:hidden fixed inset-0 z-30">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-3 top-3 bottom-3 w-[78%] max-w-sm glass p-5">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-white/90">Menu</div>
              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 grid place-items-center rounded-md border hairline bg-white/5 focus-ring"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <NavTree items={NAV} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}