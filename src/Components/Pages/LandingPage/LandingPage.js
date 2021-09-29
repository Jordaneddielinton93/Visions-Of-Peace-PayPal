
import { useContext } from "react";
import { pageWrapper } from "../../App/App";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Selling from "./components/Selling/Selling";
import { LandingPageStyled } from "./LandingPage.style";

const LandingPage = () => {

  let stateObj=useContext(pageWrapper)

  return ( 
    <LandingPageStyled positionForNavClick={stateObj}>
      <Hero/>
      <Intro/>
      <Selling/>
      <h1>gallary will go here</h1>
    </LandingPageStyled>
   );
}
 
export default LandingPage;