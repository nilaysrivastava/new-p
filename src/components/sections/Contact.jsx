import { useState } from "react";
import { motion } from "framer-motion";
import { socials } from "../../data/socials";

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
  import.meta.env.VITE_FORMSPREE_ENDPOINT
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
        py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
          px-6
        "
      >
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
            Let's Connect
          </h2>

          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-center
              text-lg
              leading-8
              text-slate-300
            "
          >
            Have an opportunity, project or research
            collaboration in mind? I'd love to hear about it.
          </p>
        </motion.div>

        <div
          className="
            mt-20
            grid
            gap-8
            lg:grid-cols-[2fr_1fr]
          "
        >
          {/* FORM */}

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
            "
          >
            <div className="grid gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  outline-none
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  outline-none
                "
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  outline-none
                "
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Message"
                required
                className="
                  resize-none
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  px-5
                  py-4
                  text-white
                  outline-none
                "
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-500
                  via-violet-500
                  to-pink-500
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(139,92,246,0.45)]
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400">
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </motion.form>

          {/* SIDE CARD */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                text-white
              "
            >
              Currently Interested In
            </h3>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-3
              "
            >
              {[
                "Software Engineering",
                "Machine Learning",
                "Open Source",
                "Generative AI",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-4
                    py-3
                    text-slate-300
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* QUICK CONNECT */}

        <div
          className="
            mt-14
            flex
            justify-center
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    `0 0 25px ${social.color}`;
                  e.currentTarget.style.color =
                    social.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "none";
                  e.currentTarget.style.color =
                    "#ffffff";
                }}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;