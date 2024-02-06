import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import drop_down from "../assets/expand_down.png";

function Faq() {
  return (
    <div className="faq">
      <NavBar />
      <div className="page-header">
        <h3>FAQs</h3>
      </div>
      <div className="faq-list">
        <div className="faq-q">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          <img className="faq-drop-down-icon" src={drop_down} alt="drop down" />
        </div>
        <div className="faq-q">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          <img className="faq-drop-down-icon" src={drop_down} alt="drop down" />
        </div>
        <div className="faq-q">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          <img className="faq-drop-down-icon" src={drop_down} alt="drop down" />
        </div>
        <div className="faq-q">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          <img className="faq-drop-down-icon" src={drop_down} alt="drop down" />
        </div>
        <div className="faq-q">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          <img className="faq-drop-down-icon" src={drop_down} alt="drop down" />
        </div>
        <div className="faq-q">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          <img className="faq-drop-down-icon" src={drop_down} alt="drop down" />
        </div>
        <div className="faq-q">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          <img className="faq-drop-down-icon" src={drop_down} alt="drop down" />
        </div>
        <div className="faq-q">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
          <img className="faq-drop-down-icon" src={drop_down} alt="drop down" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Faq;
