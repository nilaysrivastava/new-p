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

  const scrollToSection = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-300
          ${scrolled ? "py-4" : "py-6"}
        `}
      >
        <div
          className="
            mx-auto
            flex
            justify-center
            px-4
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-3
              backdrop-blur-2xl
              shadow-[0_8px_40px_rgba(0,0,0,0.35)]
              w-full
              max-w-full
              gap-8
            "
          >
            {/* LOGO */}

            <button
              onClick={() => scrollToSection("home")}
              className="
                cursor-pointer
                text-lg
                font-bold
                bg-gradient-to-r
                from-cyan-400
                via-violet-400
                to-pink-400
                bg-clip-text
                text-transparent
                shrink-0
              "
            >
              NS
            </button>

            {/* DESKTOP NAV */}

            <nav
              className="
                sm:hidden
                items-center
                gap-1
                lg:flex
                md:flex
              "
            >
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="
                    relative
                    cursor-pointer
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-300
                    transition-all
                    duration-300
                    hover:text-white
                    hover:-translate-y-[1px]
                    hover:scale-[1.03]
                  "
                >
                  {active === link.id && (
                    <>
                      <motion.div
                        layoutId="active-pill-glow"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-500
                          via-violet-500
                          to-pink-500
                          opacity-30
                          blur-md
                        "
                      />

                      <motion.div
                        layoutId="active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 35,
                        }}
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-gradient-to-r
                          from-cyan-500/40
                          via-violet-500/40
                          to-pink-500/40
                          border
                          border-white/20
                          shadow-[0_0_25px_rgba(139,92,246,0.35)]
                        "
                      />
                    </>
                  )}

                  {active !== link.id && (
                    <div
                      className="
                        absolute
                        inset-0
                        rounded-full
                        opacity-0
                        transition-opacity
                        duration-300
                        hover:opacity-100
                        bg-white/[0.04]
                      "
                    />
                  )}

                  <span
                    className={`
                      relative
                      z-10
                      transition-all
                      duration-300
                      ${
                        active === link.id
                          ? "font-semibold text-white"
                          : "text-slate-300"
                      }
                    `}
                  >
                    {link.name}
                  </span>
                </button>
              ))}
            </nav>

            {/* MOBILE BUTTON */}

            <button
              onClick={() => setMenuOpen(true)}
              className="
                cursor-pointer
                text-white
                lg:hidden
              "
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/60
                backdrop-blur-md
              "
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: 0.3,
              }}
              className="
                fixed
                right-0
                top-0
                z-50
                flex
                h-screen
                w-[85%]
                max-w-sm
                flex-col
                border-l
                border-white/10
                bg-slate-950/95
                backdrop-blur-2xl
                p-8
              "
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="
                  self-end
                  cursor-pointer
                  text-white
                "
              >
                <FaTimes size={24} />
              </button>

              <div
                className="
                  mt-12
                  flex
                  flex-col
                  gap-4
                "
              >
                {links.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`
                      cursor-pointer
                      rounded-2xl
                      px-4
                      py-3
                      text-left
                      text-base
                      font-medium
                      transition-all
                      duration-300
                      hover:translate-x-1
                      ${
                        active === link.id
                          ? "bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-pink-500/20 text-white"
                          : "text-slate-300 hover:bg-white/5"
                      }
                    `}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;