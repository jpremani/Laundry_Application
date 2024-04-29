import React from "react";
import "./LaundryProcess.css";
import process from "../../assets/laundryprocess.png";

const LaundryProcess = () => {
  return (
    <div className="LaundryProcess">
      <h1>THE LAUNDRY PROCESS</h1>
      <div className="LaundryProcess_info">
        <span>
          High pressure vacuum steam iron is done for that perfect finishing
        </span>
        <span>Softener is added as per finishing required</span>
        <span>
          Clothes with extra soiling & oil stains are treated to a special
          enzyme soak before washing
        </span>
        <span>
          Clothes are carefully sorted based on colour, material, texture,
          soiling level etc.
        </span>
      </div>
      <div className="LaundryProcess_img">
        <img src={process} alt="laundry process img" />
      </div>
      <div className="LaundryProcess_info">
        <span>Clothes are tagged to avoid potential mix up</span>
        <span>Cuff & collar are treated using special detergents</span>
        <span>Clothes are washed as per the load type</span>
        <span>
          Clothes are Air-dried in anti-bacterial stainless-steel dryers
        </span>
      </div>
    </div>
  );
};

export default LaundryProcess;
