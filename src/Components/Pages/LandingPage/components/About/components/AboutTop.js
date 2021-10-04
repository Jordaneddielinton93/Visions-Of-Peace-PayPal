import aboutimgTop from "./images/aboutimgTop.png"
const AboutTop = () => {

  return ( 
    <div className="About_top">
      <h1 className="About_top_header">LISHA--NICOLE</h1>
      <div className="img-p_container">
        <article className="img-p_container_text">
          <p>
            I hope to help people heal and feel alive with my products.Whether it be a bad break up I will help you see crystal clear...
          </p>
          
          <p>
            Or if it be a Friend is down to get them flying again with the right wings package set.
          </p>
           
          <p>
            Maybe its a congradulations gift set
          </p>
          
        </article>

        <img srcSet={aboutimgTop} alt="" height="100%" className="img-p_container-img"/>

      </div>
    </div>
   );
}
 
export default AboutTop;