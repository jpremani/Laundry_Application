import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleDryClean = () => {
    navigate("/pricing");
  };

  return (
    <div className="Footer">
      <div className="footer_logo">
        <img src={logo} alt="logo" />
        <div className="footer_social">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-instagram"></i>
        </div>
      </div>
      <div className="footer_service">
        <h5>OUR SERVICES</h5>
        <ul>
          <li onClick={handleDryClean}>Dry Cleaning</li>
          <li onClick={handleDryClean}>Laundry by Kg</li>
          <li onClick={handleDryClean}>Premium Laundry</li>
          <li onClick={handleDryClean}>Steam Ironing</li>
        </ul>
      </div>
      <div className="footer_contact">
        <h5>Contact Us</h5>
        <address>
          <i class="bi bi-geo-alt"></i>Unit No. 114 & 115 Charm wood Plaza,
          Charm wood Village, Eros Garden, Suraj Kund, Faridabad, Haryana -
          121009, India
        </address>
        <address>
          <i class="bi bi-phone-vibrate"></i>+91 88xxxxxxxx
        </address>
        <a href="mailto:wasaholic@gmail.com" style={{ color: "blue" }}>
          <i class="bi bi-envelope"></i>Email
        </a>
      </div>
    </div>
  );
};

export default Footer;
