import { motion, useReducedMotion } from "framer-motion";

const SectionTransition = ({ number, label, word }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
      className="
        relative
        z-10
        h-28
        w-full
        overflow-hidden
        border-y
        border-blue-300/10
        bg-black/20
        sm:h-36
        lg:h-40
      "
    >
      <div
        className="
          relative
          mx-auto
          flex
          h-full
          w-full
          max-w-[1600px]
          items-center
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <motion.span
          variants={{
            hidden: { opacity: 0, x: -12 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            z-10
            font-mono-tech
            text-xl
            font-medium
            tracking-[-0.02em]
            text-sky-200
            sm:text-2xl
          "
        >
          {number}
        </motion.span>

        <motion.div
          variants={{
            hidden: { scaleX: 0, opacity: 0 },
            visible: { scaleX: 1, opacity: 1 },
          }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            z-10
            mx-5
            h-[2px]
            min-w-8
            flex-1
            origin-left
            overflow-hidden
            bg-blue-300/15
            sm:mx-8
            lg:mx-12
          "
        >
          <motion.span
            animate={reduceMotion ? undefined : { x: ["-130%", "520%"] }}
            transition={{
              duration: 5.2,
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: "linear",
            }}
            className="
              absolute
              inset-y-0
              left-0
              w-1/5
              bg-gradient-to-r
              from-transparent
              via-blue-300/55
              to-transparent
            "
          />
        </motion.div>

        <motion.span
          variants={{
            hidden: { opacity: 0, x: 12 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="
            relative
            z-10
            max-w-[44vw]
            text-right
            font-mono-tech
            text-[10px]
            font-medium
            uppercase
            leading-4
            tracking-[0.14em]
            text-slate-300
            sm:max-w-none
            sm:whitespace-nowrap
            sm:text-xs
            sm:tracking-[0.18em]
            lg:text-sm
          "
        >
          {label}
        </motion.span>

        <motion.span
          aria-hidden="true"
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 0.055, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="
            pointer-events-none
            absolute
            right-[14%]
            top-1/2
            -translate-y-1/2
            font-display
            text-[clamp(3.5rem,8vw,7.5rem)]
            font-semibold
            leading-none
            tracking-[-0.06em]
            text-sky-100
            sm:right-[18%]
          "
        >
          {word}
        </motion.span>
      </div>
    </motion.div>
  );
};

export default SectionTransition;
