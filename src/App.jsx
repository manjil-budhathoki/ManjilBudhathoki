import Home from "./pages/Home";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-neutral-900 selection:bg-neutral-200 relative overflow-x-hidden">
      <CustomCursor />
      {/* Container expands smoothly for desktop viewports */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <Home />
      </div>
    </div>
  );
}