import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import arrow_back from "../assets/arrow_back.png";

export const Result = () => {
  const location = useLocation(); // Get the location object
  const { searchResults, courseName, studyCountry } = location.state || {}; // Extract searchResults from location state
  const navigate = useNavigate(); // Use the useNavigate hook

  const openUrlInNewWindow = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Navbar />
      <div className="back-to-previous-page" onClick={() => navigate(-1)}>
        {/* Use navigate(-1) to go back to the previous page */}
        <img className="arrow-back" src={arrow_back} alt="back" />
        <span>Back</span>
      </div>
      {courseName && studyCountry ? (
        <div>
          <h3 className="result-page-header">
            Programs available for {courseName} in {studyCountry}
          </h3>
        </div>
      ) : (
        <h3 className="result-page-header">All Programs</h3>
      )}
      {/* Displays the number of results */}
      {searchResults && (
        <p className="result-counter">{searchResults.length} result(s) found</p>
      )}
      <div className="result-list">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div
              key={result.id}
              className="result-display"
              onClick={() => openUrlInNewWindow(result.url)} //Opens the url in a new window
            >
              <h3>{result.name}</h3>
              <p>{result.school}</p>
              <div className="course-duration">
                <p>{result.degree}</p>
                <p>{result.duration}</p>
              </div>
              <span>{result.tuition}</span>
            </div>
          ))
        ) : (
          <p className="no-result-found">No results found</p>
        )}
      </div>

      <Footer />
    </div>
  );
};
