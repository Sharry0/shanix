
import css from "./Skills.module.css"
import Image from "next/image"
import { Javascript, CSS, Html, NodeJs, React, MongoDb } from "./SkillList"

export default function Skills() {
    const skills = {

    }

    // ___ confident Skills: Javascript, Html, CSS, MongoDb, Express, NodeJS, React, NextJs,  Affinity Designer, bootstrap _____
    // ___ familiar Skills:  TypeScript, Phaser, ethers, scss, threeJs. gsap  _____
    return (
        <div className={css.skillSection}>
            <h3>Skills / Tools</h3>
            <div className={css.skillsContainer}>
                <Javascript />
                <CSS />
                <Html />
                <NodeJs />
                <React />
                <MongoDb />

            </div>
        </div>
    )
}
