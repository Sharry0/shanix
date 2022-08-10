
import css from "./Hero.module.css"
import githubLogo from "../../public/githubLogo.png"
import linkedInLogo from "../../public/linkedIn.png"
import Image from "next/image"
import HeroImg from "./HeroImg"

export default function Hero() {



    return (
        <div className={css.hero}>
            <div className={css.heroText}>

                <h1>Hi, my is Sharone. </h1>
                <h2>I'm a Full-Stack Developer with an interest in Web3.</h2>
                <div className={css.heroSocials}>
                    <a href="https://github.com/Sharry0" target="_blank">
                        <Image src={githubLogo} width="35px" height="35px" />
                    </a>
                    <a href="https://www.linkedin.com/in/sharone-nixon-918461248/" target="_blank">
                        <Image src={linkedInLogo} width="35px" height="35px" />
                    </a>
                </div>
                <button className={css.heroBtn} >Find out more</button>
            </div>
            <div className={css.heroImage}>
                <HeroImg />
            </div>
        </div>
    )
}
