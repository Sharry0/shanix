
import css from "./Navbar.module.css"

export default function Navbar() {
  return (
    <div className={css.navbar}>
      {/* affinity designer: make logo small and stroke-width higher */}
        <img className={css.logo} src="/monogram.svg" alt="" />
    </div>
  )
}
