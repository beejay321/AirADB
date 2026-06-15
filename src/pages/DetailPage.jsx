import { useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../lib/api";

function DetailPage() {
  const [currentListing, setCurrentListing] = useState(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  let params = useParams();

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

  const getCurrentListing = async () => {
    try {
      // setIsLoading(true);
      const response = await api.get(`listings/${params.id}`);
      // console.log(response);
      setCurrentListing(response.data);
      // setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCurrentListing();
  }, []);
  return (
    <>
      <div className="detail-listing">
        <h3>{currentListing.name}</h3>
        <div className="detail-img">
          <img className="" src={currentListing.picture_url} alt="" />
        </div>
        <section className="detail-section">
          <div className="detail-div">
            <div className="detail-img-text">
              <p className="property-type">
                {currentListing.property_type} in{" "}
                {currentListing.neighbourhood}{" "}
              </p>
              <span>{currentListing.accommodates} guests · </span>
              <span>{currentListing.bedrooms} bedrooms · </span>
              <span>{currentListing.beds} beds · </span>
              <span>{currentListing.bathroom_text} bath · </span>̇
            </div>
            <div className="detail-host">
              <img
                className="host-img"
                src={currentListing.host_picture_url}
                alt=""
              />
              <div>
                <p>Hosted by {currentListing.host_name}</p>
               {currentListing.host_is_superhost && <span>Superhost · </span>}
                <span>host since {currentListing.host_since}</span>
              </div>
            </div>
            <div>
              <p>{currentListing.description}</p>
            </div>
            <div className="calendar-div">
              <p>This is the Calendar component</p>
            </div>
          </div>
          <div className="reserve-form">
            <p>This is the reserve form component</p>
          </div>
        </section>
        <hr />

        <section className="reviews">
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
        </section>

        <hr />
        <section className="location-map">
          <div>This is the map component</div>
        </section>
      </div>
    </>
  );
}

export default DetailPage;
