"use client";

import Link from "next/link";
import type { NavItem } from "@/lib/nav";
import { useState } from "react";

function Node({
  item,
  depth = 0,
  onNavigate,
}: {
  item: NavItem;
  depth?: number;
  onNavigate?: () => void;
}) {
  const hasChildren = item.children && item.children.length > 0;
  const [open, setOpen] = useState(true);

  const padding = depth === 0 ? "pl-0" : "pl-3";

  return (
    <div className="select-none">
      <div className={`flex items-center gap-2 ${padding}`}>
        {hasChildren ? (
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-left text-sm text-[color:var(--muted)] hover:text-white transition focus-ring"
            aria-expanded={open}
          >
            {item.title}
          </button>
        ) : item.href ? (
          <Link
            href={item.href}
            onClick={onNavigate}
            className="text-sm text-[color:var(--muted)] hover:text-white transition focus-ring"
          >
            {item.title}
          </Link>
        ) : (
          <div className="text-sm text-[color:var(--muted)]">{item.title}</div>
        )}
      </div>

      {hasChildren && open && (
        <div className="mt-2 space-y-2">
          {item.children!.map((c) => (
            <div key={c.title} className="ml-2">
              <Node item={c} depth={depth + 1} onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NavTree({
  items,
  onNavigate,
}: {
  items: NavItem[];
  onNavigate?: () => void;
}) {
  return (
    <nav className="space-y-4">
      {items.map((item) => (
        <Node key={item.title} item={item} onNavigate={onNavigate} />
      ))}
    </nav>
  );
}