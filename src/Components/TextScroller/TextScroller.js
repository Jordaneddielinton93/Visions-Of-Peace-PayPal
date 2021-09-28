import { TextScrollerStyle } from "./TextScroller.style";

const TextScroller = ({Left,Top,Text}) => {

  
  return ( 
    <TextScrollerStyle Left={Left} Top={Top} >
        <h2 className="TextScroller">
          {Text}
        </h2>
    </TextScrollerStyle>
   );
}
 
export default TextScroller;