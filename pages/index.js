
import css from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={css.homeContainer} >

      <div className={css.svgContainer}>
        <object className={css.svgObject} type="image/svg+xml" data="monogramAnimated.svg"></object>
      </div>

    </div>
  )
}
