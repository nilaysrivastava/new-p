import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
      }}
      className="
        fixed
        left-0
        top-0
        z-[100]
        h-[3px]
        w-full
        bg-gradient-to-r
        from-orange-600
        via-orange-400
        to-amber-400
      "
    />
  );
};

export default ScrollProgress;
