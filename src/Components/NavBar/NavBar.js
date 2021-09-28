import { NavBarStyled } from "./NavBar.style";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";
const NavBar = ({offSetY}) => {

  let [openNav,setOpenNav] = useState(false)

  return ( 
    <NavBarStyled
    offSetY={offSetY}
    openNav={openNav}
    >
      <nav>

        {/* desktop */}
        <ul className="desktop-ul">
          <li>SHOP</li>
          <li>SIGN-IN</li>
          <h1> Visions Of Peace</h1>
          <li>ABOUT</li>
          <li>CART</li>
        </ul>

        {/* mobile */}
        <ul className="mobile-ul">
          <GiHamburgerMenu onClick={()=>setOpenNav(!openNav)}/>
          <li>SHOP</li>
          <li>SIGN - IN</li>
          <li>ABOUT</li>
          <li>CART</li>
        </ul>

      </nav>
    </NavBarStyled>
   );
}
 
export default NavBar;