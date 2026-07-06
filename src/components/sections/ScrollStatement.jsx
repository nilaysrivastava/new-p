import { useState } from "react";

const firstRow = [
  "SOFTWARE ENGINEER",
  "AI/ML DEVELOPER",
  "OPEN SOURCE CONTRIBUTOR",
  "GRAPH LEARNING",
  "NLP",
  "COMPUTER VISION",
];

const secondRow = [
  "FULL STACK APPLICATIONS",
  "HACKATHONS",
  "RESEARCH",
  "DSA",
  "CLOUD",
  "SYSTEM DESIGN",
];

const StatementRow = ({ items, reverse, duration }) => {
  const [paused, setPaused] = useState(false);
  const [hoveredWord, setHoveredWord] = useState(null);

  return (
    <div className="overflow-hidden py-1">
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          animation: `${
            reverse ? "marquee-right" : "marquee-left"
          } ${duration}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
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
            {items.map((item) => {
              const wordKey = `${group}-${item}`;

              return (
                <div
                  key={wordKey}
                  className="
                    flex
                    items-center
                  "
                >
                  <span
                    onMouseEnter={() => setHoveredWord(wordKey)}
                    onMouseLeave={() => setHoveredWord(null)}
                    className={`
                      font-display
                      text-[clamp(2.25rem,5vw,5.5rem)]
                      font-semibold
                      leading-[0.9]
                      tracking-[-0.045em]
                      transition-colors
                      duration-300
                      ${
                        hoveredWord === wordKey
                          ? "text-sky-200"
                          : "text-stroke-accent"
                      }
                    `}
                  >
                    {item}
                  </span>

                  <span
                    className="
                      mx-6
                      h-2
                      w-2
                      rotate-45
                      border
                      border-blue-300
                      sm:mx-10
                      lg:mx-14
                    "
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

const ScrollStatement = () => (
  <section
    className="
        relative
        overflow-hidden
        border-y
        border-blue-300/25
        bg-[#030303]
        py-16
        sm:py-20
        lg:py-24
      "
  >
    <div
      className="
          pointer-events-none
          absolute
          inset-y-0
          left-0
          z-10
          w-16
          bg-gradient-to-r
          from-[#030303]
          to-transparent
          sm:w-32
        "
    />
    <div
      className="
          pointer-events-none
          absolute
          inset-y-0
          right-0
          z-10
          w-16
          bg-gradient-to-l
          from-[#030303]
          to-transparent
          sm:w-32
        "
    />

    <div
      className="
          flex
          flex-col
          gap-7
          sm:gap-10
        "
    >
      <StatementRow items={firstRow} reverse={false} duration={34} />
      <StatementRow items={secondRow} reverse duration={38} />
    </div>
  </section>
);

export default ScrollStatement;
