
import css from "./SkillList.module.css"
import Image from "next/image";
import { useState } from "react"
import Link from "next/link"
// __________ Icon imports ___________________
import JavaScriptIcon from "./iconSvg/JavaScriptIcon"
import CssIcon from "./iconSvg/CssIcon";
import HtmlIcon from "./iconSvg/HtmlIcon";
import NodeJsIcon from "./iconSvg/NodeJsIcon";
import ReactIcon from "./iconSvg/ReactIcon";
import MongoDbIcon from "./iconSvg/MongoDbIcon";
import BootstrapIcon from "./iconSvg/BootstrapIcon";
import AffinityDesignerIcon from "./iconSvg/AffinityDesignerIcon";
import NextJsIcon from "./iconSvg/NextJsIcon";
import TypeScriptIcon from "./iconSvg/TypeScriptIcon";
import EthersIcon from "./iconSvg/EthersIcon";
import ScssIcon from "./iconSvg/ScssIcon";
import ThreeJsIcon from "./iconSvg/ThreeJsIcon";
import GsapIcon from "./iconSvg/GsapIcon";
import BlenderIcon from "./iconSvg/BlenderIcon";

export function Javascript() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <JavaScriptIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>Javascript</i></b> often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web.

                <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                    <a target="_blank" rel="noreferrer" >Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://icons8.com">
                    <a target="_blank" rel="noreferrer"  >Icons8</a>
                </Link>
            </div>
            <p>Javascript</p>
        </div>
    )
}

export function CSS() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <CssIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>Cascading Style Sheets</i></b> is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide. <br />

                <Link href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://icons8.com">
                    <a target="_blank" rel="noreferrer">Icons8</a>
                </Link>
            </div>
            <p>CSS</p>
        </div>
    )
}

export function Html() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <HtmlIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                The <b><i>HyperText Markup Language</i></b> or HTML is the standard markup language for documents designed to be displayed in a web browser. <br />

                <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://icons8.com">
                    <a target="_blank" rel="noreferrer">Icons8</a>
                </Link>
            </div>
            <p>Html</p>
        </div>
    )
}

export function NodeJs() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <NodeJsIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>Node JS</i></b> is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.<br />

                <Link href="https://nodejs.dev">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
            </div>
            <p>NodeJS</p>
        </div>
    )
}

export function React() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <ReactIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>React</i></b> is a free and open-source front-end JavaScript library for building user interfaces based on UI components. <br />

                <Link href="https://reactjs.org/">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://icons8.com">
                    <a target="_blank" rel="noreferrer">Icons8</a>
                </Link>
            </div>
            <p>ReactJS</p>
        </div>
    )
}

export function MongoDb() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <MongoDbIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>MongoDB</i></b>  is an open source NoSQL database management program. It's a tool that can manage document-oriented information, store or retrieve information. <br />

                <Link href="https://www.mongodb.com/">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://icons8.com">
                    <a target="_blank" rel="noreferrer">Icons8</a>
                </Link>
            </div>
            <p>MongoDB</p>
        </div>
    )
}

export function Bootstrap() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <BootstrapIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>Bootstrap</i></b>   is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.  <br />

                <Link href="https://getbootstrap.com/">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://getbootstrap.com/docs/5.0/about/brand/">
                    <a target="_blank" rel="noreferrer">Bootstrap</a>
                </Link>
            </div>
            <p>Bootstrap</p>
        </div>
    )
}

export function AffinityDesigner() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
                <AffinityDesignerIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>Affinity Designer</i></b>   is a vector graphics editor developed by Serif for macOS, iPadOS, and Microsoft Windows. <br />

                <Link href="https://www.mongodb.com/">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://icons8.com">
                    <a target="_blank" rel="noreferrer">Icons8</a>
                </Link>
            </div>
            <p>Affinity Designer</p>
        </div>
    )
}

export function NextJs() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <NextJsIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>Next.js</i></b>    is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites. <br />

                <Link href="https://nextjs.org/">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://vercel.com/design/brands#next-js">
                    <a target="_blank" rel="noreferrer">Vercel</a>
                </Link>
            </div>
            <p>NextJS</p>
        </div>
    )
}

export function TypeScript() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <TypeScriptIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>TypeScript</i></b>    is a free and open source programming language developed and maintained by Microsoft. It is designed for the development of large applications and transpiles to JavaScript. <br />

                <Link href="https://www.typescriptlang.org/">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://icons8.com">
                    <a target="_blank" rel="noreferrer">Icons8</a>
                </Link>
            </div>
            <p>TypeScript</p>
        </div>
    )
}

export function Phaser() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <span style={{ margin: "1rem" }}>
                <Image height="60px" width="60px" src="/PhaserIcon.png" />
            </span>
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>Phaser</i></b>    is a 2D game framework used for making HTML5 games for desktop and mobile. <br />

                <Link href="https://phaser.io/">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://phaser.io/download/logo">
                    <a target="_blank" rel="noreferrer">Phaser</a>
                </Link>
            </div>
            <p>Phaser</p>
        </div>
    )
}

export function Ethers() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <EthersIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                The <b><i>ethers.js</i></b>  library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem. <br />

                <Link href="https://docs.ethers.io/v5/">
                    <a target="_blank" rel="noreferrer">Learn more</a>
                </Link> <br />
                Icon from :
                <Link href="https://seeklogo.com/">
                    <a target="_blank" rel="noreferrer">Seeklogo</a>
                </Link>
            </div>
            <p>EthersJS</p>
        </div>
    )
}


export function Scss() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <ScssIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>Sass</i></b> is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.  <br />

                <Link href="https://sass-lang.com/">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://icons8.com">
                    <a target="_blank" rel="noreferrer">Icons8</a>
                </Link>
            </div>
            <p>SCSS / SASS</p>
        </div>
    )
}

export function ThreeJs() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <ThreeJsIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>Three.js</i></b>  is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL.  <br />

                <Link href="https://threejs.org/">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://github.com/mrdoob/three.js/blob/38bf5f47a8c01a1d12d16a41b4097dc9ee31daad/files/icon.svg">
                    <a target="_blank" rel="noreferrer">Github</a>
                </Link>
            </div>
            <p>ThreeJS</p>
        </div>
    )
}

export function Gsap() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <GsapIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>GSAP</i></b>   is a robust JavaScript toolset to build high-performance animations that work in every major browser.  <br />

                <Link href="https://greensock.com/gsap/">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://worldvectorlogo.com/">
                    <a target="_blank" rel="noreferrer">Worldverctorlogo</a>
                </Link>
            </div>
            <p>Gsap</p>
        </div>
    )
}

export function Blender() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <BlenderIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>Blender</i></b> is a free and open-source 3D computer graphics software tool set used for creating animated films, visual effects, art, 3D-printed models, motion graphics, interactive 3D applications, virtual reality, and, formerly, video games.<br />

                <Link href="https://www.blender.org/">
                    <a target="_blank" rel="noreferrer">Learn more</a> 
                </Link><br />
                Icon from :
                <Link href="https://icons8.com">
                    <a target="_blank" rel="noreferrer">Icons8</a>
                </Link>
            </div>
            <p>Blender</p>
        </div>
    )
}


