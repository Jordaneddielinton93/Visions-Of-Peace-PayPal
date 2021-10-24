import { useEffect, useState } from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import CardsTemplate from './CardsTemplate';
// import Axios from "axios"
const CardContainer = () => {


  let [data,setData]=useState([])

  async function getData(){
    const response = await fetch("http://localhost:5000/store/AllItems")
    const data = await response.json()
    setData(data)
    console.log(data)
  }

  useEffect(()=>{
    
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


        {
          data.map((obj)=>{
            return (
            <CardsTemplate id={obj._id} 
            price={obj.price} 
            title={obj.itemName} 
            discr={obj.discription}
            images={obj.image}
            />)
          })
        }
        
      </div>

    </div>
   );
}
 
export default CardContainer;