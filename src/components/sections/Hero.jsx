import { motion } from "framer-motion";
import profile from "../../assets/images/profile.png";
import { socials } from "../../data/socials";

const Hero = () => {
  return (
    <section
      id="home"
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      pt-28
      pb-16
      px-6
    "
    >
      <div
        className="
        mx-auto
        grid
        w-full
        max-w-[1400px]
        gap-16
        px-6
        lg:grid-cols-[1.1fr_0.9fr]
      "
      >
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
          flex
          flex-col
          justify-center
          text-center
          lg:text-left
        "
        >
          

          <h1
            className="
  text-5xl
  md:text-6xl
  xl:text-7xl
  font-extrabold
  leading-tight
  bg-gradient-to-r
  from-white
  via-violet-400
  to-pink-400
  bg-clip-text
  text-transparent
"
          >
            Nilay
            <br />
            Srivastava
          </h1>

          <h2
            className="
            mt-5
            text-xl
            font-medium
            text-slate-300
            md:text-2xl
          "
          >
            Software Engineer · AI/ML Developer · Open Source Contributor
          </h2>

          <p
  className="
    mt-5
    text-base
    text-slate-300
    lg:text-lg
  "
>
  Final-year student at ABV-IIITM Gwalior with interests in software engineering, machine learning, and open-source development. I've worked on
  <span className="font-semibold text-cyan-300">
    {" "}
    Graph Learning
  </span>
  ,
  <span className="font-semibold text-violet-300">
    {" "}
    NLP
  </span>
  ,
  <span className="font-semibold text-pink-300">
    {" "}
    Computer Vision
  </span>
  , and
  <span className="font-semibold text-cyan-300">
    {" "}
    Full-Stack Applications
    {" "}
  </span>
  through internships, research projects, and hackathons.
</p>

          <div
            className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-4
            lg:justify-start
          "
          >
            <a
              href="#projects"
              className="
group
relative
overflow-hidden
rounded-full
bg-gradient-to-r
from-cyan-500
via-violet-500
to-pink-500
px-8
py-3
font-semibold
text-white
transition-all
duration-300
hover:scale-105
hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]
"
            >
              View Projects
            </a>

            <a
              href="#"
              className="
rounded-full
border
border-white/10
bg-white/5
backdrop-blur-xl
px-8
py-3
font-semibold
text-white
transition-all
duration-300
hover:border-violet-400
hover:text-violet-300
hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
"
            >
              Resume
            </a>
          </div>

          <div
            className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-3
            lg:justify-start
          "
          >
            {["600+ DSA Problems", "SDE Summer Intern @ TVS Credit", "Flipkart GRID 7.0 Semi-Finalist", "2nd Runner-up TVS Credit EPIC 7.0", "2× Kornia Contributor", "ABV-IIITM Gwalior", "Semi-Finalist TenzorX 2026 National AI Hackathon"].map((item) => (
              <div
                key={item}
                className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-sm
                text-slate-300
                backdrop-blur-lg
              "
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
          flex
          flex-col
          items-center
          justify-center
          gap-6
        "
        >
          <div
            className="
            relative
          "
          >
            <div
              className="
              absolute
              inset-0
              rounded-full
              bg-cyan-400/20
              blur-3xl
            "
            />

            <div className="relative flex items-center justify-center">
              <div
                className="
    absolute
    h-[330px]
    w-[330px]
    rounded-full
    bg-cyan-400/20
    blur-[100px]
  "
              />

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div
                  className="
      rounded-full
      p-[5px]
      bg-gradient-to-r
      from-cyan-400
      via-violet-500
      to-pink-500
    "
                >
                  <img
                    src={profile}
                    alt="Nilay"
                    className="
        h-[280px]
        w-[280px]
        md:h-[360px]
        md:w-[360px]
        rounded-full
        object-cover
        bg-slate-900
      "
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div
            className="
            flex
            items-center
            gap-5
          "
          >
            {socials.map((social, index) => {
              const Icon = social.icon;

              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
group
flex
h-14
w-14
items-center
justify-center
rounded-full
border
border-white/10
bg-white/5
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-2
hover:scale-110
"
                  style={{
                    "--hover-color": social.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 25px ${social.color}`;
                    e.currentTarget.style.color = social.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
