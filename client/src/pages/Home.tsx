import Hero from "../components/Hero";
import InternationalPresence from "../components/InternationalPresence";
import About from "../components/About";
import Services from "../components/Services";
import Leadership from "../components/Leadership";
import ParallaxImage from "../components/ParallaxImage";
import ReferenceProjects from "../components/ReferenceProjects";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import ContactMixed from "../components/ContactMixed";

export default function Home() {
  return (
    <>
      <Hero />
      <InternationalPresence />
      <About />
      <Services />
      <Leadership />
      <ParallaxImage />
      <ReferenceProjects />
      <Stats />
      <CTA />
      <ContactMixed />
    </>
  );
}
