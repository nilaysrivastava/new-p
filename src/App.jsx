import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";

import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";

import CursorFollower from "./components/ui/CursorFollower";
import ScrollProgress from "./components/ui/ScrollProgress";
import Stardust from "./components/ui/Stardust";
import Preloader from "./components/ui/Preloader";

import Hero from "./components/sections/Hero";
// import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import OpenSource from "./components/sections/OpenSource";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";

import Footer from "./components/layout/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);


const PROGRESS_DURATION = 1000;
const HOLD_DURATION = 1000;

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, PROGRESS_DURATION + HOLD_DURATION);

  return () => clearTimeout(timer);
}, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Background />
          <Stardust />
          <ScrollProgress />
          <CursorFollower />
          <Navbar />

          <main>
            <Hero />
            {/* <About /> */}
            <Skills />
            <Experience />
            <Projects />
            <OpenSource />
            <Achievements />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
