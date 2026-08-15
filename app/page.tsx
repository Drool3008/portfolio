import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <TopBar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Achievements />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
