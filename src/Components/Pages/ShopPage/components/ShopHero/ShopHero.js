import { ShopHeroStyle } from "./ShopHero.style";

const ShopHero = () => {
  return ( 
    <ShopHeroStyle>
      <section className="Hero__left">
        
        <h1>MY HOT SUMMER TRENDS</h1>
        <h2>New Angels discount</h2>
        <p>Were now doing an amazing gift set range</p>

        <button>Buy now</button>

      </section>

      <section className="Hero__right">
        <div>

        </div>
      </section>
    </ShopHeroStyle>
   );
}
 
export default ShopHero;