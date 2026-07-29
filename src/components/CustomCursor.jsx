import { useEffect, useState } from "react";
import { useMousePosition } from "../hooks/useMousePosition";

function CustomCursor() {
  const mousePos = useMousePosition();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e) => {
      // Check if mouse is over clickable elements
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.classList.contains("cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  return (
    <div
      style={{
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
      }}
      className={`fixed pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/40 bg-brand/10 transition-transform duration-150 ease-out z-40 hidden md:block ${
        isHovered ? "w-10 h-10 scale-125 bg-brand/20 border-brand/60" : "w-6 h-6 scale-100"
      }`}
    />
  );
}

export { CustomCursor };