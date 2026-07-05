import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const impact = [
  "2 PRs Merged",
  "Computer Vision",
  "PyTorch Ecosystem",
];

const technologies = [
  "PyTorch",
  "Computer Vision",
  "Open Source",
  "Python",
  "GitHub",
];

const OpenSource = () => {
  return (
    <section
      id="opensource"
      className="
        relative
        overflow-hidden
        border-t
        border-orange-500/20
        bg-black/35
        py-24
        sm:py-28
        lg:py-36
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1600px]
          px-5
          sm:px-8
          lg:px-12
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            gap-8
            border-b
            border-white/15
            pb-12
            lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.65fr)]
            lg:items-end
            lg:gap-20
            lg:pb-16
          "
        >
          <div>
            <div
              className="
                section-label
                mb-6
              "
            >
              Open Source
            </div>

            <h2
              className="
                font-display
                text-[clamp(3.8rem,9vw,9rem)]
                font-semibold
                leading-[0.82]
                tracking-[-0.065em]
                text-white
              "
            >
              Open{" "}
              <span className="text-stroke-orange">
                Source
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-2xl
              border-l
              border-orange-500/65
              pl-5
              text-sm
              leading-7
              text-slate-300
              sm:pl-7
              sm:text-base
              sm:leading-8
              lg:ml-auto
            "
          >
            Contributing to production-grade open source
            software and collaborating with global developer
            communities.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            border-b
            border-white/15
          "
        >
          <div
            className="
              grid
              border-b
              border-white/15
              lg:grid-cols-[minmax(0,1fr)_220px_220px]
            "
          >
            <div
              className="
                flex
                items-center
                gap-5
                py-9
                sm:py-12
                lg:pr-10
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  border
                  border-orange-500/55
                  text-orange-400
                "
              >
                <FaCodeBranch size={17} />
              </div>

              <div>
                <h3
                  className="
                    font-display
                    text-[clamp(3rem,7vw,7rem)]
                    font-medium
                    leading-none
                    tracking-[-0.055em]
                    text-white
                  "
                >
                  Kornia
                </h3>
                <p
                  className="
                    mt-3
                    font-mono-tech
                    text-[10px]
                    uppercase
                    tracking-[0.16em]
                    text-orange-300
                  "
                >
                  Open Source Contributor
                </p>
              </div>
            </div>

            <div
              className="
                flex
                items-center
                justify-between
                border-t
                border-white/15
                py-6
                lg:block
                lg:border-l
                lg:border-t-0
                lg:px-8
                lg:py-12
              "
            >
              <span
                className="
                  font-mono-tech
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-white/35
                "
              >
                01
              </span>
              <span
                className="
                  font-display
                  text-2xl
                  text-amber-300
                  lg:mt-8
                  lg:block
                  lg:text-3xl
                "
              >
                10K+ Stars
              </span>
            </div>

            <div
              className="
                flex
                items-center
                justify-between
                border-t
                border-white/15
                py-6
                lg:block
                lg:border-l
                lg:border-t-0
                lg:px-8
                lg:py-12
              "
            >
              <span
                className="
                  font-mono-tech
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-white/35
                "
              >
                02
              </span>
              <span
                className="
                  font-display
                  text-2xl
                  text-orange-300
                  lg:mt-8
                  lg:block
                  lg:text-3xl
                "
              >
                2 Merged PRs
              </span>
            </div>
          </div>

          <div
            className="
              grid
              border-b
              border-white/15
              lg:grid-cols-[minmax(0,0.68fr)_minmax(360px,1fr)]
            "
          >
            <div
              className="
                py-9
                sm:py-12
                lg:border-r
                lg:border-white/15
                lg:pr-12
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                  font-mono-tech
                  text-[9px]
                  uppercase
                  tracking-[0.17em]
                  text-orange-400
                "
              >
                <FaGithub size={13} />
                Kornia
              </div>

              <a
                href="https://github.com/kornia/kornia"
                className="
                  group
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-white/25
                  pb-2
                  font-mono-tech
                  text-xs
                  uppercase
                  tracking-[0.13em]
                  text-white/65
                  transition-colors
                  duration-300
                  hover:border-orange-500
                  hover:text-orange-300
                "
              >
                <FaGithub />
                Kornia Repo
                <FaArrowUpRightFromSquare
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>

            <div
              className="
                relative
                overflow-hidden
                border-t
                border-white/15
                bg-[#070503]
                px-5
                py-9
                sm:px-8
                sm:py-12
                lg:border-t-0
                lg:px-12
              "
            >
              <div
                className="
                  mb-7
                  flex
                  items-center
                  gap-2
                "
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 bg-orange-600" />
                <span className="h-1.5 w-1.5 bg-amber-500/65" />
                <span className="h-1.5 w-1.5 bg-white/20" />
              </div>

              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >
                <span
                  className="
                    pt-1
                    font-mono-tech
                    text-sm
                    text-orange-500
                  "
                  aria-hidden="true"
                >
                  $
                </span>
                <p
                  className="
                    max-w-3xl
                    font-mono-tech
                    text-sm
                    leading-7
                    text-slate-300
                    sm:text-base
                    sm:leading-8
                  "
                >
                  Contributed to Kornia, one of the leading
                  open-source computer vision libraries built on
                  top of PyTorch. Added support for RandomAffine
                  padding mode handling and fixed a PyTorch
                  broadcasting issue affecting multi-channel
                  affine transformations.
                </p>
              </div>

              <motion.span
                animate={{ x: ["-120%", "650%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  h-px
                  w-24
                  bg-orange-500
                "
              />
            </div>
          </div>

          <div
            className="
              grid
              border-b
              border-white/15
              md:grid-cols-3
            "
          >
            {impact.map((item, index) => (
              <motion.div
                key={item}
                whileHover={{ x: 5 }}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/15
                  py-6
                  transition-colors
                  duration-300
                  hover:text-orange-300
                  md:border-b-0
                  md:border-r
                  md:px-7
                  md:last:border-r-0
                "
              >
                <span
                  className="
                    font-mono-tech
                    text-[9px]
                    tracking-[0.16em]
                    text-orange-400
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className="
                    font-mono-tech
                    text-[11px]
                    uppercase
                    tracking-[0.1em]
                    text-white/60
                    transition-colors
                    duration-300
                    group-hover:text-orange-300
                  "
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          <div
            className="
              grid
              gap-8
              py-9
              sm:py-12
              lg:grid-cols-[minmax(0,1fr)_auto]
              lg:items-center
            "
          >
            <div
              className="
                flex
                flex-wrap
                items-center
                gap-y-3
              "
            >
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className="
                    flex
                    items-center
                    font-mono-tech
                    text-[10px]
                    uppercase
                    tracking-[0.11em]
                    text-white/50
                    transition-colors
                    duration-200
                    hover:text-amber-300
                  "
                >
                  {index > 0 && (
                    <span
                      className="
                        mx-3
                        h-1
                        w-1
                        rotate-45
                        bg-orange-500
                      "
                    />
                  )}
                  {tech}
                </span>
              ))}
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-3
                lg:justify-end
              "
            >
              <motion.a
                href="https://github.com/kornia/kornia/pull/3388"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                className="
                  flex
                  min-h-11
                  items-center
                  gap-2
                  border
                  border-orange-500
                  bg-orange-600
                  px-5
                  font-mono-tech
                  text-[10px]
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
                <FaArrowUpRightFromSquare />
                Pull #3388
              </motion.a>

              <motion.a
                href="https://github.com/kornia/kornia/pull/3391"
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                className="
                  flex
                  min-h-11
                  items-center
                  gap-2
                  border
                  border-orange-500
                  bg-orange-600
                  px-5
                  font-mono-tech
                  text-[10px]
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
                <FaArrowUpRightFromSquare />
                Pull #3391
              </motion.a>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default OpenSource;
