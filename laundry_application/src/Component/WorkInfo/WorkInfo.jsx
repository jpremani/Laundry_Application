import React from "react";
import "./WorkInfo.css";
import hangerShirt from "../../assets/hangerShirt.png";
import dirtyShirt from "../../assets/dirtyshirt.png";
import Shirt from "../../assets/Shirt.png";

const WorkInfo = () => {
  return (
    <div className="WorkInfo">
      <div className="WorkInfo_heading">
        <p>Clean Job Always</p>
        <h1>This is how we work</h1>
      </div>
      <div className="WorkInfo_carts">
        <div className="pick_up">
          <div className="pick_up_image">
            <img src={dirtyShirt} alt="dirtyshirt" />
          </div>
          <h5>WE PICK YOUR CLOTHES</h5>
          <p>
            The automated process starts as soon as your clothes go into the
            machine. The outcome is gleaming clothes!
          </p>
        </div>
        <div className="pick_up">
          <div className="pick_up_image">
            <img src={Shirt} alt="Shirt" />
          </div>
          <h5>QUICKER DELIVERY</h5>
          <p>
            We ensure delivery in the quickest of the turnaround time in the
            industry. Superior quality of service with speed!
          </p>
        </div>
        <div className="pick_up">
          <div className="pick_up_image">
            <img src={hangerShirt} alt="hanger" />
          </div>
          <h5>DELIVERY AT THE DOORSTEP!</h5>
          <p>
            We have pioneered the concept of pickup and delivery in the shortest
            possible time. We intend keeping it that way!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkInfo;
