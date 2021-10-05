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

    </CardCompStyle>
   );
}
 
export default CardComp;