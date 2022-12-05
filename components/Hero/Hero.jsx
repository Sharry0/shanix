
import css from "./Hero.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className={css.hero} id="hero">
      <div className={css.heroText}>

        <h1>Hi, my name is Sharone. </h1>
        <h2>I&apos;m a Full-Stack Developer with an interest in Web3.</h2>
        <div className={css.heroSocials}>
          <Link href="https://github.com/Sharry0" >
            <a target="_blank" rel="noreferrer">
              <Image src="/githubLogo.png" width="35px" height="35px" alt="github link" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/sharone-nixon-918461248/" >
            <a target="_blank" rel="noreferrer">
              <Image src="/linkedIn.png" width="35px" height="35px" alt="linkedIn link" />
            </a>
          </Link>
          <Link href="https://www.xing.com/profile/Sharone_Nixon/cv" >
            <a target="_blank" rel="noreferrer">
              <Image src="/xingLogo.png" width="35px" height="35px" alt="linkedIn link" />
            </a>
          </Link>
        </div>

        <Link href="#contact">
          <a className={css.heroBtnProject} >Contact</a>
        </Link>
        <Link href="#projects">
          <a className={css.heroBtnContact} >Projects</a>
        </Link>
      </div>
      <div className={css.heroImage}>
        <Image src="/heroImg.svg" layout="fill" priority alt="Hero img. Person standing at a desk, with a monitor infront of him" />
      </div>
    </section>
  )
}
