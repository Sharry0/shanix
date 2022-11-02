
import css from "./Projects.module.css"
import ImageSlider from "../ImageSlider/ImageSlider"

export default function Projects() {

  const CgsImages = [
    "/CGS/CGS_1.png",
    "/CGS/CGS_2.png",
    "/CGS/CGS_3.png",
    "/CGS/CGS_4.png",
    "/CGS/CGS_5.png",
    "/CGS/CGS_6.png",
  ]

  return (
    <section className={css.projectsSection} id="projects">


      <h2>Projects</h2>
      <ImageSlider images={CgsImages} githubRepo={"https://github.com/Sharry0/CarGoSpace"} />


    </section>
  )
}
