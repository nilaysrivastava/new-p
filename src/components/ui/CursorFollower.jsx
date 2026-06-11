import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if ("ontouchstart" in window) return null;

  return (
    <motion.div
      animate={{
        x: position.x - 4,
        y: position.y - 4,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 250,
        mass: 0.5,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-white"
    />
  );
};

export default CursorFollower;