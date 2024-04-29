import React from "react";
import "./AboutUs.css";
import holdingImage from "../../assets/ServicePage/holdingCloth.jpg";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="AboutUs_banner">
        <h1>About-us</h1>
      </div>
      <div className="AboutUs-desc">
        <h1>LAUNDRY BELONGS IN A WASHAHOLIC</h1>
        <p>
          An average human spends between 12000 hours of their adult life in
          cleaning and managing their clothes. We have all grown up on a heavy
          dose of detergent commercials propagating the idea of ‘whiter the
          better’.
        </p>
      </div>
      <hr />
      <div className="AnoutUs_info">
        <div className="AnoutUs_info_img">
          <img src={holdingImage} alt="holding image" />
        </div>
        <div className="AnoutUs_info_detail">
          <p>
            But none of these commercials talked about the hours of hard work
            required to get that blinding whiteness. Do the words ‘enzyme soak’,
            hot water cleaning’, ‘bluing’ ring a bell? How we wish maintaining
            ourwhite clothes was easy as watching those commercials. With
            UClean, it is Easier! <br />
            At UClean, we bring the best-in-class Laundry, Dry Cleaning and Home
            Cleaning Services at your doorstep! <br />
            UClean operates a network of over 300+ mini laundromats across 85+
            cities, making it the Largest Laundry & Dry-Cleaning Chain in India.
            Your nearest UClean store offerslive laundry, steam ironing and
            dry-cleaning services, with freehome pick & drop, and a promise to
            deliver your clothes in less than 24 hours*.
          </p>
        </div>
      </div>
      <div className="AboutUs_promies">
        <h1>OUR PROMISE</h1>
        <div className="AboutUs_promies_detail">
          <div className="AboutUs_promies_info">
            <h3>QUALITY</h3>
            <p>Expert professionals handling your clothes with utmost care.</p>
          </div>
          <div className="AboutUs_promies_info">
            <h3>TRANSPARENCY</h3>
            <p>
              Neighbourhood live laundry stores offering service as you please.
            </p>
          </div>
          <div className="AboutUs_promies_info">
            <h3>Speed</h3>
            <p>Shorter turnaround times, delivery within24 hours of pick up</p>
          </div>
        </div>
      </div>
      <hr />
      <div>{<Footer />}</div>
    </div>
  );
};

export default AboutUs;
