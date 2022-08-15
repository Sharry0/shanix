
import css from "./SkillList.module.css"
import { useEffect, useState } from "react"
// __________ Icon imports ___________________
import JavaScriptIcon from "./iconSvg/JavaScriptIcon"
import CssIcon from "./iconSvg/CssIcon";
import HtmlIcon from "./iconSvg/HtmlIcon";
import NodeJsIcon from "./iconSvg/NodeJsIcon";
import ReactIcon from "./iconSvg/ReactIcon";
import MongoDbIcon from "./iconSvg/MongoDbIcon";

export function Javascript() {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
            <JavaScriptIcon />
            <div style={{ display: showInfo ? "block" : "none" }} >
                <b><i>Javascript</i></b> often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web.
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">Learn more</a> <br />
                Icon from : <a href="https://icons8.com" target="_blank">Icons8</a>
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
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">Learn more</a> <br />
                Icon from : <a href="https://icons8.com" target="_blank">Icons8</a>
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
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">Learn more</a> <br />
                Icon from : <a href="https://icons8.com" target="_blank">Icons8</a>
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
                <a href="https://nodejs.dev" target="_blank">Learn more</a> <br />
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
                <a href="https://reactjs.org/" target="_blank">Learn more</a> <br />
                Icon from : <a href="https://icons8.com" target="_blank">Icons8</a>
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
                <a href="https://www.mongodb.com/" target="_blank">Learn more</a> <br />
                Icon from : <a href="https://icons8.com" target="_blank">Icons8</a>
            </div>
            <p>MongoDB</p>
        </div>
    )
}



