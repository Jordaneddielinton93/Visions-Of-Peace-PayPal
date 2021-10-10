import { NavBarStyled } from "./NavBar.style";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from "react";
import { Link } from "react-router-dom";
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
          <li><Link>SHOP</Link></li>
          <li><Link to="/SignIn">SIGN-IN</Link></li>
          <h1><Link to="/"> Visions Of Peace</Link></h1>
          <li><Link>ABOUT</Link></li>
          <li><Link to="/Cart">CART</Link></li>
        </ul>

        {/* mobile */}
        <ul className="mobile-ul">
          <GiHamburgerMenu onClick={()=>setOpenNav(!openNav)}/>
          <li><Link> SHOP</Link></li>
          <li><Link to="/SignIn">SIGN - IN</Link></li>
          <li>ABOUT</li>
          <li><Link to="/Cart">CART</Link></li>
        </ul>

      </nav>
    </NavBarStyled>
   );
}
 
export default NavBar;