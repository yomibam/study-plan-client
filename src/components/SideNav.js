import React, { useState } from "react";
import { Link } from "react-router-dom";
import side_nav_icon from "../assets/side-menu-icon.png";
import close_sidenav_icon from "../assets/close_sidenav_icon.png";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <nav>
          <button className="toggle-btn" onClick={toggleNav}>
            <img
              className="side-nav-close-icon"
              src={close_sidenav_icon}
              alt="close"
            />
          </button>
          <Link className="side-nav-link" to="faq">
            FAQs
          </Link>
          <Link className="side-nav-link" to="about">
            About
          </Link>
          <Link className="side-nav-link" to="contact">
            Contact
          </Link>
        </nav>
      </div>
      <button className="toggle-btn" onClick={toggleNav}>
        <img className="side-nav-open-icon" src={side_nav_icon} alt="menu" />
      </button>
    </>
  );
};

export default SideNav;
