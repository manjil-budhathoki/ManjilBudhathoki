import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CustomCursor } from "../components/CustomCursor";
import { SidebarNav } from "../components/SidebarNav";
import { Mascot } from "../components/Mascot";

export default function RootLayout() {
  const { pathname } = useLocation();

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#faf9f5] text-neutral-900 selection:bg-neutral-200 relative overflow-x-hidden">
      <CustomCursor />

      {/* Persistent Navigation */}
      <SidebarNav />
      <Mascot />

      {/* Main Active Page Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <Outlet />
      </main>
    </div>
  );
}