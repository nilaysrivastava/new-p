import { motion } from "framer-motion";

import { FaBrain, FaCode, FaCloud, FaDatabase } from "react-icons/fa";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: FaBrain,

    skills: [
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Graph Neural Networks",
      "Artificial Neural Networks",
      "DGL",
      "OpenCV",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "Hugging Face",
      "Computer Vision",
    ],
  },

  {
    title: "Software Engineering",
    icon: FaCode,

    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "GitHub",
      "Supabase",
      "Tailwind-CSS",
      "Full-Stack Development",
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: FaCloud,

    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "Linux",
      "CI/CD",
      "Terraform",
      "Helm",
      "Kafka",
      "Nginx",
      "Golang",
      "Cloud Native Development",
      "GitHub Actions",
      "Microservices",
      "EC2",
      "S3",
    ],
  },

  {
    title: "Core Computer Science",
    icon: FaDatabase,

    skills: [
      "DSA",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "OOP",
      "System Design",
      "Distributed Systems",
      "SQL",
      "Information Retrieval",
      "Data Analytics",
      "Computer Organization and Architecture",
      "IOT",
      "Information and System Security",
    ],
  },
];

const allSkills = skillCategories.flatMap((category) => category.skills);

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        border-t
        border-blue-300/20
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
              Technical Index
            </div>

            <h2
              className="
                font-display
                text-[clamp(3.5rem,8vw,8.5rem)]
                font-semibold
                leading-[0.83]
                tracking-[-0.06em]
                text-white
              "
            >
              Skills <span className="text-blue-300">& Technologies</span>
            </h2>
          </div>

          <p
            className="
              max-w-2xl
              border-l
              border-blue-300/65
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
            Technologies and concepts I have worked with through internships,
            projects, research, and open-source contributions. A mix of software
            development, artificial intelligence, machine learning, cloud
            infrastructure, and computer science fundamentals.
          </p>
        </motion.div>

        <div
          className="
            border-b
            border-white/15
          "
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ x: 7 }}
                className="
                  group
                  relative
                  grid
                  overflow-hidden
                  border-t
                  border-white/15
                  py-8
                  sm:py-10
                  lg:grid-cols-[72px_minmax(230px,0.58fr)_minmax(0,1fr)]
                  lg:items-start
                  lg:gap-8
                  lg:py-12
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    items-center
                    gap-3
                    lg:mb-0
                    lg:block
                  "
                >
                  <span
                    className="
                      font-mono-tech
                      text-[10px]
                      tracking-[0.2em]
                      text-sky-200
                    "
                  >
                    {number}
                  </span>

                  <Icon
                    size={14}
                    className="
                      text-white/35
                      transition-colors
                      duration-300
                      group-hover:text-stone-200
                      lg:mt-5
                    "
                  />
                </div>

                <h3
                  className="
                    font-display
                    text-2xl
                    font-medium
                    leading-tight
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-blue-300
                    sm:text-3xl
                    lg:pr-8
                  "
                >
                  {category.title}
                </h3>

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-x-0
                    gap-y-3
                    lg:mt-0
                  "
                >
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="
                        group/skill
                        flex
                        items-center
                        font-mono-tech
                        text-[11px]
                        uppercase
                        tracking-[0.08em]
                        text-white/55
                        transition-colors
                        duration-200
                        hover:text-sky-100
                        sm:text-xs
                      "
                    >
                      {skillIndex > 0 && (
                        <span
                          className="
                            mx-3
                            h-px
                            w-3
                            bg-white/20
                            transition-all
                            duration-300
                            group-hover/skill:w-5
                            group-hover/skill:bg-blue-300
                          "
                        />
                      )}
                      {skill}
                    </span>
                  ))}
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
                    bg-gradient-to-r
                    from-sky-200
                    via-stone-200
                    to-transparent
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-x-100
                  "
                />

                <motion.span
                  animate={{ x: ["-100%", "450%"] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.7,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    top-0
                    h-px
                    w-24
                    bg-gradient-to-r
                    from-transparent
                    via-sky-200/75
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </motion.article>
            );
          })}
        </div>
      </div>

      <div
        className="
          mt-20
          overflow-hidden
          border-y
          border-blue-300/25
          bg-[#070503]
          py-5
          sm:mt-24
          sm:py-7
        "
      >
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 62,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            flex
            w-max
            items-center
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
              {allSkills.map((skill, index) => (
                <div
                  key={`${group}-${index}-${skill}`}
                  className="
                    flex
                    items-center
                  "
                >
                  <span
                    className="
                      font-display
                      text-[clamp(1.8rem,3.5vw,4.25rem)]
                      font-medium
                      tracking-[-0.035em]
                      text-blue-300
                    "
                  >
                    {skill}
                  </span>
                  <span
                    className="
                      mx-5
                      h-1.5
                      w-1.5
                      rotate-45
                      border
                      border-stone-200
                      sm:mx-8
                    "
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
