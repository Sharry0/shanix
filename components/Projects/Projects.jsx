
import css from "./Projects.module.css"
import ImageSlider from "../ImageSlider/ImageSlider"

export default function Projects() {

  const cgsImages = [
    "/CGS/CGS_1.png",
    "/CGS/CGS_2.png",
    "/CGS/CGS_3.png",
    "/CGS/CGS_4.png",
    "/CGS/CGS_5.png",
    "/CGS/CGS_6.png",
  ]
  const blerryImages = [
    "/Blerry/Blerry_1.png",
    "/Blerry/Blerry_2.png",
    "/Blerry/Blerry_3.png"
  ]

  // _______ add the right web links !!!!_______________

  return (
    <section className={css.projectsSection} id="projects">
      <h2>Projects</h2>
      <ImageSlider images={cgsImages} githubRepo={"https://github.com/Sharry0/CarGoSpace"} projectName={"CarGoSpace"} webLink={"/"} />
      <ImageSlider images={blerryImages} githubRepo={"https://github.com/Sharry0/Blerry"} projectName={"Blerry"} webLink={"/"} />

    </section>
  )
}
