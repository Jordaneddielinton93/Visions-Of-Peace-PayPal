import { IntroStyles } from "./Intro.style";

const Intro = () => {
  return ( 
    <IntroStyles>
      <section className="Intro-Section1">
        <div className="rectangle"></div>
        <h2 className="intro-Name">LISHA - -</h2>
        <h2 className="intro-Name">-NICOLE</h2>
      </section>

      <section  className="Intro-Section2">
        <p>I hope to help people heal and feel alive with my products</p>
        <q>One step at a time</q>

      </section>

    </IntroStyles>
   );
}
 
export default Intro;