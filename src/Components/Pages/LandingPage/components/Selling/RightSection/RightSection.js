import { RightSectionStyle } from "./RightSection.styles";
import firething from "../../../../../Images/firething.png"
import { useEffect, useState } from "react";
const RightSection = () => {

  let [counter,setCounter]= useState(0)

  useEffect(()=>{

    setTimeout(()=>{

      counter===5?setCounter(1):setCounter(counter+1)
      

    },2000)

  },[counter])

  

  let Liststyle={fontWeight:"500",pacity:0.8,color:"white"}

  
  return ( 
    <RightSectionStyle>
      <header className="rightSectionHeader">
        <h1 className="rightSectionHeader-tile">What I Sell</h1>
        <div className="rightSectionHeader-shop">shop</div>
      </header>


      <main className="rightSectionMain">
        <section className="Main-section-list">
          <h3 style={counter!==1?Liststyle:null}>Stone</h3>
          <h3 style={counter!==2?Liststyle:null}>Crystals</h3>
          <h3 style={counter!==3?Liststyle:null}>Braceletes</h3>
          <h3 style={counter!==4?Liststyle:null}>Candles</h3>
          <h3 style={counter!==5?Liststyle:null}>Sage</h3>

        </section>

        <section className="Main-section-list-img-btn">
          <img src={firething} alt="" width="100%"/>
          <button className="GoToStore">Go To Store</button>
        </section>

      </main>
      
    </RightSectionStyle>
   );
}
 
export default RightSection;