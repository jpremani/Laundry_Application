import React, { useState } from "react";
import "./Franchies.css";
import Franchie from "../../assets/Franchies.jpg";
import Delhi from "../../assets/Franchies/Delhi.jpg";
import Banglore from "../../assets/Franchies/Banglore.jpg";
import Hyderabad from "../../assets/Franchies/Hyderabad.jpg";
import Jaipur from "../../assets/Franchies/Jaipur.jpg";
import Mumbai from "../../assets/Franchies/Mumbai.jpg";
import Footer from "../Footer/Footer";

const Franchies = () => {
  const frachice = [
    {
      city: "JAIPUR",
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
  const [citydetail, setCityDetail] = useState({});
  const [modal, setModal] = useState(false);
  function handleClick(value) {
    setCityDetail(value);
    setModal(true);
    console.log(citydetail);
  }
  return (
    <div className="Franchies_container">
      {modal ? (
        ""
      ) : (
        <div className="Franchies">
          <div className="Franchies_left">
            {frachice.map((value) => (
              <div
                className="frachice_details"
                key={value.city}
                onClick={() => handleClick(value)}
              >
                <img src={value.img} alt={value.city} />
                <div className="city_name">{value.city}</div>
              </div>
            ))}
          </div>
          <div className="Franchies_right">
            <img src={Franchie} alt="Franchies jpg" />
          </div>
        </div>
      )}

      {modal && citydetail && (
        <div className="franchise_model">
          <div className="modal_container">
            <div className="modal_header">
              <h1>{citydetail.city}</h1>
              <button onClick={() => setModal(false)}>
                <i className="bi bi-x-circle"></i>
              </button>
            </div>
            <hr />
            <div className="modal_image">
              <img src={citydetail.img} alt={citydetail.city} />
            </div>
            <div className="modal_details">
              <div className="modal_details_info">Code : {citydetail.code}</div>
              <div className="modal_details_info">
                Outlet : {citydetail.outlet1}
              </div>
              <div className="modal_details_info">
                Outlet : {citydetail.outlet2}
              </div>
              <div className="modal_details_info">
                Outlet : {citydetail.outlet3}
              </div>
            </div>
          </div>
        </div>
      )}
      <div>{<Footer />}</div>
    </div>
  );
};

export default Franchies;
