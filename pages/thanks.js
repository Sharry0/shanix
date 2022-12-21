
import css from "../styles/Thanks.module.css"
import Link from "next/link"

export default function thanks() {
  return (
    <div className={css.thanksPage}>
      <h1>Thank you for the message,</h1>
      <h2>i will contact you as soon as possible.</h2>
      <Link legacyBehavior href="/">
        <a>Back to home</a>
      </Link>

    </div>
  )
}
