import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-8">
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            relative
            flex
            flex-col
            items-center
            gap-4

            border-t
            border-white/10
            pt-8

            md:flex-row
            md:justify-center
          "
        >
          <p
            className="
              text-center
              text-sm
              text-slate-500
            "
          >
            Built with ❤️ by Nilay Srivastava • © 2026 All Rights Reserved
          </p>

          <button
            onClick={() => scrollToSection("home")}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white
              bg-white
              text-black
              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-[0_0_20px_rgba(255,255,255,0.35)]

              md:absolute
              md:right-0
            "
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;