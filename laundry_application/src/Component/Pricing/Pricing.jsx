import React, { useState } from "react";
import "./Pricing.css";
import Delhi from "../../assets/Franchies/Delhi.jpg";
import Banglore from "../../assets/Franchies/Banglore.jpg";
import Hyderabad from "../../assets/Franchies/Hyderabad.jpg";
import Jaipur from "../../assets/Franchies/Jaipur.jpg";
import Mumbai from "../../assets/Franchies/Mumbai.jpg";
import laundry from "../../assets/Icon/laundryicon.png";
import menlaundry from "../../assets/Icon/menlaundry.png";
import steam from "../../assets/Icon/steamiron.png";
import washing from "../../assets/Icon/washing_icon.png";
import womenlaundry from "../../assets/Icon/womenlaundry.png";
import DryClean from "../DryClean/DryClean";
import PremiumLaundry from "../PremiumLaundry/PremiumLaundry";
import LaundryFold from "../LaundryFold/LaundryFold";
import LaundryWash from "../LaundryWash/LaundryWash";
import Steam from "../Steam/Steam";
import Footer from "../Footer/Footer";

const Pricing = () => {
  const [selectCity, setSelectCity] = useState();
  const handleChange = (event) => {
    setSelectCity(event.target.value);
  };

  const [display, setDisplay] = useState(<DryClean />);
  const handleService = (value) => {
    console.log(value);
    if (value === "dryclean") {
      setDisplay(<DryClean />);
    } else if (value === "premium_laundry") {
      setDisplay(<PremiumLaundry />);
    } else if (value === "laundry") {
      setDisplay(<LaundryFold />);
    } else if (value === "washing") {
      setDisplay(<LaundryWash />);
    } else if (value === "steam") {
      setDisplay(<Steam />);
    }
  };
  const frachice1 = [
    "Select City",
    "Jaipur",
    "Delhi",
    "Hyderabad",
    "Mumbai",
    "Banglore",
  ];
  const frachice = [
    {
      city: "Jaipur",
      outlet1: "Near Lalkhoti MobileNo:2222222222",
      outlet2: "Near Jagatpura MobileNo:333333333",
      outlet3: "Near Mansarovar MobileNo:2444444444",
      code: "121212",
      img: Jaipur,
    },
    {
      city: "Delhi",
      outlet1: "Near Chandani Chock MobileNo:2222222222",
      outlet2: "Near Railway Station MobileNo:333333333",
      outlet3: "Near Lal Chock MobileNo:2444444444",
      code: "331404",
      img: Delhi,
    },
    {
      city: "Hyderabad",
      outlet1: "Near Ameerpet MobileNo:0000000000000",
      outlet2: "Near HiTech City MobileNo:011111111",
      outlet3: "Near Kukatpallyt MobileNo:0333333330",
      code: "331405",
      img: Hyderabad,
    },
    {
      city: "Mumbai",
      outlet1: "Near Chock MobileNo:2222222222",
      outlet2: "Near Railway Station MobileNo:333333333",
      outlet3: "Near mareen Drive MobileNo:2444444444",
      code: "331406",
      img: Mumbai,
    },
    {
      city: "Banglore",
      outlet1: "Near ChandaniChock MobileNo:2222222222",
      outlet2: "Near RailwayStation MobileNo:333333333",
      outlet3: "Near Lal Chock MobileNo:2444444444",
      code: "331403",
      img: Banglore,
    },
  ];
  const selectedFranchise = frachice.find((item) => item.city === selectCity);
  return (
    <div className="Pricing_container">
      <div className="Pricing_banner">
        <h2>HASSLE FREE</h2>
        <h5>LAUNDRY AT</h5>
        <h4>AFFORDABLE PRICE</h4>
      </div>
      <div className="Pricing_location">
        <div className="Pricing_location_city">
          <select
            name="city"
            id="city"
            value={selectCity}
            onChange={handleChange}
          >
            {frachice1.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="Pricing_location_outlet">
          {selectCity === "Select City"
            ? ""
            : selectedFranchise && (
                <div className="city_outlet">
                  <select name="outlet" id="outlet">
                    <option value="Select Outlet">Select Outlet</option>
                    <option value={selectedFranchise.outlet1}>
                      {selectedFranchise.outlet1}
                    </option>
                    <option value={selectedFranchise.outlet2}>
                      {selectedFranchise.outlet2}
                    </option>
                    <option value={selectedFranchise.outlet3}>
                      {selectedFranchise.outlet3}
                    </option>
                  </select>
                </div>
              )}
        </div>
      </div>
      {selectedFranchise && (
        <div className="Pricing_Value">
          <div className="Pricing_button">
            <h1>Select Service</h1>
            <button
              value="dryclean"
              onClick={(e) => handleService(e.target.value)}
            >
              {" "}
              <img src={menlaundry} alt="menlaundry" /> Dry Cleaning
            </button>
            <button
              value="premium_laundry"
              onClick={(e) => handleService(e.target.value)}
            >
              {" "}
              <img src={womenlaundry} alt="womenlaundry" /> Premium Laundry Kg
            </button>
            <button
              value="laundry"
              onClick={(e) => handleService(e.target.value)}
            >
              {" "}
              <img src={laundry} alt="laundry" /> Laundry-Wash & Fold
            </button>
            <button
              value="washing"
              onClick={(e) => handleService(e.target.value)}
            >
              {" "}
              <img src={washing} alt="washing" /> Laundry-Wash & Iron
            </button>
            <button
              value="steam"
              onClick={(e) => handleService(e.target.value)}
            >
              {" "}
              <img src={steam} alt="steam" /> Steam Press
            </button>
          </div>

          <div className="Pricing_category">{display}</div>
        </div>
      )}
      <div>{<Footer />}</div>
    </div>
  );
};

export default Pricing;
