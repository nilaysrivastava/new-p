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
    accent: "from-orange-700 via-orange-500 to-amber-400",

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
    accent: "from-amber-500 via-orange-600 to-orange-400",

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
    accent: "from-orange-800 via-orange-500 to-amber-400",

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
    accent: "from-orange-600 via-orange-800 to-amber-500",

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
    accent: "from-orange-700 via-orange-500 to-amber-400",

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
    accent: "from-amber-500 via-orange-600 to-orange-400",

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
        relative
        overflow-hidden
        border-t
        border-orange-500/20
        bg-black/30
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
              Selected Work
            </div>

          <h2
            className="
                font-display
                text-[clamp(3.5rem,8vw,8.5rem)]
                font-semibold
                leading-[0.84]
                tracking-[-0.06em]
                text-white
            "
          >
              Featured{" "}
              <span className="text-stroke-orange">
                Projects
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
            Building impactful systems across
            <span className="font-semibold text-orange-300">
              {" "}
              Machine Learning
            </span>
            ,
            <span className="font-semibold text-amber-300">
              {" "}
              Graph Learning
            </span>
            ,
            <span className="font-semibold text-orange-400">
              {" "}
              Computer Vision
            </span>
            , and
            <span className="font-semibold text-amber-300">
              {" "}
              Software Engineering
            </span>
            .
          </p>
        </motion.div>

        <div
          className="
            border-b
            border-white/15
          "
        >
          {projects.map((project, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  border-t
                  border-white/15
                  py-8
                  transition-colors
                  duration-500
                  hover:bg-orange-500/[0.025]
                  sm:py-10
                  xl:grid
                  xl:grid-cols-[64px_minmax(0,0.95fr)_minmax(360px,1fr)_160px]
                  xl:items-start
                  xl:gap-8
                  xl:py-12
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    items-center
                    justify-between
                    xl:mb-0
                    xl:block
                  "
                >
                  <span
                    className="
                      font-mono-tech
                      text-[10px]
                      tracking-[0.2em]
                      text-orange-400
                    "
                  >
                    {number}
                  </span>
                  <span
                    className="
                      font-mono-tech
                      text-[9px]
                      uppercase
                      tracking-[0.12em]
                      text-amber-300/75
                      xl:mt-5
                      xl:block
                      xl:[writing-mode:vertical-rl]
                    "
                  >
                    {project.metric}
                  </span>
                </div>

                <div
                  className="
                    min-w-0
                    xl:pr-6
                  "
                >
                  <div
                    className="
                      relative
                      mb-7
                      aspect-[16/10]
                      md:aspect-[16/8]
                      md:w-[68%]
                      overflow-hidden
                      border
                      border-orange-500/25
                      bg-[#0a0705]
                      lg:w-[58%]
                      xl:aspect-[16/10]
                      xl:w-full
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                    <span
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-[linear-gradient(135deg,transparent_55%,rgba(231,91,22,0.16))]
                      "
                    />
                  </div>

                  <motion.h3
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 24,
                    }}
                    className="
                      font-display
                      text-[clamp(2.2rem,3.8vw,4.5rem)]
                      font-medium
                      leading-[0.92]
                      tracking-[-0.05em]
                      text-white
                      [overflow-wrap:anywhere]
                      transition-colors
                      duration-300
                      group-hover:translate-x-2
                      group-hover:text-orange-300
                    "
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <div
                  className="
                    min-w-0
                    mt-6
                    xl:mt-0
                  "
                >
                  <p
                    className="
                      max-w-2xl
                      text-sm
                      leading-7
                      text-slate-300
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                      mt-6
                      flex
                      flex-wrap
                      items-center
                      gap-y-2
                    "
                  >
                    {project.technologies.map(
                      (tech, techIndex) => (
                        <span
                          key={tech}
                          className="
                            flex
                            items-center
                            font-mono-tech
                            text-[10px]
                            uppercase
                            tracking-[0.1em]
                            text-white/45
                            transition-colors
                            duration-200
                            hover:text-amber-300
                          "
                        >
                          {techIndex > 0 && (
                            <span
                              className="
                                mx-2.5
                                h-1
                                w-1
                                rotate-45
                                bg-orange-500/65
                              "
                            />
                          )}
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div
                  className="
                    mt-7
                    flex
                    flex-wrap
                    gap-5
                    xl:mt-0
                    xl:flex-col
                    xl:items-end
                    xl:gap-4
                  "
                >
                  <a
                    href={project.github}
                    className="
                      group/action
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/25
                      pb-1.5
                      font-mono-tech
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-white/65
                      transition-all
                      duration-300
                      hover:border-orange-500
                      hover:text-orange-300
                    "
                  >
                    <FaGithub />
                    GitHub Repo
                    <FaArrowUpRightFromSquare
                      className="
                        transition-transform
                        duration-300
                        group-hover/action:-translate-y-0.5
                        group-hover/action:translate-x-0.5
                      "
                    />
                  </a>

                  <a
                    href={project.demo}
                    className="
                      group/action
                      flex
                      items-center
                      gap-2
                      border-b
                      border-white/25
                      pb-1.5
                      font-mono-tech
                      text-[10px]
                      uppercase
                      tracking-[0.12em]
                      text-white/65
                      transition-all
                      duration-300
                      hover:border-orange-500
                      hover:text-orange-300
                    "
                  >
                    Demo
                    <FaArrowUpRightFromSquare
                      className="
                        transition-transform
                        duration-300
                        group-hover/action:-translate-y-0.5
                        group-hover/action:translate-x-0.5
                      "
                    />
                  </a>
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
                    from-orange-600
                    via-amber-400
                    to-transparent
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-x-100
                  "
                />
              </motion.article>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Projects;
