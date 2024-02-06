import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import about_image from "../assets/logo.png";

function About() {
  return (
    <div>
      <NavBar />
      <div className="page-header">
        <h3>About</h3>
      </div>
      <div className="about-info">
        <img className="about-image" src={about_image} alt="about img" />
        <p className="about-message">
          Welcome to Study Plan! We're here to simplify your educational
          journey, connecting you with the perfect courses across the globe.
          From vibrant cities in the Netherlands to academic hubs in the United
          States, Study Plan has you covered. Discover courses aligned with your
          interests and career goals. Our platform offers a global array of
          programs from prestigious institutions, expanding your educational
          horizons. Navigate effortlessly with our user-friendly interface.
          Seamlessly plan your academic journey from application to graduation.
          Join Study Plan today and let us guide you on an educational
          adventure, turning your dreams into a reality!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
