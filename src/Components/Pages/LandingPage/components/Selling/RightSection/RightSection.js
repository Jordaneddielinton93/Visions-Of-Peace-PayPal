import { RightSectionStyle } from "./RightSection.styles";
import firething from "../../../../../Images/firething.png"
const RightSection = () => {
  return ( 
    <RightSectionStyle>
      <header className="rightSectionHeader">
        <h1 className="rightSectionHeader-tile">What I Sell</h1>
        <div className="rightSectionHeader-shop">shop</div>
      </header>

      <main className="rightSectionMain">
        <section className="Main-section-list">
          <h3>Stone</h3>
          <h3>Crystals</h3>
          <h3>Braceletes</h3>
          <h3>Candles</h3>
          <h3>Sage</h3>

        </section>

        <section className="Main-section-list-img-btn">
          <img src={firething} alt="" />
          <button className="GoToStore">Go To Store</button>
        </section>

      </main>
      
    </RightSectionStyle>
   );
}
 
export default RightSection;