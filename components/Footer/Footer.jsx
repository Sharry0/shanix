
import css from "./Footer.module.css"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <section className={css.footerSection}>
      <div className={css.west}>
        <Image height="50px" width="50px" src="/monogramLogo.svg" alt="logo" />
      </div>

      <div className={css.east}>
        <p>&copy;2022 Sharone</p>
        <div>
          <Link href="https://github.com/Sharry0" >
            <a target="_blank" rel="noreferrer">
              <Image src="/githubLogo.png" width="25px" height="25px" alt="github link" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/sharone-nixon-918461248/" >
            <a target="_blank" rel="noreferrer">
              <Image src="/linkedIn.png" width="25px" height="25px" alt="linkedIn link" />
            </a>
          </Link>
          <Link href="https://www.xing.com/profile/Sharone_Nixon/cv" >
            <a target="_blank" rel="noreferrer">
              <Image src="/xingLogo.png" width="25px" height="25px" alt="linkedIn link" />
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
