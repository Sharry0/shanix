
import css from "../styles/Home.module.css"
import { gsap, Power3 } from "gsap"

export default function Home() {
  return (
    <div className={css.homeContainer} >

      <div className={css.svgContainer}>
        
        <object className={css.svgObject} type="image/svg+xml" data="monogramAnimatedLong.svg"></object>
      </div>

    </div>
  )
}
