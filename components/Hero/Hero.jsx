
import css from "./Hero.module.css"
import githubLogo from "../../public/githubLogo.png"
import Image from "next/image"

export default function Hero() {

 

    return (
        <div className={css.hero}>
            <div className={css.heroText}>

                <h1>Hi, my is Sharone. </h1>
                <h2>I'm a Full-Stack Developer with an interest in Web3.</h2>
                <div>
                    <a href="">
                        <Image src={githubLogo} width="35px" height="35px" />
                    </a>
                </div>
                <button className={css.heroBtn} >Find out more</button>
            </div>
            <div className={css.heroImage}>
                hero image
            </div>
        </div>
    )
}
