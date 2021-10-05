import { RightSectionStyle } from "./RightSection.styles";
import { FcPrevious } from 'react-icons/fc';
import CardComp from "./CardComps/CardComp";

import img1 from "../../../../../Images/firething.png"
import { useState } from "react";

const RightSection = () => {

  let imageArray=[img1,img1,img1,img1]

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
            return <CardComp height={index!==shownImg?"70%":"90%"}/>
          })}
          
        </div>
      </div>
    
    </RightSectionStyle>
   );
}
 
export default RightSection;