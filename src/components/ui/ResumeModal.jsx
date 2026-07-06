import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaDownload, FaXmark } from "react-icons/fa6";

const RESUME_URL = "/NilaySrivastava_Resume.pdf";

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const openModal = () => {
      previousFocusRef.current = document.activeElement;
      setIsOpen(true);
    };

    window.addEventListener("open-resume-modal", openModal);
    return () => window.removeEventListener("open-resume-modal", openModal);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus?.();
    };
  }, [isOpen]);

  const closeModal = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
          className="
            fixed
            inset-0
            z-[11000]
            flex
            items-center
            justify-center
            bg-black/80
            p-2
            backdrop-blur-md
            sm:p-5
          "
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
            initial={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.985 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.99 }
            }
            transition={{ duration: reduceMotion ? 0.01 : 0.28 }}
            onMouseDown={(event) => event.stopPropagation()}
            className="
              flex
              h-[94dvh]
              w-[calc(100vw-1rem)]
              max-w-[1400px]
              flex-col
              overflow-hidden
              rounded-sm
              border
              border-blue-300/20
              bg-[#070A0F]
              shadow-[0_0_42px_rgba(147,197,253,0.12)]
              sm:h-[88vh]
              sm:w-[90vw]
            "
          >
            <header
              className="
                flex
                min-h-16
                flex-wrap
                items-center
                gap-3
                border-b
                border-blue-300/15
                px-4
                py-3
                sm:flex-nowrap
                sm:px-5
              "
            >
              <div className="min-w-0 flex-1">
                <h2
                  className="
                    font-mono-tech
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-sky-100
                    sm:text-sm
                  "
                >
                  Resume Preview
                </h2>
                <p
                  className="
                    mt-1
                    font-mono-tech
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    text-slate-400
                  "
                >
                  PDF · Nilay Srivastava
                </p>
              </div>

              <a
                href={RESUME_URL}
                download="Nilay_Srivastava_Resume.pdf"
                data-cursor-hint="download PDF"
                className="
                  inline-flex
                  min-h-10
                  items-center
                  gap-2
                  border
                  border-blue-300/35
                  bg-black/30
                  px-4
                  font-mono-tech
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.12em]
                  text-sky-100
                  transition-all
                  duration-300
                  hover:border-blue-300/70
                  hover:bg-blue-300/[0.06]
                  hover:shadow-[0_0_18px_rgba(147,197,253,0.12)]
                "
              >
                <FaDownload aria-hidden="true" />
                Download Resume
              </a>

              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Close resume preview"
                onClick={closeModal}
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-white/15
                  bg-transparent
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-blue-300/55
                  hover:text-sky-100
                "
              >
                <FaXmark aria-hidden="true" />
              </button>
            </header>

            <div
              className="
                min-h-0
                flex-1
                bg-black
                p-1.5
                sm:p-3
              "
            >
              <object
                data={RESUME_URL}
                type="application/pdf"
                aria-label="Nilay Srivastava resume PDF"
                className="
                  h-full
                  w-full
                  border
                  border-blue-300/15
                  bg-[#05070a]
                "
              >
                <div
                  className="
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                    gap-4
                    px-6
                    text-center
                  "
                >
                  <p
                    className="
                      max-w-md
                      font-mono-tech
                      text-xs
                      leading-6
                      text-slate-300
                    "
                  >
                    Unable to preview the PDF here. You can still download it.
                  </p>
                  <a
                    href={RESUME_URL}
                    download="Nilay_Srivastava_Resume.pdf"
                    className="
                      border
                      border-blue-300/35
                      px-4
                      py-3
                      font-mono-tech
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-sky-100
                    "
                  >
                    Download Resume
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
