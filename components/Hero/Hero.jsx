
import css from "./Hero.module.css"
import githubLogo from "../../public/githubLogo.png"

export default function Hero() {
    return (
        <div className={css.hero}>
            <div className={css.heroText}>

                <h2>Hi, my is Sharone. <br /> I'm a Full-Stack Developer with an interest in Web3.</h2>
                <div>
                    github
                    <a href="">
                        <img src={githubLogo} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
