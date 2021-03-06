
import { useContext } from "react";
import { pageWrapper } from "../../App/App";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Selling from "./components/Selling/Selling";
import { LandingPageStyled } from "./LandingPage.style";

const LandingPage = () => {

  let stateObj=useContext(pageWrapper)

  return ( 
    <LandingPageStyled positionForNavClick={stateObj}>
      <Hero/>
      <About/>
      <Selling/>
      
      
      
    </LandingPageStyled>
   );
}
 
export default LandingPage;