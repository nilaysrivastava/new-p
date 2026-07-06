import { motion } from "framer-motion";

const cards = [
  {
    title: "Education",
    accent: "from-blue-300 to-blue-300",
    highlight: "8.21 CGPA",
    description:
      "Integrated B.Tech + M.Tech student at IIIT Gwalior with strong foundations in Artificial Intelligence, Mathematics, Machine Learning and Core Computer Science.",
    pills: [
      "IIIT Gwalior",
      "8.21 CGPA",
      "Machine Learning",
      "Probability",
      "Linear Algebra",
    ],
  },

  {
    title: "Current Focus",
    accent: "from-sky-100 to-sky-200",
    highlight: "Production AI Systems",
    description:
      "Building scalable AI systems that bridge research and production using deep learning, graph learning, NLP, OCR and modern software engineering.",
    pills: [
      "PyTorch",
      "GNN",
      "Computer Vision",
      "NLP",
      "OCR",
      "Distributed Systems",
    ],
  },

  {
    title: "Research Interests",
    accent: "from-blue-300 to-stone-200",
    highlight: "Graph Representation Learning",
    description:
      "Interested in learning algorithms that understand relationships, uncertainty and structure in complex real-world data.",
    pills: [
      "Graph Learning",
      "Reinforcement Learning",
      "Representation Learning",
      "PGM",
      "Contrastive Learning",
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
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
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="
              text-center
              text-5xl
              font-bold
              bg-gradient-to-r
              from-sky-200
              via-sky-200
              to-sky-100
              bg-clip-text
              text-transparent
            "
          >
            About Me
          </h2>

          <p
            className="
              mx-auto
              mt-10
              max-w-4xl
              text-center
              text-lg
              leading-9
              text-slate-300
            "
          >
            I'm a pre-final year Integrated B.Tech + M.Tech student at
            <span className="font-semibold text-blue-300">
              {" "}
              IIIT Gwalior
            </span>
            , with experience spanning
            <span className="font-semibold text-sky-100">
              {" "}
              AI Engineering
            </span>
            ,
            <span className="font-semibold text-sky-200">
              {" "}
              Machine Learning Research
            </span>
            , and
            <span className="font-semibold text-sky-100">
              {" "}
              Scalable Software Systems
            </span>
            . My goal is to build intelligent systems that combine strong
            theoretical foundations with real-world impact.
          </p>

          {/* Highlights */}
          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            {[
              "TVS Credit AI Intern",
              "Kornia Contributor",
              "600+ DSA Problems",
            ].map((item) => (
              <div
                key={item}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-gradient-to-r
                  from-blue-300/10
                  via-blue-300/10
                  to-stone-200/10
                  px-4
                  py-2
                  text-sm
                  text-slate-300
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-sky-200/30
                  hover:shadow-[0_0_20px_rgba(231,91,22,0.2)]
                "
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-3
          "
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
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
              transition={{
                duration: 0.1,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-sky-200/30
                hover:shadow-[0_0_50px_rgba(231,91,22,0.15)]
              "
            >
              {/* Gradient Overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-blue-300/5
                  via-blue-300/5
                  to-stone-200/5
                  opacity-0
                  transition-opacity
                  duration-300
                  hover:opacity-100
                "
              />

              <div className="relative z-10">
                {/* Card Label */}
                <div
                  className={`
                    inline-flex
                    rounded-full
                    bg-gradient-to-r
                    ${card.accent}
                    p-[1px]
                    mb-5
                  `}
                >
                  <div
                    className="
                      rounded-full
                      bg-slate-950/80
                      px-4
                      py-1.5
                    "
                  >
                    <span
                      className={`
                        bg-gradient-to-r
                        ${card.accent}
                        bg-clip-text
                        text-xs
                        font-semibold
                        text-transparent
                      `}
                    >
                      {card.title}
                    </span>
                  </div>
                </div>

                {/* Highlight */}
                <h3
                  className="
                    mb-4
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {card.highlight}
                </h3>

                {/* Description */}
                <p
                  className="
                    leading-8
                    text-slate-300
                  "
                >
                  {card.description}
                </p>

                {/* Pills */}
                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {card.pills.map((pill) => (
                    <div
                      key={pill}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-3
                        py-1.5
                        text-xs
                        text-slate-300
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-sky-200/40
                        hover:text-sky-100
                        hover:shadow-[0_0_12px_rgba(231,91,22,0.2)]
                      "
                    >
                      {pill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
