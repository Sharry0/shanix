
import css from "./Navbar.module.css"

export default function Navbar() {

  return (
    <div className={css.navbar}>
      <div>
        <img className={css.logo} src="/monogramLogo.svg" alt="" />
      </div>
      <div className={css.menu}>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}
