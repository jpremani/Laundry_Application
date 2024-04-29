import React from "react";
import "./MainPage.css";
import cart from "../../assets/cart.png";
import temp from "../../assets/Temp.png";
import iron from "../../assets/iron.png";
import washing_machine from "../../assets/washing-machine.png";
import tap from "../../assets/tap.png";
import cloths from "../../assets/cloths.png";
const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="left_side">
        <div className="left_side_heading">
          <h5>
            The Better Solution For <span>Dry Cleaners</span>
          </h5>
          <div className="left_side_logo">
            <div>
              <img src={iron} alt="iron" />
              <div className="left_logo_info">
                <span>So Fast Delivery</span>
                <span>Within 30 mins</span>
              </div>
            </div>
            <div>
              <img src={temp} alt="iron" />
              <div className="left_logo_info">
                <span>Memberships</span>
                <span>For Better Priority</span>
              </div>
            </div>
            <div>
              <img src={cart} alt="iron" />
              <div className="left_logo_info">
                <span>Make your day</span>
                <span>Best Offers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_side">
        <div className="right_side_heading">
          <h5>
            The Best Cleaning Service with <span>EcoDrive</span>
          </h5>
        </div>
        <div className="right_side_logo">
          <div>
            <img src={washing_machine} alt="washing" />
            <div className="right_logo_info">
              <span>Get Clean Your Cloths with</span>
              <span>Best Equipment</span>
            </div>
          </div>
          <div>
            <img src={tap} alt="tap" />
            <div className="right_logo_info">
              <span>We use products which are</span>
              <span>Eco Friendly</span>
            </div>
          </div>
          <div>
            <img src={cloths} alt="cloth" />
            <div className="right_logo_info">
              <span>Be Sure your dress gets</span>
              <span>Right Treatment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
