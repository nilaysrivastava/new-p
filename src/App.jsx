import { useEffect, useState } from "react";
import Lenis from "lenis";

import Background from "./components/layout/Background";

import CursorFollower from "./components/ui/CursorFollower";
import ScrollProgress from "./components/ui/ScrollProgress";
import Stardust from "./components/ui/Stardust";
import Preloader from "./components/ui/Preloader";
import EasterEgg from "./components/ui/EasterEgg";
import SectionTransition from "./components/ui/SectionTransition";
import ResumeModal from "./components/ui/ResumeModal";

import Hero from "./components/sections/Hero";
import ScrollStatement from "./components/sections/ScrollStatement";
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


  const PROGRESS_DURATION = 3000;
  const HOLD_DURATION = 500;

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
          <EasterEgg />
          <ResumeModal />

          <main>
            <Hero />
            <SectionTransition
              number="01"
              label="INTERFACE READY"
              word="START"
            />
            <ScrollStatement />
            <SectionTransition number="02" label="TECH STACK" word="STACK" />
            {/* <About /> */}
            <Skills />
            <SectionTransition
              number="03"
              label="FIELD EXPERIENCE"
              word="WORK"
            />
            <Experience />
            <SectionTransition
              number="04"
              label="PROJECT INDEX"
              word="BUILD"
            />
            <Projects />
            <SectionTransition
              number="05"
              label="OPEN SOURCE SIGNAL"
              word="SOURCE"
            />
            <OpenSource />
            <SectionTransition number="06" label="MILESTONES" word="WINS" />
            <Achievements />
            <SectionTransition
              number="07"
              label="FINAL HANDSHAKE"
              word="CONNECT"
            />
            <Contact />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}

export default App;
