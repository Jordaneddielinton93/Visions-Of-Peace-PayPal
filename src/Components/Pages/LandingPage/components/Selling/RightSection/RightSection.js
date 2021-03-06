import { RightSectionStyle } from "./RightSection.styles";
import { FcPrevious } from 'react-icons/fc';
import CardComp from "./CardComps/CardComp";

import img1 from "../../../../../Images/firething.png"
import img2 from "../../../../../Images/image1.png"
import img3 from "../../../../../Images/image2.png"
import { useState } from "react";

const RightSection = () => {

  let imageArray=[
    {img1:img2,discription:"number 1 brief discription",price:"£5.00"},
    {img1:img3,discription:"number 2 of what the item",price:"£15.00"},
    {img1:img2,discription:"number 3 is about im not",price:"£25.00"},
    {img1:img2,discription:"number 3 is about im not",price:"£25.00"},
    {img1:img1,discription:"number 4 sure what yet",price:"£35.00"}
    
  ]

  let [shownImg,setShownImg]=useState(0)

  return ( 
    <RightSectionStyle>

      <div className="leftArrowContainer">
        <FcPrevious className="sellArrowSvg" onClick={()=>setShownImg(shownImg!==4?shownImg+1:0)}/>
        {/* every click of the button will add one to the state 
        if the state is 4 put it back to 0
         */}
      </div>


        {/* if the count is one of the numbers below mpve the position 300px left */}
      <div className="ImgSliderCont">
        <div className="ImgSliderCont_slider" style={{
          left:
             shownImg===0 ?"0px":
            (shownImg===1)?"-300px":
            (shownImg===2)?"-600px":
            (shownImg===3)?"-900px":"-1200px"}}>

          {imageArray.map((item,index)=>{
            return (
              <CardComp 
              opacity={index!==shownImg?"0.3":"1"}
              height={index!==shownImg?"70%":"90%"}
              boxShadow={index!==shownImg?"none":"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"}

              image={item.img1}
              price={item.price}
              discription={item.discription}
              />
            )
          })}
          
        </div>
      </div>
    
    </RightSectionStyle>
   );
}
 
export default RightSection;