import { NavLink } from "react-router-dom";
import { Home, BookOpenText, Layers, User } from "lucide-react";

const PAGES = [
  { path: "/", label: "Home", icon: Home },
  { path: "/research", label: "Research & Writing", icon: BookOpenText },
  { path: "/library", label: "Library", icon: Layers },
  { path: "/me", label: "Me", icon: User },
];

function SidebarNav() {
  return (
    <aside
      className="fixed z-40 select-none
      /* Mobile (< 640px): Floating Bottom Capsule Bar */
      bottom-4 left-1/2 -translate-x-1/2 flex-row px-3 py-2 rounded-full
      /* Desktop (≥ 640px): Left Side Vertical Floating Dock */
      sm:bottom-auto sm:left-4 md:left-6 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 sm:flex-col sm:p-2
      flex items-center gap-2 sm:gap-2.5 bg-white/90 backdrop-blur-md border border-neutral-200/90 shadow-xl shadow-neutral-900/10"
    >
      {PAGES.map((page) => {
        const Icon = page.icon;

        return (
          <NavLink
            key={page.path}
            to={page.path}
            className={({ isActive }) =>
              `w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group relative ${
                isActive
                  ? "bg-brand text-white shadow-md shadow-brand/20 scale-105"
                  : "text-neutral-500 hover:text-black hover:bg-neutral-100"
              }`
            }
            aria-label={page.label}
          >
            <Icon size={18} />

            {/* Hover Tooltip (Desktop Only) */}
            <span className="hidden sm:block absolute left-full ml-3 px-2.5 py-1 bg-neutral-900 text-white text-[11px] font-mono rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
              {page.label}
            </span>
          </NavLink>
        );
      })}
    </aside>
  );
}

export { SidebarNav };