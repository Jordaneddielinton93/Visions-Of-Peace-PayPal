import { SellingStyles } from "./Selling.styles";
import img2 from "../../../../Images/image2.png"
import RightSection from "./RightSection/RightSection";
const Selling = () => {
  return ( 


    // the high of the image dictates the size of the container of this component 530px
// so everything is based of percentages%%%

    <SellingStyles>

      <section className="Angel_ImgContainer">
        <img srcSet={img2} alt=""  className="Angel_ImgContainer-img" />
      </section>

      <RightSection/>

    </SellingStyles>
   );
}
 
export default Selling;