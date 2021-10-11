import { LandingPageStyled } from "../LandingPage/LandingPage.style";
import ShopHero from "./components/ShopHero/ShopHero";
import ShopItems from "./components/ShopItems/ShopItems";

const StorePage = () => {
  return ( 
    <LandingPageStyled>
      <ShopHero/>
      <ShopItems/>
    </LandingPageStyled>
   );
}
 
export default StorePage;