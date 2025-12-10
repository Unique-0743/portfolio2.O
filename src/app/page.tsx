import { Hero } from "./(home)/components/Hero";
import { Projects } from "./(home)/components/Projects";
import { TechStack } from "./(home)/components/TechStack";
import { Contact } from "./(home)/components/Contact";
import Education from "./(home)/components/Education";

export default function Home() {
  return (
    <>
      <Hero />
      <Education/>
      <TechStack/>
      <Projects />
      <Contact/>
    </>
  );
}
