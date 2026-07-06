import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", id: "home" },
  // { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = links.map((link) =>
      document.getElementById(link.id),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.45,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          border-b
          transition-colors
          duration-500
          ${
            scrolled
              ? "border-blue-300/25 bg-black/90 backdrop-blur-xl"
              : "border-white/15 bg-black/35 backdrop-blur-sm"
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            h-[72px]
            w-full
            max-w-[1600px]
            items-stretch
            px-5
            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              flex
              items-center
              border-r
              border-white/15
              pr-6
              sm:pr-8
            "
          >
            <motion.button
              type="button"
              onClick={() => scrollToSection("home")}
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.96 }}
              className="
                group
                relative
                cursor-pointer
                font-mono-tech
                text-base
                font-semibold
                tracking-[0.18em]
                text-white
              "
            >
              NS
              <span
                className="
                  absolute
                  -right-2
                  top-0
                  h-1
                  w-1
                  bg-blue-300
                  transition-transform
                  duration-300
                  group-hover:scale-150
                "
              />
            </motion.button>
          </div>

          <nav
            className="
              ml-auto
              hidden
              h-full
              items-stretch
              md:flex
            "
          >
            {links.map((link, index) => {
              const isActive = active === link.id;

              return (
                <motion.button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="
                    group
                    relative
                    flex
                    min-w-[104px]
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    border-l
                    border-white/10
                    px-4
                    font-mono-tech
                    text-[11px]
                    uppercase
                    tracking-[0.14em]
                    transition-colors
                    duration-300
                    last:border-r
                    hover:text-blue-300
                    lg:min-w-[124px]
                    lg:px-6
                  "
                >
                  <span
                    className={`
                      text-[9px]
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-sky-200"
                          : "text-white/35 group-hover:text-blue-300"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`
                      transition-colors
                      duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-white/65 group-hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </span>

                  <span
                    className="
                      absolute
                      bottom-0
                      left-3
                      right-3
                      h-px
                      origin-center
                      scale-x-0
                      bg-blue-300
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-x-100
                    "
                  />

                  {isActive && (
                    <motion.span
                      layoutId="active-nav-line"
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 34,
                      }}
                      className="
                        absolute
                        bottom-0
                        left-3
                        right-3
                        h-px
                        bg-blue-300
                        shadow-[0_0_12px_rgba(231,91,22,0.65)]
                      "
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          <div
            className="
              ml-4
              hidden
              items-center
              border-l
              border-white/15
              pl-5
              lg:flex
            "
            aria-label="Available"
            title="Available"
          >
            <span className="relative flex h-2 w-2">
              <motion.span
                animate={{
                  opacity: [0.15, 0, 0.15],
                  scale: [1, 2.4, 1],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  inset-0
                  bg-blue-300
                "
              />
              <span
                className="
                  relative
                  h-2
                  w-2
                  bg-stone-200
                "
              />
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="
              ml-auto
              flex
              cursor-pointer
              items-center
              border-l
              border-white/15
              pl-6
              text-white
              transition-colors
              duration-300
              hover:text-sky-200
              md:hidden
            "
          >
            <FaBars size={18} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              fixed
              inset-0
              z-[60]
              flex
              min-h-screen
              flex-col
              overflow-hidden
              bg-[#030303]
              px-6
              py-6
              sm:px-10
              sm:py-8
            "
          >
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/15
                pb-5
              "
            >
              <div
                className="
                  relative
                  font-mono-tech
                  text-base
                  font-semibold
                  tracking-[0.18em]
                  text-white
                "
              >
                NS
                <span
                  className="
                    absolute
                    -right-2
                    top-0
                    h-1
                    w-1
                    bg-blue-300
                  "
                />
              </div>

              <motion.button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                whileHover={{ rotate: 90, color: "#93C5FD" }}
                whileTap={{ scale: 0.92 }}
                className="
                  cursor-pointer
                  text-white
                "
              >
                <FaTimes size={24} />
              </motion.button>
            </div>

            <nav
              className="
                flex
                flex-1
                flex-col
                justify-center
                py-8
              "
            >
              {links.map((link, index) => {
                const isActive = active === link.id;

                return (
                  <motion.button
                    key={link.id}
                    type="button"
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.18 + index * 0.07,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => scrollToSection(link.id)}
                    className="
                      group
                      flex
                      cursor-pointer
                      items-baseline
                      border-b
                      border-white/10
                      py-3
                      text-left
                      sm:py-4
                    "
                  >
                    <span
                      className={`
                        mr-5
                        font-mono-tech
                        text-[10px]
                        tracking-[0.18em]
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-sky-200"
                            : "text-white/35 group-hover:text-sky-200"
                        }
                      `}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <motion.span
                      whileHover={{ x: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 24,
                      }}
                      className={`
                        font-display
                        text-[clamp(2.5rem,11vw,5.5rem)]
                        leading-[0.95]
                        tracking-[-0.04em]
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-white"
                            : "text-white/55 group-hover:text-white"
                        }
                      `}
                    >
                      {link.name}
                    </motion.span>

                    <span
                      className="
                        ml-auto
                        h-px
                        w-0
                        bg-blue-300
                        transition-all
                        duration-500
                        group-hover:w-12
                      "
                    />
                  </motion.button>
                );
              })}
            </nav>

            <div
              className="
                flex
                items-center
                justify-end
                border-t
                border-white/15
                pt-5
              "
              aria-label="Available"
              title="Available"
            >
              <span
                className="
                  h-2
                  w-2
                  bg-blue-300
                  shadow-[0_0_12px_rgba(231,91,22,0.55)]
                "
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
