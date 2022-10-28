
import css from "./Projects.module.css"
import Image from "next/image"

export default function Projects() {
  return (
    <section className={css.projectsSection} id="projects">


      <h2>Projects</h2>
      <div className={css.some}>

        <div className={css.display}>
          <Image layout="fill" objectFit="contain" src="/CGS/CGS_1.png" alt="" />

        </div>
        <div className={css.displayBottom} >
          <div></div>


        </div>
      </div>


    </section>
  )
}
