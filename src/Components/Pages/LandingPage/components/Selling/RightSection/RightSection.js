import { RightSectionStyle } from "./RightSection.styles";
import { FcPrevious } from 'react-icons/fc';
import CardComp from "./CardComps/CardComp";

import img1 from "../../../../../Images/firething.png"
import { useState } from "react";

const RightSection = () => {

  let imageArray=[
    {img1:img1,discription:"number 1"},
    {img1:img1,discription:"number 2"},
    {img1:img1,discription:"number 3"},
    {img1:img1,discription:"number 4"}
    
  ]

  let [shownImg,setShownImg]=useState(0)

  return ( 
    <RightSectionStyle>

      <div className="leftArrowContainer">
        <FcPrevious className="sellArrowSvg" onClick={()=>setShownImg(shownImg!==3?shownImg+1:0)}/>
      </div>


      
      <div className="ImgSliderCont">
        <div className="ImgSliderCont_slider" style={{left:
             shownImg===0 ?"0px":
            (shownImg===1)?"-300px":
            (shownImg===2)?"-600px":"-900px"}}>

          {imageArray.map((item,index)=>{
            return <CardComp 
            opacity={index!==shownImg?"0.3":"1"}
            height={index!==shownImg?"70%":"90%"}
            boxShadow={index!==shownImg?"none":"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"}

            image={item.img1}
            discription={item.discription}
            />
          })}
          
        </div>
      </div>
    
    </RightSectionStyle>
   );
}
 
export default RightSection;