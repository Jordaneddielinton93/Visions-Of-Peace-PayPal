import { CardCompStyle } from "./CardComp.style";

const CardComp = ({height,opacity,boxShadow,image,discription}) => {
  return ( 
    <CardCompStyle 
    height={height}
    opacity={opacity}
    boxShadow={boxShadow}
    >
      <img alt="" srcset={image} width="90%" height="33%" className="card-img"/>

      {discription}

      <div className="card-btn-container">
        <button className="card-btn-container-buttons cardBtn1">buy</button>
        <button className="card-btn-container-buttons cardBtn2">Add to Cart</button>
      </div>

    </CardCompStyle>
   );
}
 
export default CardComp;