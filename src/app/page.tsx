import Image from "next/image";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import FeaturedPublications from "./components/FeaturedPublications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <section>
      <Hero />
      <Featured />
      <Projects />
      <FeaturedPublications />
      <Contact />
    </section>
  );
}
