import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import arrow_back from "../assets/arrow_back.png";

export const Result = () => {
  const location = useLocation();
  const { searchResults, courseName, courseCountry } = location.state || {};
  const navigate = useNavigate();

  const openUrlInNewWindow = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      <Navbar />
      <div className="back-to-previous-page" onClick={() => navigate(-1)}>
        <img className="arrow-back" src={arrow_back} alt="back" />
        <span>Back</span>
      </div>
      {courseName && courseCountry ? (
        <div>
          <h3 className="result-page-header">
            Programs available for {courseName} in {courseCountry}
          </h3>
        </div>
      ) : (
        <h3 className="result-page-header">All Programs</h3>
      )}
      {searchResults && (
        <p className="result-counter">{searchResults.length} result(s) found</p>
      )}
      <div className="result-list">
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div
              key={result.id}
              className="result-display"
              onClick={() => openUrlInNewWindow(result.url)}
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
