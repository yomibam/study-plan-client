import React from "react";
import hero_image from "../assets/logo.png";

function HomeHero() {
  return (
    <div className="hero">
      <div>
        <h1 className="hero-header">
          Ready to <br /> Study Abroad?
        </h1>
        <h2 className="hero-sub-header">
          Let us help you make the best choice!
        </h2>
      </div>
      <img className="hero-image" src={hero_image} alt="hero img" />
    </div>
  );
}

export default HomeHero;
