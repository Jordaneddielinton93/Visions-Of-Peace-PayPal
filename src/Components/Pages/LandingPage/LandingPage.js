
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import { LandingPageStyled } from "./LandingPage.style";

const LandingPage = () => {
  return ( 
    <LandingPageStyled>
      <Hero/>
      <Intro/>
    </LandingPageStyled>
   );
}
 
export default LandingPage;