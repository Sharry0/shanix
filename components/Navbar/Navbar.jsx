
import css from "./Navbar.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {

  return (
    <div className={css.navbar}>
      <div>
        <Link href="/">
          <a>
            <Image className={css.logo} src="/monogramLogo.svg" alt="logo" />
          </a>
        </Link>
      </div>
      <div className={css.menu}>
        <Link href="#projects">
          <a>Projects</a>
        </Link>
        <Link href="#skills">
          <a>Skills</a>
        </Link>
        <Link href="#contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  )
}
