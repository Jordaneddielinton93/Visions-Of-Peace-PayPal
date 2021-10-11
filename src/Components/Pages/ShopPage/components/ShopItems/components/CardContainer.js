import { useEffect } from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import CardsTemplate from './CardsTemplate';
// import Axios from "axios"
const CardContainer = () => {


  async function getData(){
    const response = await fetch("http://localhost:5000/read")
    const data = await response.json()
    console.log(data)
  }

  useEffect(()=>{
    // Axios.post("http://localhost:5000/")
    getData()
  },[])





  return ( 
    <div className="CardContainer">

      <header className="CardContainer__Header">

        <h1 className="CardContainer__Header--title">{"All Items"}</h1>

        <nav className="CardContainer__Header__Nav">
          <h1 className="CardContainer__Header__Nav--icon">
            <BsFilterLeft/>
          </h1>
          <ul className="CardContainer__Header__Nav__list">
            <li className="CardContainer__Header__Nav__list--item">Incence</li>
            <li className="CardContainer__Header__Nav__list--item">Bottles</li>
            <li className="CardContainer__Header__Nav__list--item">Jewlery</li>
          </ul>
        </nav>

      </header>

      <div className="CardContainer__cardHolder">
        <CardsTemplate price="20" title="Clear quartz" discr="Considered “master healer.”"/>
      </div>

    </div>
   );
}
 
export default CardContainer;