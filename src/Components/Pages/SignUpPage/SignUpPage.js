import { useRef, useState } from "react";
// import { db } from "../../Assets/Firebase/Firebase";
import { LandingPageStyled } from "../LandingPage/LandingPage.style";
import { SignAreaStyled } from "../SignInPage/SignAreaStyled";
import SignInputs from "./SignInput";

const SignUpPage = () => {

  let nameRef= useRef()
  let emailRef= useRef()
  let passwordRef= useRef()

  let [h3Pos,setH3Pos]=useState({
    Name:{top: "0",left: "0"}

  })

 

  
  return ( 
    <LandingPageStyled>
      <SignAreaStyled>
        <form action="" className="form">

          <SignInputs headerStyle={h3Pos.Name} 
          refInput={nameRef} 
          title="Full name"/>

          <SignInputs 
          refInput={emailRef} 
          title="Email" 
          inputType="email"/>

          <SignInputs
          refInput={passwordRef} 
          title="Password" 
          inputType="email"/>

          <butto className="form-button" >
            SignUp
          </butto>


        </form>
      </SignAreaStyled>
    </LandingPageStyled>
   );
}
 
export default SignUpPage;