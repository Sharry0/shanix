import css from "./Contact.module.css";
import { Canvas } from "@react-three/fiber";
import Boxes from "../Objects/Box/ContactBox";
import Bulb from '../Objects/Lightbulb/Bulb';


export default function Contact() {

  return (
    <section className={css.contactSection} id="contact">
      <h2>Contact</h2>
      <div className={css.canvas}>
      </div>
      <Canvas shadows={true} camera={{ position: [0, 0, 20] } }>
          <Boxes/>
        <Bulb />
      </Canvas>
      <div className={css.form} >
        <form action="https://formsubmit.co/b976dc71c2bc87cbaa28fef34037fe61" method="POST" >

          <input type="hidden" name="_next" value="http://sharone.dev/thanks" />

          <div className={css.input} >
            {/* <label htmlFor="firstname">Firstname</label> */}
            <input name="Firstname" type="text" id="firstname" placeholder="Firstname" />
          </div>

          <div className={css.input} >
            {/* <label htmlFor="lastname">Lastname</label> */}
            <input name="Lastname" type="text" id="lastname" placeholder="Lastname" />
          </div>

          <div className={css.input}>
            {/* <label htmlFor="eMail">E-Mail</label> */}
            <input name="E-Mail" type="text" id="eMail" placeholder="E-Mail" required />
          </div>

          <div className={css.input}>
            {/* <label htmlFor="message">Message</label> */}
            <textarea name="Message" id="message" cols="30" rows="5" placeholder="Leave your message here..."></textarea>
          </div>

          <button type="submit" className={css.btn}>Submit</button>

        </form>
      </div>
    </section>
  )
}

//
//<div className={css.contact} >
//        <h2>Contact</h2>
//        <form className={css.contactForm} action="https://formsubmit.co/b976dc71c2bc87cbaa28fef34037fe61" method="POST" >

        //  <input type="hidden" name="_next" value="http://localhost:3000/thanks" />

        //  <div className={css.input} >
        //    {/* <label htmlFor="firstname">Firstname</label> */}
        //    <input name="Firstname" type="text" id="firstname" placeholder="Firstname" />
        //  </div>

        //  <div className={css.input} >
        //    {/* <label htmlFor="lastname">Lastname</label> */}
        //    <input name="Lastname" type="text" id="lastname" placeholder="Lastname" />
        //  </div>

        //  <div className={css.input}>
        //    {/* <label htmlFor="eMail">E-Mail</label> */}
        //    <input name="E-Mail" type="text" id="eMail" placeholder="E-Mail" required />
        //  </div>

        //  <div className={css.input}>
        //    {/* <label htmlFor="message">Message</label> */}
        //    <textarea name="Message" id="message" cols="30" rows="5" placeholder="Leave your message here..."></textarea>
        //  </div>

        //  <button type="submit" className={css.btn}>Submit</button>

//        </form>
//      </div>
//