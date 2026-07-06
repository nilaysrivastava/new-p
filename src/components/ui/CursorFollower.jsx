import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
      setVisible(true);
    };

    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
    };
  }, []);

  if ("ontouchstart" in window) return null;

  return (
    <motion.div
      animate={{
        x: position.x - 28,
        y: position.y - 28,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        x: {
          type: "spring",
          damping: 28,
          stiffness: 320,
          mass: 0.45,
        },
        y: {
          type: "spring",
          damping: 28,
          stiffness: 320,
          mass: 0.45,
        },
        opacity: {
          duration: 0.12,
        },
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        h-14
        w-14
        rounded-full
        bg-white
        mix-blend-difference
        will-change-transform
      "
    />
  );
};

export default CursorFollower;
