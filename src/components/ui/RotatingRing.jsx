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
        from-orange-500
        via-amber-400
        to-orange-700
      "
    />
  );
};

export default RotatingRing;
