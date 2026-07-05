import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";

const particles = Array.from({ length: 50 }).map((_, i) => ({
  id: i,

  x: Math.random() * 100,
  y: Math.random() * 100,

  size: Math.random() * 3 + 1,

  opacity: Math.random() * 0.25 + 0.4,

  depth: Math.random() * 3 + 1,
}));

const StardustParticle = ({
  particle,
  smoothX,
  smoothY,
}) => {
  const parallaxX = useTransform(
    smoothX,
    (value) => value / particle.depth,
  );
  const parallaxY = useTransform(
    smoothY,
    (value) => value / particle.depth,
  );

  return (
    <motion.div
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        x: parallaxX,
        y: parallaxY,
      }}
      className="
        absolute
      "
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [
            particle.opacity,
            particle.opacity + 0.1,
            particle.opacity,
          ],
        }}
        transition={{
          duration: 6 + particle.id,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          width: `${particle.size}px`,
          height: `${particle.size}px`,
        }}
        className="
          rounded-full
          bg-white
        "
      />
    </motion.div>
  );
};

const Stardust = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 25,
    damping: 30,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 25,
    damping: 30,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set((e.clientX - window.innerWidth / 2) * 0.08);
      mouseY.set((e.clientY - window.innerHeight / 2) * 0.08);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
      "
    >
      {particles.map((particle) => (
        <StardustParticle
          key={particle.id}
          particle={particle}
          smoothX={smoothX}
          smoothY={smoothY}
        />
      ))}
    </div>
  );
};

export default Stardust;
