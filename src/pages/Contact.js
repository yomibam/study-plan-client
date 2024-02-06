import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="page-header">
        <h3>Contact</h3>
      </div>
      <div className="contact">
        <div className="contact-input">
          <input
            className="contact-input-box"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="contact-input-box"
            type="email"
            placeholder="Email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            required
          />
          <input
            className="contact-input-box"
            type="tel"
            placeholder="Phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <textarea
            className="contact-input-box-message"
            name="message"
            placeholder="Message"
            required
          />
          <button className="contact-submit-button">Submt</button>
        </div>
        <div className="contact-info">
          <div>
            <h3>Email</h3>
            <p>contact@studyplan.com</p>
          </div>
          <div>
            <h3>Phone no</h3>
            <p>+234 801 234 5678</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>
              123 John Doe Avenue,
              <br />
              International Alley State.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
