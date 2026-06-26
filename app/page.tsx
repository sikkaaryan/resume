import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import NowWorking from "@/components/NowWorking";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main id="top">
      <Nav />
      <Hero />
      <NowWorking />
      <Experience />
      <Projects />
      <GitHubActivity />
      <Skills />
      <Contact />
    </main>
  );
}
