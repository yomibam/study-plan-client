import React from "react";
import logo_icon from "../assets/logo.png";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

function Navbar() {
  return (
    <div className="nav-bar">
      <SideNav />
      <Link className="link-router" to="/">
        <div className="logo">
          <img className="logo-img" src={logo_icon} alt="logo" />
          <h1 className="logo-text">Study Plan</h1>
        </div>
      </Link>
      <div className="nav-bar-list">
        <Link className="nav-bar-link" to="/faq">
          FAQs
        </Link>
        <Link className="nav-bar-link" to="/about">
          About
        </Link>
        <Link className="nav-bar-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
