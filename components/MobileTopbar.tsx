"use client";

import { useState } from "react";
import NavTree from "@/components/NavTree";
import { NAV } from "@/lib/nav";

export default function MobileTopbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="md:hidden fixed top-0 left-0 right-0 z-20 px-4 py-3 flex items-center justify-between">
        <div className="text-sm">
          <span className="opacity-90">With Love, </span>
          <span className="opacity-90">Jia</span>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="h-9 w-9 grid place-items-center rounded-md border hairline bg-white/5"
          aria-label="Open menu"
        >
          <div className="space-y-1">
            <div className="h-[2px] w-5 bg-white/80" />
            <div className="h-[2px] w-5 bg-white/80" />
            <div className="h-[2px] w-5 bg-white/80" />
          </div>
        </button>
      </header>

      {/* overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-30">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[78%] max-w-sm bg-[#040632]/90 border-l hairline p-5">
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-white/90">Menu</div>
              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 grid place-items-center rounded-md border hairline bg-white/5"
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