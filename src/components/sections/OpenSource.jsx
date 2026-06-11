import { motion } from "framer-motion";
import {
  FaGithub,
  FaCodeBranch,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const OpenSource = () => {
  return (
    <section
      id="opensource"
      className="
        py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-[1400px]
          px-6
        "
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="
              text-center
              text-5xl
              font-bold
              bg-gradient-to-r
              from-cyan-400
              via-violet-400
              to-pink-400
              bg-clip-text
              text-transparent
            "
          >
            Open Source
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-center
              text-lg
              leading-8
              text-slate-300
            "
          >
            Contributing to production-grade open source
            software and collaborating with global developer
            communities.
          </p>
        </motion.div>

        {/* Card */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          whileHover={{
            y: -8,
          }}
          className="
            group
            relative
            mx-auto
            mt-20
            max-w-5xl
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-cyan-400/30
            hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-cyan-500/5
              via-violet-500/5
              to-pink-500/5
            "
          />

          <div className="relative z-10">
            {/* Header */}

            <div
              className="
                flex
                flex-col
                gap-4
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              <div>
                <h3
                  className="
                    text-3xl
                    font-bold
                    text-white
                  "
                >
                  Kornia
                </h3>

                <p
                  className="
                    mt-2
                    text-cyan-300
                  "
                >
                  Open Source Contributor
                </p>
              </div>

              <div
                className="
                  flex
                  gap-3
                "
              >
                <div
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    text-slate-300
                  "
                >
                  10K+ Stars
                </div>

                <div
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-2
                    text-sm
                    text-slate-300
                  "
                >
                  2 Merged PRs
                </div>
              </div>
            </div>

            {/* Description */}

            <p
              className="
                mt-8
                max-w-3xl
                leading-8
                text-slate-300
              "
            >
              Contributed to Kornia, one of the leading
              open-source computer vision libraries built on
              top of PyTorch. Added support for RandomAffine
              padding mode handling and fixed a PyTorch
              broadcasting issue affecting multi-channel
              affine transformations.
            </p>

            {/* Metrics */}

            <div
              className="
                mt-8
                grid
                gap-4
                md:grid-cols-3
              "
            >
              {[
                "2 PRs Merged",
                "Computer Vision",
                "PyTorch Ecosystem",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    p-4
                    text-center
                    text-sm
                    text-slate-300
                  "
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Tech Pills */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-2
              "
            >
              {[
                "PyTorch",
                "Computer Vision",
                "Open Source",
                "Python",
                "GitHub",
              ].map((tech) => (
                <div
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-gradient-to-r
                    from-cyan-500/10
                    via-violet-500/10
                    to-pink-500/10
                    px-3
                    py-1.5
                    text-xs
                    text-slate-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/40
                    hover:text-cyan-300
                  "
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              <a
                href="https://github.com/kornia/kornia"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-2.5
                  text-sm
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:text-cyan-300
                "
              >
                <FaGithub />
                Kornia Repo
              </a>

              <a
                href="https://github.com/kornia/kornia/pull/3388"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-violet-500
                  to-pink-500
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <FaArrowUpRightFromSquare />
                Pull #3388
              </a>
              <a
                href="https://github.com/kornia/kornia/pull/3391"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-violet-500
                  to-pink-500
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                "
              >
                <FaArrowUpRightFromSquare />
                Pull #3391
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSource;