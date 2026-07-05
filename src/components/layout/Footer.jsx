import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        border-t
        border-orange-500/25
        bg-[#030303]
      "
    >
      <button
        type="button"
        onClick={() => scrollToSection("home")}
        className="
          group
          relative
          flex
          w-full
          cursor-pointer
          items-center
          justify-between
          overflow-hidden
          border-b
          border-white/15
          px-5
          py-10
          text-left
          sm:px-8
          sm:py-14
          lg:px-12
          lg:py-16
        "
      >
        <span
          className="
            absolute
            inset-0
            origin-bottom
            scale-y-0
            bg-orange-600
            transition-transform
            duration-700
            ease-out
            group-hover:scale-y-100
          "
        />

        <span
          className="
            relative
            z-10
            font-display
            text-[clamp(3.5rem,10vw,10rem)]
            font-medium
            leading-none
            tracking-[-0.06em]
            text-white
            transition-colors
            duration-500
            group-hover:text-black
          "
        >
          Back to top
        </span>

        <span
          className="
            relative
            z-10
            flex
            h-14
            w-14
            shrink-0
            items-center
            justify-center
            border
            border-orange-500
            text-orange-400
            transition-all
            duration-500
            group-hover:-translate-y-2
            group-hover:border-black
            group-hover:text-black
            sm:h-16
            sm:w-16
          "
        >
          <FaArrowUp />
        </span>
      </button>

      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1600px]
          flex-col
          gap-4
          px-5
          py-7
          sm:px-8
          md:flex-row
          md:items-center
          md:justify-between
          lg:px-12
        "
      >
        <span
          className="
            font-mono-tech
            text-[10px]
            tracking-[0.2em]
            text-orange-400
          "
          aria-hidden="true"
        >
          NS
        </span>

        <p
          className="
            text-sm
            text-slate-500
          "
        >
          Built with ❤️ by Nilay Srivastava • © 2026 All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
