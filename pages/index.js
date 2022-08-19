
import css from "../styles/Home.module.css";
import LandingSvg from "../components/LandingSvg/LandingSvg";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects"
import Skills from "../components/SkillsSection/Skills";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <LandingSvg />
      <div className={css.home} >
        <Navbar />
        <main className={css.main} >

          <Hero />

          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
