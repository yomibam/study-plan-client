import React from "react";
import appReviews from "../AppReviews.js"; // Import the app reviews data

function HomeReviews() {
  const shuffledReviews = [...appReviews].sort(() => 0.5 - Math.random());

  // Display only the first 6 reviews
  const selectedReviews = shuffledReviews.slice(0, 6);

  return (
    <div className="reviews">
      <h2 className="reviews-header">Reviews</h2>
      <div className="reviews-list">
        {selectedReviews.map((review) => (
          <div key={review.id} className="review">
            <p className="review-message">{review.rmessage}</p>
            <p className="review-author">-{review.user}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeReviews;
