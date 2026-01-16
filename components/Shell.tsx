import SidebarBrand from "@/components/SidebarBrand";
import NavTree from "@/components/NavTree";
import { NAV } from "@/lib/nav";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Desktop 3 columns */}
      <div className="hidden md:grid grid-cols-[220px_240px_1fr] gap-10 px-12 py-10">
        <aside className="pt-2">
          <SidebarBrand />
        </aside>

        <aside className="pt-2">
          <div className="glass-soft p-5">
            <NavTree items={NAV} />
          </div>
        </aside>

        <main className="pt-2">{children}</main>
      </div>

      {/* Mobile single column content (nav handled by topbar) */}
      <div className="md:hidden px-5 pt-20 pb-10">
        <main>{children}</main>
      </div>
    </div>
  );
}