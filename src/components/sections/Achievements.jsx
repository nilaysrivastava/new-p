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
    value: "2nd Runner-Up",
    title: "TVS Credit EPIC 7.0",
    description:
      "Secured 2nd Runner-Up position in TVS Credit EPIC 7.0 for developing an AI-powered face deduplication and liveness detection solution.",
  },

  {
    icon: FaCode,
    value: "2 Merged PRs",
    title: "Kornia Open Source",
    description:
      "Contributed feature enhancements and bug fixes to Kornia, a widely used computer vision library built on top of PyTorch.",
  },

  {
    icon: FaMedal,
    value: "Semi-Finalist",
    title: "Flipkart GRID 7.0",
    description:
      "Reached the Semi-Finals of Flipkart GRID 7.0, one of India's largest software engineering and innovation competitions.",
  },

  {
    icon: FaLaptopCode,
    value: "600+",
    title: "DSA Problems",
    description:
      "Solved 600+ algorithmic problems across LeetCode and GeeksforGeeks with a focus on data structures, algorithms, and competitive programming.",
  },

  {
    icon: FaUsersCog,
    value: "Technical Lead",
    title: "IEEE IIIT Gwalior",
    description:
      "Led a 10-member engineering team to design and deploy event management platforms supporting registrations and engagement for 500+ participants.",
  },

  {
    icon: FaUsers,
    value: "Logistics Head",
    title: "Twaran'25",
    description:
      "Coordinated hospitality, scheduling, and logistics operations for 2,000+ visiting athletes during the Inter-IIIT Sports Fest.",
  },
];

const focusAreas = [
  "AI Research",
  "Open Source Contributor",
  "Machine Learning",
  "Software Engineering",
  "Hackathons",
  "Leadership",
  "Data Structures & Algorithms",
  "...",
];

const Achievements = () => {
  return (
    <section
      id="achievements"
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
            lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.5fr)]
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
              Achievements
            </div>

            <h2
              className="
                max-w-6xl
                font-display
                text-[clamp(3rem,7vw,7.5rem)]
                font-semibold
                leading-[0.86]
                tracking-[-0.06em]
                text-white
              "
            >
              Achievements and{" "}
              <span className="text-blue-300">Positions of Responsibility</span>
            </h2>
          </div>

          <p
            className="
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
            Open source, hackathons, programming, and leadership.
          </p>
        </motion.div>
      </div>

      <div
        className="
          mt-16
          overflow-hidden
          border-y
          border-blue-300/30
          bg-[#070503]
          py-5
          sm:mt-20
          sm:py-7
        "
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 38,
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
              {achievements.map((achievement, index) => (
                <div
                  key={`${group}-${achievement.title}`}
                  className="
                    flex
                    items-center
                  "
                >
                  <span
                    className="
                      mr-4
                      font-mono-tech
                      text-xl
                      uppercase
                      tracking-[0.16em]
                      text-sky-100
                    "
                  >
                    {achievement.value}
                  </span>
                  <span
                    className={`
                      font-display
                      text-[clamp(2.5rem,5.5vw,6rem)]
                      font-medium
                      leading-none
                      tracking-[-0.045em]
                      ${
                        index % 2 === 0 ? "text-blue-300" : "text-stroke-accent"
                      }
                    `}
                  >
                    {achievement.title}
                  </span>
                  <span
                    className="
                      mx-7
                      h-2
                      w-2
                      rotate-45
                      border
                      border-blue-300
                      sm:mx-10
                    "
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div
        className="
          mx-auto
          mt-16
          w-full
          max-w-[1600px]
          px-5
          sm:mt-20
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            border-t
            border-white/15
            md:grid
            md:grid-cols-2
          "
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const number = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={achievement.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: (index % 2) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ x: 6 }}
                className={`
                  group
                  relative
                  overflow-hidden
                  border-b
                  border-white/15
                  py-8
                  sm:py-10
                  md:px-8
                  lg:px-10
                  lg:py-12
                  ${index % 2 === 0 ? "md:border-r md:border-white/15" : ""}
                `}
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
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
                    size={17}
                    className="
                      text-white/20
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:text-stone-200/75
                    "
                  />
                </div>

                <div
                  className="
                    mt-9
                    grid
                    gap-5
                    lg:grid-cols-[minmax(0,1fr)_minmax(180px,0.72fr)]
                    lg:items-end
                  "
                >
                  <div>
                    <p
                      className="
                        font-mono-tech
                        text-[10px]
                        uppercase
                        tracking-[0.14em]
                        text-sky-100
                      "
                    >
                      {achievement.value}
                    </p>
                    <h3
                      className="
                        mt-3
                        font-display
                        text-[clamp(2rem,3.4vw,4rem)]
                        font-medium
                        leading-[0.95]
                        tracking-[-0.045em]
                        text-white
                        transition-colors
                        duration-300
                        group-hover:text-blue-300
                      "
                    >
                      {achievement.title}
                    </h3>
                  </div>

                  <p
                    className="
                      text-sm
                      leading-7
                      text-slate-300
                    "
                  >
                    {achievement.description}
                  </p>
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
                    bg-blue-300
                    transition-transform
                    duration-700
                    group-hover:scale-x-100
                  "
                />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            flex
            flex-wrap
            border-b
            border-white/15
          "
        >
          <div
            className="
              flex
              min-h-14
              items-center
              border-r
              border-white/15
              pr-5
              text-sky-200
            "
          >
            <FaAward size={15} />
          </div>

          {focusAreas.map((item) => (
            <span
              key={item}
              className="
                flex
                min-h-14
                items-center
                border-r
                border-white/15
                px-4
                font-mono-tech
                text-[9px]
                uppercase
                tracking-[0.12em]
                text-white/45
                transition-colors
                duration-200
                hover:text-sky-100
                sm:px-5
              "
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
