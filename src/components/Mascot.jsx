import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Mascot({ mascotImage }) {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);

  // Random position generator within screen bounds
  const getRandomPosition = useCallback(() => {
    if (typeof window === "undefined") return { x: 50, y: 500 };
    const maxX = Math.max(40, window.innerWidth - 160);
    const maxY = Math.max(40, window.innerHeight - 160);

    return {
      x: Math.floor(Math.random() * (maxX - 50)) + 50,
      y: Math.floor(Math.random() * (maxY - 50)) + 50,
    };
  }, []);

  const [position, setPosition] = useState(getRandomPosition);

  // Relocate mascot randomly every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setPosition(getRandomPosition());
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [isDragging, getRandomPosition]);

  // Click -> Navigate to "Me" page
  const handleClick = () => {
    if (!isDragging) {
      navigate("/me");
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
      className="fixed left-0 top-0 z-50 select-none cursor-pointer flex items-center justify-center group"
      title="Click to view About Me"
    >
      {/* Transparent Mascot Character with Floating Effect */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-16 h-16 sm:w-20 sm:h-20 filter drop-shadow-xl transition-transform duration-300 group-hover:scale-110 flex items-center justify-center"
      >
        {mascotImage ? (
          <img
            src={mascotImage}
            alt="Mascot Avatar"
            className="w-full h-full object-contain pointer-events-none"
          />
        ) : (
          <div className="text-3xl pointer-events-none">🤖</div>
        )}
      </motion.div>
    </motion.div>
  );
}

export { Mascot };