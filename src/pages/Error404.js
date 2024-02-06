import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div className="error-404">
      <h2 className="error-404-header">Oops</h2>
      <h3 className="error-404-sub-header">Error 404</h3>
      <p className="error-404-message">
        The page you’re looking for <br />
        does not exist
      </p>
      <Link to="/">
        <button className="error-404-home-button">Return to Home</button>
      </Link>
    </div>
  );
}

export default Error404;
