import { motion } from "framer-motion";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import sbcl from "../../assets/images/projects/sbcl.png";
import mha from "../../assets/images/projects/mha.png";
import er from "../../assets/images/projects/er.png";
import voib from "../../assets/images/projects/voib.png";
import foode from "../../assets/images/projects/foode.png";
import fd from "../../assets/images/projects/fd.png";

const projects = [
  {
    title: "SBCL-SN",
    image: sbcl,
    accent: "from-cyan-500 via-violet-500 to-pink-500",

    metric: "97.33% F1",

    description:
      "A structural balance-aware framework for signed network analysis that predicts trust and distrust relationships in social and financial networks. The framework employs Graph Neural Networks, contrastive learning, signed random walks, and centrality-based augmentations to learn robust node representations and improve link sign prediction.",

    technologies: [
      "PyTorch",
      "DGL",
      "GNNs",
      "Contrastive Learning",
    ],

    github: "https://github.com/nilaysrivastava/SBCL-SN",
    demo: "#",
  },

  {
    title: "MentalHealthAid-Autism",
    image: mha,
    accent: "from-violet-500 via-pink-500 to-cyan-500",

    metric: "Sentence-BERT",

    description:
      "A knowledge-driven autism support system that retrieves relevant answers for the users based upon real-world Quora discussions. The system employs topic modeling, entity extraction, Sentence-BERT embeddings, and hybrid retrieval techniques to improve query understanding and information discovery.",

    technologies: [
      "NLP",
      "Sentence-BERT",
      "LDA",
      "Python",
    ],

    github: "https://github.com/nilaysrivastava/MentalHealthAid-Autism",
    demo: "#",
  },

  {
    title: "Emotion Recognition",
    image: er,
    accent: "from-pink-500 via-cyan-500 to-violet-500",

    metric: "81% Accuracy",

    description:
      "A real-time facial emotion recognition system that identifies and classifies human expressions across seven emotional categories from live video streams. The system employs Convolutional Neural Networks, OpenCV, and computer vision techniques to enable accurate and low-latency emotion detection.",

    technologies: [
      "CNN",
      "OpenCV",
      "PyTorch",
      "Computer Vision",
    ],

    github: "https://github.com/nilaysrivastava/OpenCV-EmotionRecognition",
    demo: "#",
  },

  {
    title: "Voib",
    image: voib,
    accent: "from-cyan-500 via-blue-500 to-violet-500",

    metric: "Music Streaming",

    description:
      "Cloud-native music streaming platform featuring secure authentication, user-managed uploads, premium subscriptions, and scalable content delivery.",

    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Supabase",
    ],

    github: "https://github.com/nilaysrivastava/Nextjs-voib",
    demo: "#",
  },

  {
    title: "FoodE",
    image: foode,
    accent: "from-cyan-500 via-violet-500 to-pink-500",

    metric: "Full Stack",

    description:
      "Food ordering platform with authentication, menu management, cart workflows, and backend services designed for a seamless ordering experience.",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],

    github: "#",
    demo: "#",
  },

  {
    title: "Face-Deduplication",
    image: fd,
    accent: "from-violet-500 via-pink-500 to-cyan-500",

    metric: "EPIC 7.0",

    description:
      "AI-powered loan onboarding system with face deduplication and liveness detection for secure identity verification and fraud prevention.",

    technologies: [
      "OpenCV",
      "Flask",
      "Face Recognition",
      "Computer Vision",
    ],

    github: "https://github.com/nilaysrivastava/face-deduplication-TVScreditEPIC7.0",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
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
            Featured Projects
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
            Building impactful systems across
            <span className="font-semibold text-cyan-300">
              {" "}
              Machine Learning
            </span>
            ,
            <span className="font-semibold text-violet-300">
              {" "}
              Graph Learning
            </span>
            ,
            <span className="font-semibold text-pink-300">
              {" "}
              Computer Vision
            </span>
            , and
            <span className="font-semibold text-cyan-300">
              {" "}
              Software Engineering
            </span>
            .
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
            mt-20
            grid
            gap-5
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                delay: 0.1,
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-4
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-cyan-400/30
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
              "
            >
              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-br
                  ${project.accent}
                  opacity-[0.04]
                  transition-opacity
                  duration-300
                  group-hover:opacity-[0.08]
                `}
              />

              <div className="relative z-10">
                {/* Project Image */}

                <div
                  className="
                    mb-4
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    transition-all
                    duration-300
                    group-hover:border-cyan-400/30
                    group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-64
                      w-full
                      object-cover
                      transition-all
                      duration-500
                      group-hover:scale-102
                    "
                  />
                </div>

                {/* Metric */}

                <div
                  className={`
                    inline-flex
                    rounded-full
                    bg-gradient-to-r
                    ${project.accent}
                    p-[1px]
                    mb-3
                  `}
                >
                  <div
                    className="
                      rounded-full
                      bg-slate-950/80
                      px-3
                      py-1
                    "
                  >
                    <span
                      className={`
                        bg-gradient-to-r
                        ${project.accent}
                        bg-clip-text
                        text-[11px]
                        font-semibold
                        text-transparent
                      `}
                    >
                      {project.metric}
                    </span>
                  </div>
                </div>

                {/* Title */}

                <h3
                  className="
                    text-lg
                    font-bold
                    text-white
                  "
                >
                  {project.title}
                </h3>

                {/* Description */}

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-slate-300
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.technologies.map((tech) => (
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
                        px-2.5
                        py-1
                        text-[11px]
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

                {/* Buttons */}

                <div
                  className="
                    mt-5
                    flex
                    gap-2
                  "
                >
                  <a
                    href={project.github}
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-3
                      py-2
                      text-xs
                      text-slate-300
                      transition-all
                      duration-300
                      hover:border-cyan-400/40
                      hover:text-cyan-300
                    "
                  >
                    <FaGithub />
                    GitHub Repo
                    <FaArrowUpRightFromSquare />
                  </a>

                  {/* <a
                    href={project.demo}
                    className="
                      flex
                      items-center
                      gap-1.5
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-500
                      via-violet-500
                      to-pink-500
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                  >
                    <FaArrowUpRightFromSquare />
                    Deta
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;