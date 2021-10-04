import aboutimgBtm from "./images/aboutimgBtm.png"
const AboutBottom = () => {
  return ( 
    <div className="About_bottom">


      <section className="About_bottom__left">
        <img alt="" srcset={aboutimgBtm} height="70%" />
      </section>


      <section className="About_bottom__right">

        <h3 className="About_bottom__right-title">
          Photo Gallary
        </h3>

        <p className="About_bottom__right-para">
          Ihope to help heal and feel alive with my products.
        </p>

        <button className="About_bottom__right-btn">
          view
        </button >

        <div className="About_bottom__right-imgContainer">
          <img  alt="" srcset={aboutimgBtm} width="30%" className="btm-imgs"/>
          <img  alt="" srcset={aboutimgBtm} width="30%" className="btm-imgs"/>
          <img  alt="" srcset={aboutimgBtm} width="30%" className="btm-imgs"/>
        </div>
      </section>

    </div> 
  );
}
 
export default AboutBottom;