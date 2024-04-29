import React from "react";
import "./ServicePage.css";
import laundry from "../../assets/ServicePage/Laundry.png";
import Dryclean from "../../assets/ServicePage/dryclean.jpg";
import shoes from "../../assets/ServicePage/shoes.png";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const ServicePage = () => {
  const navigate = useNavigate();
  const handleSchedule = () => {
    navigate("/pricing");
  };
  return (
    <div className="ServicePage">
      <div className="ServicePage_Expert">
        <h1>Expert Service</h1>
        <div className="ServicePage_Expert_info">
          <div className="ServicePage_Expert_point">LAUNDRY</div>
          <div className="ServicePage_Expert_point">DRY CLEAN</div>
          <div className="ServicePage_Expert_point">SHOE CLEANING</div>
        </div>
        <button onClick={handleSchedule}>Schedule Pickup</button>
      </div>
      <div className="ServicePage_Laundry">
        <div className="ServicePage_Laundry_left">
          <h1>Laundry</h1>
          <p>
            Every cloth goes through a comprehensive 6 stage process enabling us
            to deliver on the promise of sparkling & fresh clothes, everytime.
          </p>
        </div>
        <div className="ServicePage_Laundry_right">
          <img src={laundry} alt="" />
        </div>
      </div>
      <div className="ServicePage_DryClean">
        <div className="ServicePage_DryClean_left">
          <img src={Dryclean} alt="dry" />
        </div>
        <div className="ServicePage_DryClean_right">
          <h1>Dry Clean</h1>
          <p>
            All clothes are cleaned with environment-friendly solvents, such as
            Oil based hydrocarbons. State-of-the-art machinery is used to
            process the clothes where they are treated with highly acclaimed and
            commercially used solvents.
          </p>
        </div>
      </div>
      <div className="ServicePage_Shoes">
        <div className="ServicePage_Shoes_left">
          <h1>
            Flaunt yo<span>ur Shoes</span>
          </h1>
          <p>
            Get your shoes as good as new with our professional shoe cleaning
            services at affordable prices.
          </p>
        </div>
        <div className="ServicePage_Shoes_right">
          <img src={shoes} alt="" />
        </div>
      </div>
      <hr />
      <div>{<Footer />}</div>
    </div>
  );
};

export default ServicePage;
