import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import netherlandsData from "../courseData/netherlandsData";
import usData from "../courseData/usData";
import australiaData from "../courseData/australiaData";
import canadaData from "../courseData/canadaData";
import ukData from "../courseData/ukData";

function SearchCourse() {
  const [courseName, setCourseName] = useState("");
  const [studyCountry, setStudyCountry] = useState("");
  const navigate = useNavigate();

  const handleCourseInput = (e) => {
    setCourseName(e.target.value);
  };

  const handleCountryInput = (e) => {
    setStudyCountry(e.target.value);
  };

  const handleSearch = () => {
    let result;

    if (studyCountry.toLowerCase() === "netherlands") {
      result = netherlandsData.filter((course) =>
        course.name.toLowerCase().includes(courseName.toLowerCase())
      );
    } else if (
      studyCountry.toLowerCase() === "united states" ||
      studyCountry.toLowerCase() === "us" ||
      studyCountry.toLowerCase() === "usa"
    ) {
      result = usData.filter((course) =>
        course.name.toLowerCase().includes(courseName.toLowerCase())
      );
    } else if (studyCountry.toLowerCase() === "australia") {
      result = australiaData.filter((course) =>
        course.name.toLowerCase().includes(courseName.toLowerCase())
      );
    } else if (studyCountry.toLowerCase() === "canada") {
      result = canadaData.filter((course) =>
        course.name.toLowerCase().includes(courseName.toLowerCase())
      );
    } else if (
      studyCountry.toLowerCase() === "united kingdom" ||
      studyCountry.toLowerCase() === "uk"
    ) {
      result = ukData.filter((course) =>
        course.name.toLowerCase().includes(courseName.toLowerCase())
      );
    } else {
      // Handle other countries or show an error message
      console.error("Unsupported study country:", studyCountry);
      return;
    }

    navigate("/result", {
      state: { searchResults: result, courseName, studyCountry },
    });

    console.log(
      "Search Results for " + courseName + " in " + studyCountry,
      result
    );
  };

  return (
    <div className="search-course">
      <h4 className="search-course-header">Begin your journey here</h4>
      <div className="search-course-inputbox">
        <input
          name="myCourse"
          id="myCourse"
          value={courseName}
          onChange={handleCourseInput}
          className="search-course-inputbox"
          type="text"
          placeholder="Enter course of choice"
        />
        <input
          name="myCountry"
          id="myCountry"
          value={studyCountry}
          onChange={handleCountryInput}
          className="search-course-inputbox"
          type="text"
          placeholder="Enter study country"
        />
      </div>

      <button className="search-course-submit-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchCourse;
