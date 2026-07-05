import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "TVS Credit Services",
    role: "SDE Summer Intern",
    duration: "May 2026 – July 2026",
    location: "Chennai, India",

    metrics: [
      "25K+ Documents/Day",
      "40% Faster Pipelines",
      "+12% AUC-ROC",
      "30% Less Manual Effort",
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
      "Azure",
    ],
  },

  {
    company: "DMD Solutions",
    role: "Full Stack Developer Intern",
    duration: "July 2024 – Oct 2024",
    location: "Remote",

    metrics: [
      "35% Faster APIs",
      "1000+ Requests/Day",
      "99.9% Uptime",
      "Cloud-Native Deployment",
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
          viewport={{ once: true, amount: 0.35 }}
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
            lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)]
            lg:items-end
            lg:gap-20
            lg:pb-16
          "
        >
          <h2
            className="
              font-display
              text-[clamp(3.8rem,9vw,9rem)]
              font-semibold
              leading-[0.82]
              tracking-[-0.065em]
              text-stroke-orange
            "
          >
            Experience
          </h2>

          <p
            className="
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
            Internship experience across Software Engineering, GenAI, Machine Learning, and Cloud-Based Systems.
          </p>
        </motion.div>

        <div
          className="
            border-b
            border-white/15
          "
        >
          {experiences.map((exp, index) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ x: 5 }}
              className="
                group
                relative
                overflow-hidden
                border-t
                border-white/15
                py-9
                sm:py-11
                lg:grid
                lg:grid-cols-[64px_minmax(240px,0.58fr)_minmax(0,1fr)]
                lg:items-start
                lg:gap-8
                lg:py-14
              "
            >
              <div
                className="
                  mb-6
                  flex
                  items-center
                  justify-end
                  lg:mb-0
                  lg:block
                "
              >
                <FaBriefcase
                  size={14}
                  className="
                    text-white/25
                    transition-colors
                    duration-300
                    group-hover:text-amber-400
                    lg:mt-6
                  "
                />
              </div>

              <div
                className="
                  min-w-0
                  lg:pr-6
                "
              >
                <h3
                  className="
                    font-display
                    text-[clamp(2.2rem,4vw,4.8rem)]
                    font-medium
                    leading-[0.94]
                    tracking-[-0.045em]
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-orange-300
                  "
                >
                  {exp.role}
                </h3>

                <p
                  className="
                    mt-4
                    font-mono-tech
                    text-xs
                    uppercase
                    tracking-[0.12em]
                    text-amber-300
                  "
                >
                  {exp.company}
                </p>

                <div
                  className="
                    mt-7
                    border-t
                    border-white/15
                    font-mono-tech
                    text-[10px]
                    uppercase
                    tracking-[0.08em]
                    text-slate-400
                  "
                >
                  <div
                    className="
                      border-b
                      border-white/15
                      py-3
                    "
                  >
                    {exp.duration}
                  </div>
                  <div
                    className="
                      border-b
                      border-white/15
                      py-3
                    "
                  >
                    {exp.location}
                  </div>
                </div>
              </div>

              <div
                className="
                  min-w-0
                  mt-8
                  lg:mt-0
                "
              >
                <p
                  className="
                    max-w-3xl
                    text-sm
                    leading-7
                    text-slate-300
                    sm:text-base
                    sm:leading-8
                  "
                >
                  {exp.description}
                </p>

                <div
                  className="
                    mt-8
                    grid
                    grid-cols-2
                    border-t
                    border-white/15
                    sm:grid-cols-4
                  "
                >
                  {exp.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="
                        border-b
                        border-white/15
                        py-4
                        pr-3
                        font-mono-tech
                        text-[10px]
                        uppercase
                        tracking-[0.08em]
                        text-white/55
                        transition-colors
                        duration-200
                        hover:text-amber-300
                        sm:border-r
                        sm:px-3
                        sm:first:pl-0
                        sm:last:border-r-0
                      "
                    >
                      {metric}
                    </div>
                  ))}
                </div>

                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    items-center
                    gap-y-2
                  "
                >
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="
                        flex
                        items-center
                        font-mono-tech
                        text-[10px]
                        uppercase
                        tracking-[0.08em]
                        text-white/45
                        transition-colors
                        duration-200
                        hover:text-orange-300
                      "
                    >
                      {techIndex > 0 && (
                        <span
                          className="
                            mx-2.5
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
              </div>

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-px
                  w-full
                  origin-left
                  scale-x-0
                  bg-orange-500
                  transition-transform
                  duration-700
                  group-hover:scale-x-100
                "
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
