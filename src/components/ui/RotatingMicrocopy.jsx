import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const RotatingMicrocopy = ({
  messages,
  interval = 3200,
  className = "",
}) => {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || messages.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, messages.length, reduceMotion]);

  return (
    <span className={`relative inline-flex overflow-hidden ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={messages[index]}
          initial={reduceMotion ? false : { opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -5 }}
          transition={{ duration: 0.22 }}
          className="block whitespace-nowrap"
        >
          {messages[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingMicrocopy;
