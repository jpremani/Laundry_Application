import React, { useState } from "react";
import "./DryClean.css";
import male from "../../assets/Icon/male.png";
import female from "../../assets/Icon/female.png";
import kids from "../../assets/Icon/kids.png";
import luxery from "../../assets/Icon/luxery.png";
import household from "../../assets/Icon/household.png";
import MensComponent from "../MensComponent/MensComponent";
import WomenComponent from "../WomenComponent/WomenComponent";
import KidsComponent from "../KidsComponent/KidsComponent";
import HouseholdComponent from "../HouseholdComponent/HouseholdComponent";
import LuxeryComponent from "../LuxeryComponent/LuxeryComponent";

const DryClean = () => {
  const [button, setButton] = useState(false);
  const [display, setDisplay] = useState(<MensComponent />);
  const handleDisplay = (value) => {
    if (value === "male") {
      setDisplay(<MensComponent />);
    } else if (value === "female") {
      setDisplay(<WomenComponent />);
    } else if (value === "kids") {
      setDisplay(<KidsComponent />);
    } else if (value === "household") {
      setDisplay(<HouseholdComponent />);
    } else {
      setDisplay(<LuxeryComponent />);
    }
  };
  return (
    <div className="Pricing_menu">
      <div className="Pricing_menu_header">
        <button
          className={button ? "button_class" : ""}
          onClick={(e) => handleDisplay(e.target.value)}
          value="male"
        >
          <img src={male} alt="male" />
          Mens
        </button>
        <button
          className={button ? "button_class" : ""}
          onClick={(e) => handleDisplay(e.target.value)}
          value="female"
        >
          <img src={female} alt="female" />
          Women
        </button>
        <button
          className={button ? "button_class" : ""}
          onClick={(e) => handleDisplay(e.target.value)}
          value="kids"
        >
          <img src={kids} alt="kids" />
          Kids
        </button>
        <button
          className={button ? "button_class" : ""}
          onClick={(e) => handleDisplay(e.target.value)}
          value="household"
        >
          <img src={household} alt="household" />
          Household
        </button>
        <button
          className={button ? "button_class" : ""}
          onClick={(e) => handleDisplay(e.target.value)}
          value="luxery"
        >
          <img src={luxery} alt="luxery" />
          Luxery
        </button>
      </div>
      <div className="Price_menu_body">{display}</div>
    </div>
  );
};

export default DryClean;
