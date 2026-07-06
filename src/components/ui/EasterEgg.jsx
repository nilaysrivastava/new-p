import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EasterEgg = () => {
  const [visible, setVisible] = useState(false);
  const presses = useRef([]);
  const hideTimer = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      const isTyping =
        target instanceof HTMLElement &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName));

      if (isTyping || event.repeat || event.key.toLowerCase() !== "d") return;

      const now = Date.now();
      presses.current = [...presses.current, now]
        .filter((time) => now - time < 2500)
        .slice(-5);

      if (presses.current.length === 5) {
        presses.current = [];
        setVisible(true);
        window.clearTimeout(hideTimer.current);
        hideTimer.current = window.setTimeout(() => setVisible(false), 3200);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
          className="
            fixed
            bottom-6
            left-1/2
            z-[10000]
            w-[calc(100%-2rem)]
            max-w-md
            -translate-x-1/2
            border
            border-blue-300/25
            bg-[#070A0F]/95
            px-5
            py-4
            text-center
            font-mono-tech
            text-[10px]
            tracking-[0.08em]
            text-sky-100
            shadow-[0_0_30px_rgba(147,197,253,0.14)]
            backdrop-blur-md
          "
        >
          Developer mode enabled. Interface remains stable.
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
