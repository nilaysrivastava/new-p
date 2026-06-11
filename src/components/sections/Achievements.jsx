import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaCode,
  FaAward,
  FaUsers,
  FaUsersCog,
  FaLaptopCode,
} from "react-icons/fa";

const achievements = [
  {
    icon: FaTrophy,
    accent: "from-cyan-500 via-violet-500 to-pink-500",
    value: "2nd Runner-Up",
    title: "TVS Credit EPIC 7.0",
    description:
      "Secured 2nd Runner-Up position in TVS Credit EPIC 7.0 for developing an AI-powered face deduplication and liveness detection solution.",
  },

  {
    icon: FaCode,
    accent: "from-violet-500 via-pink-500 to-cyan-500",
    value: "2 Merged PRs",
    title: "Kornia Open Source",
    description:
      "Contributed feature enhancements and bug fixes to Kornia, a widely used computer vision library built on top of PyTorch.",
  },

  {
    icon: FaMedal,
    accent: "from-pink-500 via-cyan-500 to-violet-500",
    value: "Semi-Finalist",
    title: "Flipkart GRID 7.0",
    description:
      "Reached the Semi-Finals of Flipkart GRID 7.0, one of India's largest software engineering and innovation competitions.",
  },

  {
    icon: FaLaptopCode,
    accent: "from-cyan-500 via-blue-500 to-violet-500",
    value: "600+",
    title: "DSA Problems",
    description:
      "Solved 600+ algorithmic problems across LeetCode and GeeksforGeeks with a focus on data structures, algorithms, and competitive programming.",
  },

  {
    icon: FaUsersCog,
    accent: "from-violet-500 via-pink-500 to-cyan-500",
    value: "Technical Lead",
    title: "IEEE IIIT Gwalior",
    description:
      "Led a 10-member engineering team to design and deploy event management platforms supporting registrations and engagement for 500+ participants.",
  },

  {
    icon: FaUsers,
    accent: "from-pink-500 via-cyan-500 to-violet-500",
    value: "Logistics Head",
    title: "Twaran'25",
    description:
      "Coordinated hospitality, scheduling, and logistics operations for 2,000+ visiting athletes during the Inter-IIIT Sports Fest.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
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
            Achievements and Positions of Responsibility
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
            Open source, hackathons, programming, and leadership.
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
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;

            return (
              <motion.div
                key={achievement.title}
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
                  p-6
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
                    ${achievement.accent}
                    opacity-[0.04]
                    transition-opacity
                    duration-300
                    group-hover:opacity-[0.08]
                  `}
                />

                <div className="relative z-10">
                  <div
                    className={`
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-r
                      ${achievement.accent}
                    `}
                  >
                    <Icon
                      className="text-white"
                      size={22}
                    />
                  </div>

                  <h3
                    className={`
                      mt-6
                      bg-gradient-to-r
                      ${achievement.accent}
                      bg-clip-text
                      text-3xl
                      font-bold
                      text-transparent
                    `}
                  >
                    {achievement.value}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-lg
                      font-semibold
                      text-white
                    "
                  >
                    {achievement.title}
                  </p>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-7
                      text-slate-300
                    "
                  >
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Extra Stats */}

        <div
          className="
            mt-16
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >
          {[
            "AI Research",
            "Open Source Contributor",
            "Machine Learning",
            "Graph Learning",
            "Software Engineering",
          ].map((item) => (
            <div
              key={item}
              className="
                rounded-full
                border
                border-white/10
                bg-gradient-to-r
                from-cyan-500/10
                via-violet-500/10
                to-pink-500/10
                px-4
                py-2
                text-sm
                text-slate-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:text-cyan-300
              "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;