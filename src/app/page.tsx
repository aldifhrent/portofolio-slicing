import AboutMe from "@/components/about-me";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Footer />
    </main>
  );
}
