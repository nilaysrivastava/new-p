import { motion } from "framer-motion";

const RotatingRing = () => {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        inset-[-10px]
        rounded-full
        bg-gradient-to-r
        from-cyan-400
        via-violet-500
        to-pink-500
      "
    />
  );
};

export default RotatingRing;