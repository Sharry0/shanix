import css from "./Contact.module.css"

export default function Contact() {
  return (
    <section className={css.contactSection}>
      <h2>Contact</h2>
      <form className={css.contactForm} action="" >

        <div className={css.input} >
          <label htmlFor="firstname">Firstname</label>
          <input type="text" id="firstname" />
        </div>

        <div className={css.input} >
          <label htmlFor="lastname">Lastname</label>
          <input type="text" id="lastname" />
        </div>

        <div className={css.input}>
          <label htmlFor="eMail">E-Mail</label>
          <input type="text" id="eMail" />
        </div>

        <div className={css.input}>
          <label htmlFor="message">Message</label>
          <textarea name="" id="message" cols="30" rows="10"></textarea>
        </div>

        <button className={css.btn}>Submit</button>

      </form>
    </section>
  )
}
