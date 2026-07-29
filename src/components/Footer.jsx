import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function Footer() {
  const [time, setTime] = useState("");

  // Live clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-neutral-200/80 pt-8 pb-12 w-full text-xs font-mono text-neutral-500">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: Minimal Copyright */}
        <div>
          © {new Date().getFullYear()} Manjil Budhathoki
        </div>

        {/* Center: Live Local Time */}
        <div className="flex items-center gap-2 text-neutral-600">
          <span>Kathmandu, Nepal</span>
          <span>·</span>
          <span className="tabular-nums font-medium text-neutral-900">
            {time || "12:00:00"} NST
          </span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 hover:text-black transition-colors cursor-pointer group"
        >
          <span>Back to top</span>
          <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}

export { Footer };