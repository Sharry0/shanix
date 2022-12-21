
import css from "./Navbar.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {

  return (
    <div className={css.navbar}>
      <span className={css.navShadow}></span>
      <div className={css.logo}>
        <Link href="/">
          <Image height="50" width="50" src="/monogramLogo.svg" alt="logo" />
        </Link>
      </div>
      <div className={css.menu}>
        <Link href="#projects">Projects</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </div>
  )
}
