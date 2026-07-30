import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import ResearchWriting from "./pages/ResearchWriting";
import Library from "./pages/Library";
import Me from "./pages/Me";
import ProjectCaseStudy from "./pages/ProjectCaseStudy"; // 👈 Import Case Study Page

import { CustomCursor } from "./components/CustomCursor";
import { SidebarNav } from "./components/SidebarNav";
import { Mascot } from "./components/Mascot";
import mascotImage from "./assets/mascot.png"; // 👈 Import Mascot Image

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#faf9f5] text-neutral-900 selection:bg-neutral-200 relative overflow-x-hidden">
      <CustomCursor />
      <SidebarNav />
      <Mascot mascotImage={mascotImage} />

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<ResearchWriting />} />
          <Route path="/library" element={<Library />} />
          <Route path="/me" element={<Me />} />
          
          {/* 🚀 Dynamic Case Study Route */}
          <Route path="/project/:projectId" element={<ProjectCaseStudy />} />
          
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}