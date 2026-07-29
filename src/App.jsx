import Home from "./pages/Home";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-neutral-900 selection:bg-neutral-200 relative overflow-x-hidden">
      <CustomCursor />
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <Home />
      </div>
    </div>
  );
}