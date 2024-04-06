import React from "react";
import "./Navigation.scss";
import { CgMenuLeftAlt } from "react-icons/cg";
import logo from "./logo.png";
function Navigation() {
  return (
    <div
      className="main-box"
      style={{ backgroundColor: "#101010", zIndex: 4000 }}
    >
      <div className="navigation-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="nav">
          <div className="nav-list">
            <div className="nav-item">
              Top Anime<div className="line"></div>
            </div>
            <div className="nav-item">
              Seasonal Anime<div className="line"></div>
            </div>
            <div className="nav-item">
              Recommendations<div className="line"></div>
            </div>
          </div>

          <div className="login-container">
            <div className="signup-btn">Sign Up</div>
            <div className="login-btn">Login</div>
          </div>

          <button className="hamburger">
            <CgMenuLeftAlt size={40} color="#fff" />
          </button>
        </div>
      </div>
      <div className="navigation-two"></div>
    </div>
  );
}

export default Navigation;
