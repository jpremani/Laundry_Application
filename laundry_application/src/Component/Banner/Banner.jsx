import React from "react";
import "./Banner.css";
import machineBanner from "../../assets/washing_banner.png";
import MainPage from "../MainPage/MainPage";
import WorkInfo from "../WorkInfo/WorkInfo";
import LaundryProcess from "../LaundryProcess/LaundryProcess";
import Question from "../Question/Question";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  const handleSchedule = () => {
    navigate("/pricing");
  };
  <input
    type="email"
    class="form-control"
    id="exampleInputEmail1"
    aria-describedby="emailHelp"
    placeholder="Enter email"
  />;
  return (
    <div className="Banner">
      <div className="heading">
        <h1>
          World Class Dry Clean & <span>Laundry Service</span>
        </h1>
      </div>
      <div className="banner_info">
        <div className="banner_info_left">
          <h5>
            World Renowned Machines German Eco Friendly Cleaning Solutions
          </h5>
          <p>Upto 25% OFF On First Order 🌟🌟</p>
          <button onClick={handleSchedule}>Schedule Pickup</button>
        </div>
        <div className="banner_info_right">
          <img src={machineBanner} alt="machineBanner" />
        </div>
      </div>
      <div>{<MainPage />}</div>
      <div>{<WorkInfo />}</div>
      <div>{<LaundryProcess />}</div>
      <div>{<Question />}</div>
      <div>{<Footer />}</div>
    </div>
  );
};

export default Banner;
