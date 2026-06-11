import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "TVS Credit Services",
    role: "SDE Summer Intern",
    duration: "May 2026 – July 2026",
    location: "Chennai, India",

    accent: "from-cyan-500 via-violet-500 to-pink-500",

    metrics: [
      "25K+ Documents/Day",
"40% Faster Pipelines",
"+12% AUC-ROC",
"30% Less Manual Effort"
    ],

    description:
      "Worked on intelligent financial automation systems involving document understanding, information extraction, credit risk assessment, LLM-assisted information extraction, and production ML workflows. The work combined software engineering, machine learning, NLP/OCR, and modern AI tooling in a large-scale financial environment.",

    technologies: [
      "Next.js",
      "Node.js",
      "Python",
      "NLP",
      "OCR",
      "Machine Learning",
      "Neural Networks",
      "Big Data",
      "A/B Testing",
      "GenAI",
      "LLMs",
      "Production ML Systems",
      "LangChain",
      "LangGraph",
      "Azure"
    ],
  },

  {
    company: "DMD Solutions",
    role: "Full Stack Developer Intern",
    duration: "July 2024 – Oct 2024",
    location: "Remote",

    accent: "from-violet-500 via-pink-500 to-cyan-500",

    metrics: [
      "35% Faster APIs",
"1000+ Requests/Day",
"99.9% Uptime",
"Cloud-Native Deployment"
    ],

    description:
      "Built and deployed cloud native full-stack applications using React, Next.js, Node.js, PostgreSQL, Docker, Kubernetes and AWS, contributing to both frontend and backend development. Optimized REST APIs, improved application performance, managed cloud infrastructure, and supported scalable production systems serving real-world workloads.",

    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Full Stack Development",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "REST APIs",
      "Cloud Infrastructure",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
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
            Experience
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
            Internship experience across Software Engineering, GenAI, Machine Learning, and Cloud-Based Systems.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div
          className="
            mt-20
            grid
            gap-8
            xl:grid-cols-2
          "
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
              "
            >
              {/* Gradient Background */}
              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-br
                  ${exp.accent}
                  opacity-[0.05]
                `}
              />

              <div className="relative z-10">
                {/* Header */}
                <div
                  className="
                    flex
                    flex-col
                    gap-4
                    lg:flex-row
                    lg:items-start
                    lg:justify-between
                  "
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <FaBriefcase className="text-cyan-300" />

                      <h3
                        className="
                          text-xl
                          font-bold
                          text-white
                          lg:text-2xl
                        "
                      >
                        {exp.role}
                      </h3>
                    </div>

                    <p
                      className={`
                        mt-2
                        text-lg
                        font-semibold
                        bg-gradient-to-r
                        ${exp.accent}
                        bg-clip-text
                        text-transparent
                      `}
                    >
                      {exp.company}
                    </p>
                  </div>

                  <div
                    className="
                      text-sm
                      text-slate-400
                    "
                  >
                    <div>{exp.duration}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>

                {/* Metrics */}
                <div
                  className="
                    mt-6
                    grid
                    grid-cols-2
                    gap-3
                  "
                >
                  {exp.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        px-3
                        py-3
                        text-center
                        text-xs
                        font-medium
                        text-slate-200
                        transition-all
                        duration-300
                        hover:border-cyan-400/30
                        hover:bg-white/10
                      "
                    >
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p
                  className="
                    mt-6
                    leading-8
                    text-slate-300
                  "
                >
                  {exp.description}
                </p>

                {/* Technologies */}
                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {exp.technologies.map((tech) => (
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
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-cyan-400/40
                        hover:text-cyan-300
                        hover:shadow-[0_0_12px_rgba(34,211,238,0.2)]
                      "
                    >
                      {tech}
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

export default Experience;