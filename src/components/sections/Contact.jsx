import { useState } from "react";
import { motion } from "framer-motion";
import { socials } from "../../data/socials";

const interests = [
  "Software Engineering",
  "Machine Learning",
  "Open Source",
  "Generative AI",
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    const formData = new FormData(e.target);

    try {
      const response = await fetch(
        import.meta.env.VITE_FORMSPREE_ENDPOINT,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      console.log(import.meta.env);
      console.log(
        import.meta.env.VITE_FORMSPREE_ENDPOINT,
      );

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        border-t
        border-orange-500/20
        bg-black/40
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
            lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)]
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
              Contact
            </div>

            <h2
              className="
                font-display
                text-[clamp(4.2rem,11vw,11rem)]
                font-semibold
                leading-[0.76]
                tracking-[-0.07em]
                text-white
              "
            >
              Let's{" "}
              <span className="text-stroke-orange">
                Connect
              </span>
            </h2>
          </div>

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
            Have an opportunity, project or research
            collaboration in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div
          className="
            grid
            border-b
            border-white/15
            lg:grid-cols-[minmax(280px,0.52fr)_minmax(0,1fr)]
          "
        >
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              py-10
              sm:py-12
              lg:border-r
              lg:border-white/15
              lg:pr-10
              lg:py-16
            "
          >
            <h3
              className="
                font-display
                text-3xl
                font-medium
                leading-tight
                text-white
                sm:text-4xl
              "
            >
              Currently Interested In
            </h3>

            <div
              className="
                mt-8
                border-t
                border-white/15
              "
            >
              {interests.map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-white/15
                    py-4
                  "
                >
                  <span
                    className="
                      font-mono-tech
                      text-[9px]
                      tracking-[0.18em]
                      text-orange-400
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="
                      font-mono-tech
                      text-[11px]
                      uppercase
                      tracking-[0.09em]
                      text-white/55
                      transition-colors
                      duration-200
                      group-hover:text-amber-300
                    "
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-2
              "
            >
              {socials.map((social, index) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.94 }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      border
                      border-white/20
                      text-white/65
                      transition-all
                      duration-300
                      hover:border-orange-500
                      hover:bg-orange-500/10
                      hover:text-amber-300
                    "
                  >
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </div>
          </motion.aside>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              border-t
              border-white/15
              py-10
              sm:py-12
              lg:border-t-0
              lg:py-16
              lg:pl-12
              xl:pl-16
            "
          >
            <div
              className="
                grid
                gap-x-6
                gap-y-7
                sm:grid-cols-2
              "
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="
                  min-h-14
                  border-b
                  border-white/25
                  bg-transparent
                  px-0
                  font-mono-tech
                  text-sm
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-white/35
                  focus:border-amber-400
                  focus:bg-orange-500/[0.025]
                  focus:px-3
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="
                  min-h-14
                  border-b
                  border-white/25
                  bg-transparent
                  px-0
                  font-mono-tech
                  text-sm
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-white/35
                  focus:border-amber-400
                  focus:bg-orange-500/[0.025]
                  focus:px-3
                "
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="
                  min-h-14
                  border-b
                  border-white/25
                  bg-transparent
                  px-0
                  font-mono-tech
                  text-sm
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-white/35
                  focus:border-amber-400
                  focus:bg-orange-500/[0.025]
                  focus:px-3
                  sm:col-span-2
                "
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Message"
                required
                className="
                  resize-none
                  border-b
                  border-white/25
                  bg-transparent
                  px-0
                  py-4
                  font-mono-tech
                  text-sm
                  text-white
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-white/35
                  focus:border-amber-400
                  focus:bg-orange-500/[0.025]
                  focus:px-3
                  sm:col-span-2
                "
              />

              <div
                className="
                  flex
                  flex-col
                  gap-5
                  sm:col-span-2
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    group
                    relative
                    min-h-14
                    min-w-[210px]
                    overflow-hidden
                    border
                    border-orange-500
                    bg-transparent
                    px-8
                    font-mono-tech
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.13em]
                    text-orange-300
                    transition-colors
                    duration-300
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                  "
                >
                  <span
                    className="
                      absolute
                      inset-0
                      origin-left
                      scale-x-0
                      bg-orange-600
                      transition-transform
                      duration-500
                      ease-out
                      group-hover:scale-x-100
                    "
                  />
                  <span
                    className="
                      relative
                      z-10
                      transition-colors
                      duration-300
                      group-hover:text-black
                    "
                  >
                    {isSubmitting
                      ? "Sending..."
                      : "Send Message"}
                  </span>
                </button>

                <div
                  className="
                    min-h-7
                    font-mono-tech
                    text-xs
                  "
                >
                  {status === "success" && (
                    <p className="text-amber-300">
                      Message sent successfully!
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-orange-400">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
