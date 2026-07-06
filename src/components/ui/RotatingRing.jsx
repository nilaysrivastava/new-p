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
        from-blue-300
        via-stone-200
        to-blue-300
      "
    />
  );
};

export default RotatingRing;
