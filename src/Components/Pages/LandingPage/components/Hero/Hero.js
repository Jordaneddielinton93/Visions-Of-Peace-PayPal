import { HeroStyled } from "./Hero.style";
import IMG1 from "../../../../Images/image1.png"
import TextScroller from "../../../../TextScroller/TextScroller";
import { useContext } from "react";
import { pageWrapper } from "../../../../App/App";
const Hero = () => {

  let stateObj=useContext(pageWrapper)
  
  return ( 
    <HeroStyled>
      <h1 className="DISCLAIMER">THIS SITE IS STILL BEING MADE</h1>

      <img srcSet={IMG1} alt="" />
      <TextScroller
        Left={"-"+stateObj.offSetY}
        Top={"0"}
        Text={"- Sage - - Spell Jars - - Candels - - Protection Stones - - Chakra Braceletes -- Sage - - Spell Jars - - Candels - - Protection Stones - - Chakra Braceletes"}
        />
      <TextScroller
        Left={stateObj.offSetY}
        Top={"80"}
        Text={"Chakra Braceletes -- Sage - - Spell Jars - - Candels - - Protection Stones - - Chakra Braceletes"}
        />

    </HeroStyled>
   );
}
 
export default Hero;