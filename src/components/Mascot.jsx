import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

function Mascot({ setCurrentPage, mascotImage }) {
  const [isDragging, setIsDragging] = useState(false);

  // Random viewport position generator
  const getRandomPosition = useCallback(() => {
    if (typeof window === "undefined") return { x: 50, y: 500 };
    const maxX = Math.max(40, window.innerWidth - 180);
    const maxY = Math.max(40, window.innerHeight - 180);

    return {
      x: Math.floor(Math.random() * (maxX - 50)) + 50,
      y: Math.floor(Math.random() * (maxY - 50)) + 50,
    };
  }, []);

  const [position, setPosition] = useState(getRandomPosition);

  // Random relocation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setPosition(getRandomPosition());
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isDragging, getRandomPosition]);

  // Click mascot -> Direct to "Me" page
  const handleClick = () => {
    if (!isDragging) {
      setCurrentPage("me");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setTimeout(() => setIsDragging(false), 150)}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      onClick={handleClick}
      className="fixed left-0 top-0 z-50 font-mono select-none cursor-pointer flex items-center justify-center group"
    >
      {/* Mascot Transparent Character */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 filter drop-shadow-2xl transition-transform duration-300 group-hover:scale-110">
        {mascotImage ? (
          <img
            src={mascotImage}
            alt="Mascot Avatar"
            className="w-full h-full object-contain pointer-events-none"
          />
        ) : (
          <div className="text-4xl pointer-events-none">🤖</div>
        )}
      </div>

      {/* Hover Tooltip */}
      <span className="absolute left-full ml-2 px-3 py-1 bg-neutral-900 text-white text-[11px] font-mono rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 whitespace-nowrap shadow-lg pointer-events-none -translate-x-2 group-hover:translate-x-0">
        About Me 👤
      </span>
    </motion.div>
  );
}

export { Mascot };