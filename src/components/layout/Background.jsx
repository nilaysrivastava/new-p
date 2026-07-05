import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

const Background = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* MAIN BACKGROUND */}

      <div
        className="
          fixed
          inset-0
          -z-50
          bg-[#030303]
        "
      />

      {/* TOP RIGHT */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          fixed
          top-[-150px]
          right-[-150px]
          -z-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#b94712]/14
          blur-[140px]
        "
      />

      {/* BOTTOM LEFT */}

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          fixed
          bottom-[-200px]
          left-[-200px]
          -z-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#d88418]/11
          blur-[150px]
        "
      />

      {/* CENTER */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          fixed
          left-1/2
          top-1/2
          -z-40
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#8f2f16]/10
          blur-[130px]
        "
      />

      {/* MOUSE FOLLOW GLOW */}

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        className="
          pointer-events-none
          fixed
          -z-30
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#d66a16]/10
          blur-[120px]
        "
      />

      {/* GRID */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          -z-20
          opacity-[0.025]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(216, 132, 24, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(216, 132, 24, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
};

export default Background;
