import css from "./Contact.module.css"
import { useState, useEffect } from "react"

export default function Contact() {

  


  return (
    <section className={css.contactSection}>
      <h2>Contact</h2>
      <form className={css.contactForm} action="" >

        <div className={css.input} >
          {/* <label htmlFor="firstname">Firstname</label> */}
          <input type="text" id="firstname" placeholder="Firstname" />
        </div>

        <div className={css.input} >
          {/* <label htmlFor="lastname">Lastname</label> */}
          <input type="text" id="lastname" placeholder="Lastname" />
        </div>

        <div className={css.input}>
          {/* <label htmlFor="eMail">E-Mail</label> */}
          <input type="text" id="eMail" placeholder="E-Mail" />
        </div>

        <div className={css.input}>
          {/* <label htmlFor="message">Message</label> */}
          <textarea name="message" id="message" cols="30" rows="5" placeholder="Leave your message here..."></textarea>
        </div>

        <button className={css.btn}>Submit</button>

      </form>
    </section>
  )
}
