import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profile from "../../assets/images/profile.png";
import { socials } from "../../data/socials";
import RotatingMicrocopy from "../ui/RotatingMicrocopy";

const highlights = [
  "600+ DSA Problems",
  "SDE Summer Intern @ TVS Credit",
  "Flipkart GRID 7.0 Semi-Finalist",
  "2nd Runner-up TVS Credit EPIC 7.0",
  "2× Kornia Contributor",
  "ABV-IIITM Gwalior",
  "Semi-Finalist TenzorX 2026 National AI Hackathon",
];

const availabilityMessages = [
  "available for opportunities",
  "open to collaboration",
  "building with intent",
  "systems nominal",
];

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    [1, 0.9, 0]
  );
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, 55]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-transparent
      "
    >
      <motion.div
        style={{
          opacity: contentOpacity,
          scale: contentScale,
          y: contentY,
        }}
        className="
          relative
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-[1600px]
          flex-col
          px-5
          pb-20
          pt-7
          sm:px-8
          sm:pt-9
          lg:px-12
          lg:pb-20
          lg:pt-8
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-30
            flex
            items-center
            justify-between
            border-b
            border-white/15
            pb-4
            font-mono-tech
            text-[10px]
            uppercase
            tracking-[0.16em]
            text-white/55
          "
        >
          <h2
            className="
              font-mono-tech
              text-[10px]
              font-normal
              tracking-[0.16em]
              text-white/55
            "
          >
            Software Engineer · AI/ML Developer · Open Source Contributor
          </h2>

          <div
            className="
              hidden
              items-center
              gap-3
              sm:flex
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                bg-blue-300
                shadow-[0_0_12px_rgba(147,197,253,0.3)]
              "
            />
            <RotatingMicrocopy
              messages={availabilityMessages}
              interval={3600}
              className="min-w-[19ch] justify-end"
            />
          </div>
        </motion.div>

        <motion.h1
          style={{ y: nameY }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.05,
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            z-10
            mt-5
            font-display
            text-[clamp(4.5rem,min(13vw,18vh),13rem)]
            font-semibold
            leading-[0.86]
            tracking-[-0.07em]
          "
        >
          <span
            className="
              block
              pl-[0.01em]
              text-white
            "
          >
            Nilay
          </span>
          <span
            className="
              block
              translate-x-[0.08em]
              -translate-y-[0.18em]
              text-blue-300
              sm:translate-x-[0.16em]
            "
          >
            Srivastava
          </span>
        </motion.h1>

        <div
          className="
            z-20
            mt-10
            grid
            items-center
            gap-9
            lg:mt-4
            lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.52fr)]
            lg:gap-12
            2xl:grid-cols-[minmax(0,0.9fr)_minmax(440px,0.56fr)]
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.45,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-2xl
              lg:pb-2
            "
          >
            <p
              className="
                border-l
                border-blue-300/70
                pl-5
                text-sm
                leading-7
                text-white/70
                sm:pl-7
                sm:text-base
                sm:leading-8
              "
            >
              Final-year student at ABV-IIITM Gwalior with interests in software
              engineering, machine learning, and open-source development. I've
              worked on
              <span className="font-semibold text-blue-300">
                {" "}
                Graph Learning
              </span>
              ,<span className="font-semibold text-sky-100"> NLP</span>,
              <span className="font-semibold text-sky-200">
                {" "}
                Computer Vision
              </span>
              , and
              <span className="font-semibold text-sky-100">
                {" "}
                Full-Stack Applications{" "}
              </span>
              through internships, research projects, and hackathons.
            </p>

            <div
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-3
              "
            >
              <motion.a
                href="#projects"
                data-cursor-hint="view selected work"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                className="
                  group
                  relative
                  inline-flex
                  min-h-12
                  items-center
                  overflow-hidden
                  border
                  border-blue-300
                  bg-sky-200
                  px-7
                  font-mono-tech
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-black
                  transition-colors
                  duration-300
                  hover:bg-transparent
                  hover:text-blue-300
                "
              >
                <span
                  className="
                    mr-3
                    h-px
                    w-5
                    bg-black
                    transition-all
                    duration-300
                    group-hover:w-8
                    group-hover:bg-sky-200
                  "
                />
                View Projects
              </motion.a>

              <motion.button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new Event("open-resume-modal"))
                }
                data-cursor-hint="open résumé"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  border
                  border-white/25
                  bg-black/30
                  px-7
                  font-mono-tech
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  transition-all
                  duration-300
                  hover:border-blue-300/80
                  hover:text-blue-300
                "
              >
                Resume
                <span
                  className="
                    ml-3
                    h-1
                    w-1
                    bg-white/45
                    transition-colors
                    duration-300
                    group-hover:bg-sky-200
                  "
                />
              </motion.button>
            </div>

            <div
              className="
                mt-5
                flex
                items-center
                gap-2
              "
            >
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hint="view profile"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.94 }}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      border
                      border-white/15
                      text-white/65
                      transition-all
                      duration-300
                      hover:border-blue-300/65
                      hover:bg-blue-300/10
                      hover:text-blue-300
                    "
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <div
            className="
              mx-auto
              w-full
              max-w-[min(410px,40vh)]
              lg:absolute
              lg:right-12
              lg:top-1/2
              lg:z-20
              lg:w-[min(410px,40vh)]
              lg:-translate-y-1/2
              2xl:right-16
              2xl:w-[440px]
              2xl:max-w-[440px]
            "
          >
            <motion.div
              style={{ y: portraitY }}
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                delay: 0.3,
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                w-full
              "
            >
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[115%]
                  w-[125%]
                  -translate-x-1/2
                  -translate-y-1/2
                  bg-[radial-gradient(ellipse_at_center,rgba(190,70,16,0.28)_0%,rgba(216,132,24,0.10)_38%,transparent_70%)]
                  blur-2xl
                "
              />

              <motion.div
                animate={{
                  x: [0, 5, 0],
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative
                  border
                  border-blue-300/60
                  p-2
                "
              >
                <div
                  className="
                  absolute
                  -left-3
                  -top-3
                  h-16
                  w-16
                  border-l
                  border-t
                  border-stone-200
                "
                />
                <div
                  className="
                  absolute
                  -bottom-3
                  -right-3
                  h-16
                  w-16
                  border-b
                  border-r
                  border-sky-200
                "
                />

                <div
                  className="
                  relative
                  aspect-[4/5]
                  overflow-hidden
                  bg-[#0b0806]
                "
                >
                  <img
                    src={profile}
                    alt="Nilay"
                    className="
                    h-full
                    w-full
                    object-cover
                    grayscale-[15%]
                    contrast-[1.04]
                    saturate-[0.9]
                  "
                  />
                  <div
                    className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[linear-gradient(180deg,transparent_58%,rgba(3,3,3,0.62)_100%)]
                  "
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="
            absolute
            bottom-5
            right-5
            z-30
            hidden
            items-center
            gap-3
            font-mono-tech
            text-[9px]
            tracking-[0.24em]
            text-white/45
            sm:flex
            sm:right-8
            lg:right-12
          "
        >
          SCROLL
          <span
            className="
              relative
              h-10
              w-px
              overflow-hidden
              bg-white/20
            "
          >
            <motion.span
              animate={{ y: ["-100%", "250%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-0
                top-0
                h-4
                w-px
                bg-blue-300
              "
            />
          </span>
        </motion.div>
      </motion.div>

      <div
        className="
          absolute
          bottom-0
          left-0
          z-40
          w-full
          overflow-hidden
          border-y
          border-blue-300/25
          bg-[#070503]/95
          py-3
          backdrop-blur-md
        "
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            w-max
            whitespace-nowrap
            will-change-transform
          "
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              aria-hidden={group === 1}
              className="
                flex
                items-center
              "
            >
              {highlights.map((item) => (
                <div
                  key={`${group}-${item}`}
                  className="
                    flex
                    items-center
                    font-mono-tech
                    text-[10px]
                    uppercase
                    tracking-[0.13em]
                    text-white/65
                  "
                >
                  <span
                    className="
                      mx-6
                      h-1
                      w-1
                      rotate-45
                      bg-blue-300
                      sm:mx-8
                    "
                  />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
