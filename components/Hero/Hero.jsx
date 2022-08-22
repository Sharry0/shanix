
import css from "./Hero.module.css"
import Image from "next/image"
import HeroImg from "./HeroImg"
import Link from "next/link"

export default function Hero() {



    return (
        <section className={css.hero} id="hero">
            <div className={css.heroText}>

                <h1>Hi, my name is Sharone. </h1>
                <h2>I'm a Full-Stack Developer with an interest in Web3.</h2>
                <div className={css.heroSocials}>
                    <Link href="https://github.com/Sharry0" target="_blank" rel="noreferrer">
                        <a>
                            <Image src="/githubLogo.png" width="35px" height="35px" alt="github link"/>
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/sharone-nixon-918461248/" target="_blank" rel="noreferrer">
                        <a>
                            <Image src="/linkedIn.png" width="35px" height="35px" alt="linkedIn link"/>
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
                <HeroImg />
            </div>
        </section>
    )
}
