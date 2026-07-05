import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import profile from "../../assets/images/profile.png";
import { socials } from "../../data/socials";

const highlights = [
  "600+ DSA Problems",
  "SDE Summer Intern @ TVS Credit",
  "Flipkart GRID 7.0 Semi-Finalist",
  "2nd Runner-up TVS Credit EPIC 7.0",
  "2× Kornia Contributor",
  "ABV-IIITM Gwalior",
  "Semi-Finalist TenzorX 2026 National AI Hackathon",
];

const TechGlobe = () => {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        left-[57%]
        top-[38%]
        z-[5]
        hidden
        h-[clamp(280px,31vw,520px)]
        w-[clamp(280px,31vw,520px)]
        -translate-x-1/2
        -translate-y-1/2
        md:block
      "
    >
      <div
        className="
          absolute
          inset-[9%]
          rounded-full
          border
          border-orange-500/40
          bg-[radial-gradient(circle_at_38%_35%,rgba(242,165,26,0.18),rgba(231,91,22,0.08)_38%,transparent_68%)]
          shadow-[inset_0_0_60px_rgba(231,91,22,0.14),0_0_80px_rgba(231,91,22,0.10)]
        "
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-[3%]
          rounded-full
          border
          border-dashed
          border-orange-500/50
        "
      >
        <span
          className="
            absolute
            left-1/2
            top-0
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-amber-400
            shadow-[0_0_18px_rgba(242,165,26,0.75)]
          "
        />
        <span
          className="
            absolute
            bottom-[12%]
            right-[8%]
            h-1.5
            w-1.5
            rounded-full
            bg-orange-500
            shadow-[0_0_14px_rgba(231,91,22,0.65)]
          "
        />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-[13%]
          rotate-[58deg]
          rounded-full
          border
          border-orange-400/45
        "
      >
        <span
          className="
            absolute
            left-[16%]
            top-[6%]
            h-1.5
            w-1.5
            rounded-full
            bg-orange-300
          "
        />
      </motion.div>

      <div
        className="
          absolute
          inset-x-[9%]
          top-1/2
          h-[28%]
          -translate-y-1/2
          rounded-[50%]
          border
          border-amber-400/40
        "
      />
      <div
        className="
          absolute
          inset-y-[9%]
          left-1/2
          w-[30%]
          -translate-x-1/2
          rounded-[50%]
          border
          border-orange-400/40
        "
      />
      <div
        className="
          absolute
          inset-y-[9%]
          left-1/2
          w-[68%]
          -translate-x-1/2
          rounded-[50%]
          border
          border-orange-500/30
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.9, 0.55],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-3
          w-3
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-amber-300
          bg-orange-500/35
          shadow-[0_0_28px_rgba(231,91,22,0.65)]
        "
      />

      <motion.span
        animate={{
          top: ["18%", "82%", "18%"],
          opacity: [0, 0.65, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-[12%]
          h-px
          w-[76%]
          bg-gradient-to-r
          from-transparent
          via-amber-300/70
          to-transparent
          shadow-[0_0_12px_rgba(242,165,26,0.4)]
        "
      />
    </div>
  );
};

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.58, 1],
    [1, 0.9, 0],
  );
  const contentScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.92],
  );
  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 110],
  );
  const portraitY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -70],
  );
  const nameY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 55],
  );

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

          <span
            className="
              hidden
              h-1.5
              w-1.5
              bg-orange-500
              shadow-[0_0_12px_rgba(231,91,22,0.65)]
              sm:block
            "
          />
        </motion.div>

        <TechGlobe />

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
              text-stroke-orange
              sm:translate-x-[0.16em]
            "
          >
            Srivastava
          </span>
        </motion.h1>

        <div
          className="
            relative
            z-20
            mt-10
            grid
            items-end
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
                border-orange-500/70
                pl-5
                text-sm
                leading-7
                text-white/70
                sm:pl-7
                sm:text-base
                sm:leading-8
              "
            >
              Final-year student at ABV-IIITM Gwalior with interests in software engineering, machine learning, and open-source development. I've worked on
              <span className="font-semibold text-orange-300">
                {" "}
                Graph Learning
              </span>
              ,
              <span className="font-semibold text-amber-300">
                {" "}
                NLP
              </span>
              ,
              <span className="font-semibold text-orange-400">
                {" "}
                Computer Vision
              </span>
              , and
              <span className="font-semibold text-amber-300">
                {" "}
                Full-Stack Applications
                {" "}
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
                  border-orange-500
                  bg-orange-600
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
                  hover:text-orange-300
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
                    group-hover:bg-orange-400
                  "
                />
                View Projects
              </motion.a>

              <motion.a
                href="#"
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
                  hover:border-orange-500/80
                  hover:text-orange-300
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
                    group-hover:bg-orange-400
                  "
                />
              </motion.a>
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
                    rel="noreferrer"
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
                      hover:border-orange-500/65
                      hover:bg-orange-500/10
                      hover:text-orange-300
                    "
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

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
              mx-auto
              w-full
              max-w-[min(410px,40vh)]
              lg:mx-0
              lg:ml-auto
              lg:mr-0
              2xl:max-w-[440px]
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
                border-orange-500/60
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
                  border-amber-400
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
                  border-orange-600
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
                bg-orange-500
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
          border-orange-500/25
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
                      bg-orange-500
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
