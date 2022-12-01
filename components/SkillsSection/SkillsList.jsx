
import css from "./SkillsList.module.css"
import { Skill } from "./Skill"

export default function Skills() {

  return (
    <section className={css.skillSection} id="skills">
      <h2>Skills / Tools</h2>
      <div className={css.skillsContainer}>
        <div>
          <Skill
            icon={"JsIcon.svg"}
            boldedText={"JavaScript "}
            text={"often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web."}
            learnLink={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"Javascript"}
          />
          <Skill
            icon={"cssIcon.svg"}
            boldedText={"Cascading Style Sheets "}
            text={"is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide."}
            learnLink={"https://developer.mozilla.org/en-US/docs/Web/CSS"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"CSS"}
          />
          <Skill
            icon={"htmlIcon.svg"}
            boldedText={"HyperText Markup Language "}
            text={"or HTML is the standard markup language for documents designed to be displayed in a web browser."}
            learnLink={"https://developer.mozilla.org/en-US/docs/Web/HTML"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"Html"}
          />
          <Skill
            icon={"nodeIcon.svg"}
            boldedText={"Node JS "}
            text={"is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications."}
            learnLink={"https://nodejs.dev"}
            title={"Node JS"}
          />
          <Skill
            icon={"expressIcon.svg"}
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
            icon={"reactIcon.svg"}
            boldedText={"React "}
            text={"is a free and open-source front-end JavaScript library for building user interfaces based on UI components."}
            learnLink={"https://reactjs.org/"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"React"}
          />
          <Skill
            icon={"mongoIcon.svg"}
            boldedText={"MongoDB "}
            text={"is a free and open-source front-end JavaScript library for building user interfaces based on UI components."}
            learnLink={"https://www.mongodb.com/"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"MongoDB"}
          />
          <Skill
            icon={"bootstrapIcon.svg"}
            boldedText={"Bootstrap "}
            text={"is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."}
            learnLink={"https://getbootstrap.com/"}
            iconLink={"https://getbootstrap.com/docs/5.0/about/brand/"}
            iconPage={"bootstrap"}
            title={"Bootstrap"}
          />
          <Skill
            icon={"affinityDesignerIcon.svg"}
            boldedText={"Affinity Designer "}
            text={"is a vector graphics editor developed by Serif for macOS, iPadOS, and Microsoft Windows."}
            learnLink={"https://affinity.serif.com/de/"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"Affinity Designer"}
          />
          <Skill
            icon={"nextjsIcon.svg"}
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
            icon={"ethersIcon.svg"}
            boldedText={"The ethers.js "}
            text={"library aims to be a complete and compact library for interacting with the Ethereum Blockchain and its ecosystem."}
            learnLink={"https://docs.ethers.io/v5/"}
            iconLink={"https://seeklogo.com/"}
            iconPage={"seeklogo"}
            title={"EthersJS"}
          />
          <Skill
            icon={"sassIcon.svg"}
            boldedText={"SASS "}
            text={"is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets."}
            learnLink={"https://sass-lang.com/"}
            iconLink={"https://icons8.com"}
            iconPage={"icons8"}
            title={"SCSS / SASS"}
          />
          <Skill
            icon={"Three.svg"}
            boldedText={"Three.js "}
            text={"is a cross-browser JavaScript library and application programming interface used to create and display animated 3D computer graphics in a web browser using WebGL."}
            learnLink={"https://threejs.org/"}
            title={"Three JS"}
          />
          <Skill
            icon={"gsap.svg"}
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
