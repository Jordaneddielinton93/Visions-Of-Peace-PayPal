import aboutimgBtm from "./images/aboutimgBtm.png"
const AboutBottom = () => {
  return ( 
    <div className="About_bottom">


      <section className="About_bottom__left">
        <img alt="" className="About_bottom__left-img" srcset={aboutimgBtm} height="70%" style={{border:"solid thin white"}} />
      </section>


      <section className="About_bottom__right">

        <h3 className="About_bottom__right-title">
          Photo Gallary
        </h3>

        <p className="About_bottom__right-para">
          I have a selection of life changing incencse sticks ,spell jars and Chakra Bracelets.
        </p>

        <button className="About_bottom__right-btn">
          view
        </button >

        <div className="About_bottom__right-imgContainer">
          <img  alt="" srcset={aboutimgBtm} width="30%" className="btm-imgs"/>
          <img  alt="" srcset={aboutimgBtm} width="30%" className="btm-imgs"/>
          <img  alt="" srcset={aboutimgBtm} width="30%" className="btm-imgs box3img"/>
        </div>
      </section>

    </div> 
  );
}
 
export default AboutBottom;