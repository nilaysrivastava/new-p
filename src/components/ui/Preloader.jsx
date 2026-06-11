import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;

      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 4.5,
      }}
      className="
        fixed
        inset-0
        z-[9999]

        flex
        flex-col
        items-center
        justify-center

        bg-[#060816]
      "
    >
      {/* Logo */}

      <h1
        className="
          text-6xl
          md:text-7xl
          font-bold

          bg-gradient-to-r
          from-cyan-400
          via-violet-400
          to-pink-400

          bg-clip-text
          text-transparent
        "
      >
        Nilay Srivastava
      </h1>

      {/* Roles */}

      <p
        className="
          mt-4

          text-sm
          md:text-base

          text-slate-400

          tracking-wide
        "
      >
        Developer • AI/ML Engineer • Researcher
      </p>

      {/* Loader */}

      <div
        className="
          mt-10

          w-[260px]
          md:w-[320px]
        "
      >
        <div
          className="
            h-[8px]
            overflow-hidden
            rounded-full
            bg-white/10
          "
        >
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              ease: "easeOut",
            }}
            className="
              h-full

              bg-gradient-to-r
              from-cyan-400
              via-violet-400
              to-pink-400

              shadow-[0_0_20px_rgba(139,92,246,0.5)]
            "
          />
        </div>

        <div
          className="
            mt-3
            flex
            items-center
            justify-between

            text-xs
            text-slate-400
          "
        >
          <span>Loading Portfolio...</span>

          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;