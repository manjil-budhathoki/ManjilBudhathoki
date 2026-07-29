import { useState } from "react";
import Home from "./pages/Home";
import ResearchWriting from "./pages/ResearchWriting";
import Library from "./pages/Library";
import Me from "./pages/Me";
import { CustomCursor } from "./components/CustomCursor";
import { SidebarNav } from "./components/SidebarNav";
import { Mascot } from "./components/Mascot";
import mascotImage from "./assets/mascot.png"; 

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-[#faf9f5] text-neutral-900 selection:bg-neutral-200 relative overflow-x-hidden">
      <CustomCursor />
      
      {/* Icon Navigation Sidebar */}
      <SidebarNav currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Draggable Teleporting Mascot -> Navigates to 'Me' on click */}
      <Mascot 
        setCurrentPage={setCurrentPage}
        mascotImage={mascotImage}
      />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {currentPage === "home" && <Home />}
        {currentPage === "research" && <ResearchWriting />}
        {currentPage === "library" && <Library />}
        {currentPage === "me" && <Me />}
      </div>
    </div>
  );
}