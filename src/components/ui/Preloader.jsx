import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const statusMessages = [
  "INITIALIZING INTERFACE",
  "ALIGNING MODULES",
  "CHECKING THE EDGES",
  "INDEXING PROJECTS",
  "READY",
];

const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      setProgress(current);

      if (current >= 100) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const statusIndex = Math.min(
    statusMessages.length - 1,
    Math.floor(progress / 25)
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-black
        px-5
        font-mono-tech
      "
    >
      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          opacity-35
          [background-image:linear-gradient(rgba(147,197,253,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.045)_1px,transparent_1px)]
          [background-size:56px_56px]
          [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]
        "
      />

      <motion.div
        aria-hidden="true"
        animate={{ y: ["-15vh", "115vh"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        className="
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-blue-300/25
          to-transparent
          shadow-[0_0_18px_rgba(147,197,253,0.14)]
        "
      />

      <div
        className="
          absolute
          left-5
          top-5
          border-l
          border-t
          border-blue-300/20
          w-max
          max-w-[calc(100vw-2.5rem)]
          pl-3
          pt-3
          text-[8px]
          uppercase
          leading-5
          tracking-[0.18em]
          text-slate-400
          sm:left-8
          sm:top-8
          sm:text-[9px]
        "
      >
        <p>PORTFOLIO.OS</p>
        <p>BUILD: 2026</p>
      </div>

      <div
        style={{ right: "1.25rem", bottom: "1.25rem" }}
        className="
          absolute
          border-b
          border-r
          border-blue-300/20
          w-max
          max-w-[calc(100vw-2.5rem)]
          pb-3
          pr-3
          text-right
          text-[8px]
          uppercase
          leading-5
          tracking-[0.18em]
          text-slate-400
          sm:text-[9px]
        "
      >
        <p>MODE: DEVELOPER</p>
        <p>
          STATUS: <span className="text-sky-200">ONLINE</span>
        </p>
      </div>

      <div
        className="
          relative
          z-10
          w-full
          max-w-sm
        "
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative
            mx-auto
            mb-10
            flex
            h-24
            w-24
            items-center
            justify-center
          "
        >
          <motion.div
            aria-hidden="true"
            animate={{
              opacity: [0.2, 0.55, 0.2],
              scale: [0.92, 1.08, 0.92],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="
              absolute
              inset-0
              border
              border-blue-300/20
              bg-blue-300/[0.025]
              shadow-[0_0_36px_rgba(147,197,253,0.14)]
            "
          />
          <div
            aria-hidden="true"
            className="
              absolute
              left-1/2
              top-[-18px]
              h-[132px]
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-blue-300/20
              to-transparent
            "
          />
          <span
            className="
              relative
              text-lg
              font-semibold
              tracking-[0.28em]
              text-sky-100
              [text-shadow:0_0_18px_rgba(147,197,253,0.3)]
            "
          >
            NS
          </span>
        </motion.div>

        <div className="h-5 overflow-hidden text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusMessages[statusIndex]}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="
                text-[10px]
                uppercase
                tracking-[0.22em]
                text-slate-200
              "
            >
              {statusMessages[statusIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="mt-6">
          <div
            className="
              mb-3
              flex
              items-center
              justify-between
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-slate-400
            "
          >
            <span>System Load</span>
            <span className="text-sky-200">
              {progress.toString().padStart(3, "0")}%
            </span>
          </div>

          <div
            className="
              relative
              h-px
              w-full
              overflow-visible
              bg-blue-300/15
            "
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.08, ease: "easeOut" }}
              className="
                h-full
                bg-gradient-to-r
                from-blue-400
                via-blue-300
                to-sky-100
                shadow-[0_0_14px_rgba(147,197,253,0.3)]
              "
            />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-1.5
          "
        >
          {[0, 1, 2, 3, 4].map((item) => (
            <motion.span
              key={item}
              animate={{ opacity: progress >= item * 25 ? 1 : 0.18 }}
              className="h-1 w-1 bg-blue-300"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
