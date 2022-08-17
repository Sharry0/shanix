
import css from "./Skills.module.css"
import { Javascript, CSS, Html, NodeJs, React, MongoDb, Bootstrap, AffinityDesigner, NextJs, TypeScript, Phaser, Ethers, Scss, ThreeJs, Gsap, Blender } from "./SkillList"

export default function Skills() {

    // ___ confident Skills: Javascript, Html, CSS, MongoDb, Express, NodeJS, React, NextJs,  Affinity Designer, bootstrap _____
    // ___ familiar Skills:  TypeScript, Phaser, ethers, scss, threeJs, gsap, blender  _____
    return (
        <section className={css.skillSection}>
            <h2>Skills / Tools</h2>
            <div className={css.skillsContainer}>
                <div>
                    <Javascript />
                    <CSS />
                    <Html />
                    <NodeJs />
                    <React />
                </div>
                <div>
                    <MongoDb />
                    <Bootstrap />
                    <AffinityDesigner />
                    <NextJs />
                    <Ethers />
                </div>
                <div>
                    <Scss />
                    <ThreeJs />
                    <Gsap />
                </div>
                {/* <TypeScript /> */}
                {/* <Phaser /> */}
                {/* <Blender /> */}
            </div>
        </section>
    )
}
