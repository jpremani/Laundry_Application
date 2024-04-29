import Logo from "../../assets/logo.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { app } from "../../firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const NavBar = () => {
  const [handlescroll, setHandleScroll] = useState(false);
  const [mobile, setMobile] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const { carts } = useSelector((state) => state.allCart);
  const Navigation = () => {
    navigate("/cart");
    handleMobile();
  };
  const loginNavi = () => {
    navigate("/login");
    handleMobile();
  };

  function transitionNavBar() {
    if (window.scrollY > 70) {
      setHandleScroll(true);
    } else {
      setHandleScroll(false);
    }
  }
  function handleMobile() {
    if (mobile === true) {
      setMobile(false);
      document.querySelector(".navbar_menu").style.display = "none";
      document.querySelector(".navbar_login").style.display = "none";
    } else {
      setMobile(true);
      document.querySelector(".navbar_menu").style.display = "flex";
      document.querySelector(".navbar_login").style.display = "block";
    }
  }
  const [user, setUser] = useState();
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    // return () => {
    //   window.removeEventListener("scroll", transitionNavBar);
    // };
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  });
  const navigateHome = () => {
    if (mobile === true) {
      setMobile(false);
      document.querySelector(".navbar_menu").style.display = "none";
      document.querySelector(".navbar_login").style.display = "none";
    }
    navigate("/");
  };
  const navigateAbout = () => {
    if (mobile === true) {
      setMobile(false);
      document.querySelector(".navbar_menu").style.display = "none";
      document.querySelector(".navbar_login").style.display = "none";
    }
    navigate("/aboutus");
  };
  const navigateService = () => {
    if (mobile === true) {
      setMobile(false);
      document.querySelector(".navbar_menu").style.display = "none";
      document.querySelector(".navbar_login").style.display = "none";
    }
    navigate("/services");
  };
  const navigatePricing = () => {
    if (mobile === true) {
      setMobile(false);
      document.querySelector(".navbar_menu").style.display = "none";
      document.querySelector(".navbar_login").style.display = "none";
    }
    navigate("/pricing");
  };
  const navigateFranchies = () => {
    if (mobile === true) {
      setMobile(false);
      document.querySelector(".navbar_menu").style.display = "none";
      document.querySelector(".navbar_login").style.display = "none";
    }
    navigate("/franchies");
  };

  return (
    <div className={`NavBar ${handlescroll && "NavBarBlack"}`}>
      <nav className="navbar_nav">
        <div className="logo">
          <img src={Logo} alt="company_logo" />
          <div className="com_name">
            <span>Washa</span>
            <span>Holic</span>
          </div>
        </div>
        <div className="navbar_menu">
          <nav onClick={navigateHome}>Home</nav>
          <nav onClick={navigateAbout}>AboutUs</nav>
          <nav onClick={navigateService}>Services</nav>
          <nav onClick={navigatePricing}>Pricing</nav>
          <nav onClick={navigateFranchies}>Franchies</nav>
        </div>
        <div className="navbar_login">
          {user ? (
            <button
              onClick={() => {
                signOut(auth);
                navigate("/");
              }}
            >
              Logout
            </button>
          ) : (
            <button onClick={loginNavi}>Login / Signup</button>
          )}
          <button onClick={Navigation} className="cart_button">
            <i className="bi bi-bag-check-fill"></i>
          </button>
        </div>
        <div className="mobile_menu" onClick={handleMobile}>
          {mobile ? (
            <i className="bi bi-x-square"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
