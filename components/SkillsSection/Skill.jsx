
import css from "./Skill.module.css"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export  function Skill({ icon, boldedText, text, learnLink, iconLink, iconPage, title }) {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className={css.skill} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>

      <Image height="60" width="60" src={`/SkillsSvg/${icon}`} alt={`${title} logo`} />
      <div style={{ display: showInfo ? "block" : "none" }} >
        <b><i>{boldedText}</i></b>{text}<br />
        <Link legacyBehavior href={learnLink}>
          <a target="_blank" rel="noreferrer">Learn more</a>
        </Link><br />
        {iconLink && <>
          {`Icon from: `}
          <Link legacyBehavior href={iconLink}>
            <a target="_blank" rel="noreferrer">{iconPage}</a>
          </Link>
        </>
        }
      </div>
      <p>{title}</p>
    </div>
  )
}


