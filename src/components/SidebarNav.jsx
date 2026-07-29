import { Home, BookOpenText, Layers, User } from "lucide-react";

const PAGES = [
  { id: "home", label: "Home", icon: Home },
  { id: "research", label: "Research & Writing", icon: BookOpenText },
  { id: "library", label: "Library", icon: Layers },
  { id: "me", label: "Me", icon: User },
];

function SidebarNav({ currentPage, setCurrentPage }) {
  return (
    <aside className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-2.5 bg-white/85 backdrop-blur-md p-2 rounded-full border border-neutral-200/80 shadow-xl shadow-neutral-900/5">
      {PAGES.map((page) => {
        const Icon = page.icon;
        const isActive = currentPage === page.id;

        return (
          <button
            key={page.id}
            onClick={() => {
              setCurrentPage(page.id);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group relative ${
              isActive
                ? "bg-brand text-white shadow-xs scale-105"
                : "text-neutral-500 hover:text-black hover:bg-neutral-100"
            }`}
            aria-label={page.label}
          >
            <Icon size={18} />

            {/* Hover Tooltip */}
            <span className="absolute left-full ml-3 px-2.5 py-1 bg-neutral-900 text-white text-[11px] font-mono rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-sm">
              {page.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
}

export { SidebarNav };