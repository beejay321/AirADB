import { useState } from "react";
import { Link } from "react-router";
import { FaHeart } from "react-icons/fa";

function ListingsCard({ property }) {
  const [isFavorited, setIsFavorited] = useState(false);

  function handleFavoriteClick(e) {
    e.preventDefault();
    setIsFavorited((prev) => !prev);
  }

  return (
    <div className="listing-card-wrapper">
      <Link to={`/listings/${property.id}`}>
        <div className="listing-card">
          <div className="listing-img-wrapper">
            <img src={property.picture_url} alt="" className="listing-img" />
            <button
              className={`favorite-btn ${isFavorited ? " favorited" : ""}`}
              onClick={handleFavoriteClick}
              aria-label={
                isFavorited ? "Remove from favorites" : "Add to favorites"
              }
            >
              {/* {isFavorited ? "♥" : "♡"} */}
              <FaHeart />
            </button>
          </div>
          <h6>{property.name}</h6>
          <p>{property.neighbourhood}</p>
          <p>{property.price} per night</p>
        </div>
      </Link>
    </div>
  );
}

export default ListingsCard;
