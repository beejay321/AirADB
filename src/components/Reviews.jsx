import React from "react";
import { useEffect, useState } from "react";

function Reviews() {
  const [showAllReviews, setShowAllReviews] = useState(false);

  const reviews = [
    {
      id: 1,
      name: "Danilo",
      date: "March 2026",
      comment:
        "Beautiful place, very clean and well located. The host was very helpful.",
    },
    {
      id: 2,
      name: "Busola",
      date: "April 2026",
      comment:
        "Great stay! The apartment was comfortable and close to everything.",
    },
    {
      id: 3,
      name: "Daniel",
      date: "May 2026",
      comment:
        "Nice experience overall. The check-in was easy and the neighborhood was lovely.",
    },
    {
      id: 4,
      name: "Noah",
      date: "May 2026",
      comment: "Very good value for the price. I would definitely come back.",
    },
    {
      id: 5,
      name: "Ali",
      date: "June 2026",
      comment:
        "The place looked exactly like the pictures. Very cozy and quiet.",
    },
    {
      id: 6,
      name: "Joachim",
      date: "June 2026",
      comment: "Good location and friendly host. Perfect for a short trip.",
    },
  ];

  const visibleReviews = showAllReviews ? reviews : reviews.slice(0, 3);
  return (
    <div>
      <div className="reviews-header">
        <h3>Reviews</h3>
        <p className="reviews-rating">⭐ 4.8 · {reviews.length} reviews</p>
      </div>

      <div className="reviews-list">
        {visibleReviews.map((review) => (
          <div className="review-card" key={review.id}>
            <div className="review-user">
              <div className="review-avatar">{review.name.charAt(0)}</div>

              <div>
                <h4>{review.name}</h4>
                <p>{review.date}</p>
              </div>
            </div>

            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>

      <button
        className="reviews-button"
        onClick={() => setShowAllReviews(!showAllReviews)}
      >
        {showAllReviews ? "Show less" : "Show all reviews"}
      </button>
    </div>
  );
}

export default Reviews;
