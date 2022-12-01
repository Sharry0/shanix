
import css from "./Skill.module.css"
import { useState } from "react"
import Link from "next/link"


export  function Skill({ icon, boldedText, text, learnLink, iconLink, iconPage, title }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
      {icon}
      <div style={{ display: showInfo ? "block" : "none" }} >
        <b><i>{boldedText}</i></b>{text}<br />
        <Link href={learnLink}>
          <a target="_blank" rel="noreferrer">Learn more</a>
        </Link><br />
        {iconLink && <>
          {`Icon from: `}
          <Link href={iconLink}>
            <a target="_blank" rel="noreferrer">{iconPage}</a>
          </Link>
        </>
        }
      </div>
      <p>{title}</p>
    </div>
  )
}


