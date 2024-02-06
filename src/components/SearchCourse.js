import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SearchCourse() {
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const { courseName, courseCountry } = e.target.elements;
    e.preventDefault();
    toast.info("Searching, please wait...", { autoClose: 1000 });

    try {
      const response = await fetch(
        `http://localhost:5000/courses?course=${courseName.value}&country=${courseCountry.value}`
      );
      const data = await response.json();

      navigate("/result", {
        state: {
          searchResults: data,
          courseName: courseName.value,
          courseCountry: courseCountry.value,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="search-course">
      <h4 className="search-course-header">Begin your journey here</h4>
      <form className="search-course-inputbox" onSubmit={handleSearch}>
        <div className="inputbox">
          <input
            name="courseName"
            className="search-course-inputbox"
            type="text"
            placeholder="Enter course of choice"
            required
          />
          <input
            name="courseCountry"
            className="search-course-inputbox"
            type="text"
            placeholder="Enter study country"
            required
          />
        </div>

        <button type="submit" className="search-course-submit-button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchCourse;
