import RightSection from "./RightSection/RightSection";
import { SellingStyles } from "./Selling.styles";
import img2 from "../../../../Images/image2.png"
const Selling = () => {
  return ( 
    <SellingStyles>
      <section className="LeftSection">
        <img src={img2} alt="" width="110%" className="img2-Sell"/>
      </section>

      {/* <RightSection/> */}

    </SellingStyles>
   );
}
 
export default Selling;