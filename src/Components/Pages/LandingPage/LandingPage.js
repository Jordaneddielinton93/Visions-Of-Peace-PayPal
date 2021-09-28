
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Selling from "./components/Selling/Selling";
import { LandingPageStyled } from "./LandingPage.style";

const LandingPage = () => {
  return ( 
    <LandingPageStyled>
      <Hero/>
      <Intro/>
      <Selling/>
    </LandingPageStyled>
   );
}
 
export default LandingPage;