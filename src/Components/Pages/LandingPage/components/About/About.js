import { AboutStyles } from "./About.style";
import AboutBottom from "./components/AboutBottom";
import AboutTop from "./components/AboutTop";

const About = () => {
  return ( 
    <AboutStyles>
      <div className="About-rectangle-background"></div>
      <AboutTop/>
      <AboutBottom/>
    </AboutStyles>
   );
}
 
export default About;