import { motion } from "framer-motion";

import {
  FaBrain,
  FaCode,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "AI & Machine Learning",
    icon: FaBrain,
    accent: "from-cyan-500 via-violet-500 to-pink-500",

    skills: [
      "PyTorch",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
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
    accent: "from-violet-500 via-pink-500 to-cyan-500",

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
    accent: "from-pink-500 via-cyan-500 to-violet-500",

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
      "S3"
    ],
  },

  {
    title: "Core Computer Science",
    icon: FaDatabase,
    accent: "from-cyan-500 via-blue-500 to-violet-500",

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
      "Information and System Security"
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-[1600px]
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
            Skills & Technologies
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-4xl
              text-center
              text-lg
              leading-8
              text-slate-300
            "
          >
            Technologies and concepts I have worked with through internships, projects, research, and open-source contributions. A mix of software development, artificial intelligence, machine learning, cloud infrastructure, and computer science fundamentals.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            mt-20
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
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
                }}
                className="
                  group
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
                <div
                  className={`
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${category.accent}
                    opacity-[0.04]
                    transition-opacity
                    duration-300
                    group-hover:opacity-[0.08]
                  `}
                />

                <div className="relative z-10">
                  {/* Header */}

                  <div className="flex items-center gap-4">
                    <div
                      className={`
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-r
                        ${category.accent}
                      `}
                    >
                      <Icon
                        className="text-white"
                        size={20}
                      />
                    </div>

                    <h3
                      className="
                        text-xl
                        font-bold
                        text-white
                      "
                    >
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}

                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
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
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;