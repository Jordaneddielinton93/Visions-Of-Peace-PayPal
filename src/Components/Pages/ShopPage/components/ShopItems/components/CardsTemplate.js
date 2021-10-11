import { CardTemplateStyle } from "./CardTemplate.style";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useState } from "react";
const CardsTemplate = ({price,title,discr,images}) => {

  let [basketAmount,setBasketAmout]= useState(1)

  return ( 
    <CardTemplateStyle>
      <header className="card_header">
        <AiOutlineHeart/>
        <h2 className="card_header-title">£{price}</h2>
      </header>
      <img alt="" srcSet={images} className="card_IMG"/>
      <div className="card_titleDisc-container">
        <h1 className="card_titleDisc-container-title">{title}</h1>
        <p className="card_titleDisc-container-discr">{discr}</p>
      </div>

      <div className="Card_btns">
        <div className="Card_btns_amount">
          <button onClick={()=>setBasketAmout(basketAmount===0?0:basketAmount-1)}
          className="Card_btns_amount-minus">
            <AiOutlineMinus/>
          </button>
            {basketAmount}
          <button onClick={()=>setBasketAmout(basketAmount+1)}
          className="Card_btns_amount-plus">
            <AiOutlinePlus/>
          </button>

        </div>

        <button className="Card_btns-AddToBasket">
          Add To Basket
        </button>
      </div>
      
    </CardTemplateStyle>
   );
}
 
export default CardsTemplate;