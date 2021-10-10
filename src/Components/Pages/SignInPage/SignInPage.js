import { useHistory } from "react-router";
import { LandingPageStyled } from "../LandingPage/LandingPage.style";

const SignInPage = () => {
  let history = useHistory();
  return ( 
    <LandingPageStyled>
      <button onClick={()=>history.push("/SignUp")}>SignUp</button>
    </LandingPageStyled>
   );
}
 
export default SignInPage;