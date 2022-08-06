
import css from "../styles/Home.module.css";
import LandingSvg from "../components/LandingSvg/LandingSvg";
import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className={css.home} >
      <Navbar />
      <LandingSvg />
      <main className={css.main} >
        <div>
        </div>

        <Hero />

      </main>
    </div>
  )
}
