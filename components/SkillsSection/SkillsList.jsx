
import css from "./SkillsList.module.css"
import { Skill } from "./Skill"
// __________ Icon imports ___________________
import JavaScriptIcon from "./iconSvg/JavaScriptIcon"
import CssIcon from "./iconSvg/CssIcon";
import HtmlIcon from "./iconSvg/HtmlIcon";
import NodeJsIcon from "./iconSvg/NodeJsIcon";
import ReactIcon from "./iconSvg/ReactIcon";
import MongoDbIcon from "./iconSvg/MongoDbIcon";
import ExpressIcon from "./iconSvg/ExpressIcon"
import BootstrapIcon from "./iconSvg/BootstrapIcon";
import AffinityDesignerIcon from "./iconSvg/AffinityDesignerIcon";
import NextJsIcon from "./iconSvg/NextJsIcon";
import EthersIcon from "./iconSvg/EthersIcon";
import ScssIcon from "./iconSvg/ScssIcon";
import ThreeJsIcon from "./iconSvg/ThreeJsIcon";
import GsapIcon from "./iconSvg/GsapIcon";
import TypeScriptIcon from "./iconSvg/TypeScriptIcon";
import BlenderIcon from "./iconSvg/BlenderIcon";

export default function Skills() {

  return (
    <section className={css.skillSection} id="skills">
      <h2>Skills / Tools</h2>
      <div className={css.skillsContainer}>
        <div>
          <Skill
            icon={<JavaScriptIcon />}
            boldedText={"JavaScript "}
            text={"often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web."}
            learnLink={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"Javascript"}
          />
          <Skill
            icon={<CssIcon />}
            boldedText={"Cascading Style Sheets "}
            text={"is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide."}
            learnLink={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"CSS"}
          />
          <Skill
            icon={<HtmlIcon />}
            boldedText={"HyperText Markup Language "}
            text={"or HTML is the standard markup language for documents designed to be displayed in a web browser."}
            learnLink={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"Html"}
          />
          <Skill
            icon={<NodeJsIcon />}
            boldedText={"Node JS "}
            text={"is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications."}
            learnLink={"https://nodejs.dev"}
            title={"Node JS"}
          />
          <Skill
            icon={<ExpressIcon />}
            boldedText={"Express "}
            text={"is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."}
            learnLink={"https://expressjs.com/"}
            iconLink={"https://icon-icons.com/"}
            iconPage={"icon-icons"}
            title={"Express"}
          />
        </div>
        <div>
          <Skill
            icon={<ReactIcon />}
            boldedText={"React "}
            text={"is a free and open-source front-end JavaScript library for building user interfaces based on UI components."}
            learnLink={"https://reactjs.org/"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"React"}
          />
          <Skill
            icon={<MongoDbIcon />}
            boldedText={"MongoDB "}
            text={"is a free and open-source front-end JavaScript library for building user interfaces based on UI components."}
            learnLink={"https://www.mongodb.com/"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"MongoDB"}
          />
          <Skill
            icon={<BootstrapIcon />}
            boldedText={"Bootstrap "}
            text={"is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."}
            learnLink={"https://getbootstrap.com/"}
            iconLink={"https://getbootstrap.com/docs/5.0/about/brand/"}
            iconPage={"bootstrap"}
            title={"Bootstrap"}
          />
          <Skill
            icon={<AffinityDesignerIcon />}
            boldedText={"Affinity Designer "}
            text={"is a vector graphics editor developed by Serif for macOS, iPadOS, and Microsoft Windows."}
            learnLink={"https://affinity.serif.com/de/"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"Affinity Designer"}
          />
          <Skill
            icon={<NextJsIcon />}
            boldedText={"Next JS "}
            text={"is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites."}
            learnLink={"https://nextjs.org/"}
            iconLink={"https://vercel.com/design/brands#next-js"}
            iconPage={"vercel"}
            title={"Next JS"}
          />
        </div>
        <div>
          <Skill
            icon={<EthersIcon />}
            boldedText={"The ethers.js "}
            text={"library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem."}
            learnLink={"https://docs.ethers.io/v5/"}
            iconLink={"https://seeklogo.com/"}
            iconPage={"seeklogo"}
            title={"EthersJS"}
          />
          <Skill
            icon={<ScssIcon />}
            boldedText={"SASS "}
            text={"is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets."}
            learnLink={"https://sass-lang.com/"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"SCSS / SASS"}
          />
          <Skill
            icon={<ThreeJsIcon />}
            boldedText={"Three.js "}
            text={"is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL."}
            learnLink={"https://threejs.org/"}
            title={"Three JS"}
          />
          <Skill
            icon={<GsapIcon />}
            boldedText={"GSAP "}
            text={"is a robust JavaScript toolset to build high-performance animations that work in every major browser."}
            learnLink={"https://greensock.com/gsap/"}
            iconLink={"https://worldvectorlogo.com/"}
            iconPage={"worldvectorlogo"}
            title={"GSAP"}
          />
       
        </div>
        {/* <TypeScript /> */}
        {/* <Phaser /> */}
        {/* <Blender /> */}
      </div>
    </section>
  )
}
