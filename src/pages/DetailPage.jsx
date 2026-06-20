import { Link, useParams } from "react-router";
import api from "../lib/api";
import LocationMap from "../components/LocationMap";
import ReserveForm from "../components/ReserveForm";
import Reviews from "../components/Reviews";
import ListingActions from "../components/ListingActions";
import { useListingsContext } from "../context/Listings.context";

function DetailPage() {
  const { listings } = useListingsContext();
  const { id } = useParams();

  const currentListing = listings?.find((l) => String(l.id) === id) || null;

  return (
    <>
      {currentListing ? (
        <div className="detail-listing">
          <div className="detail-top-bar">
            <Link
              to="/listings"
              className="back-home-link"
              aria-label="Back to listings"
            >
              <p>← Back to listings</p>
            </Link>
            <ListingActions listingId={id} />
          </div>

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
                <span>{currentListing.accommodates} guests</span>
                <span>{currentListing.bedrooms} bedrooms</span>
                <span>{currentListing.beds} beds </span>
                <span>{currentListing.bathroom_text} bath</span>
              </div>
              <div className="detail-host">
                <img
                  className="host-img"
                  src={currentListing.host_picture_url}
                  alt=""
                />
                <div>
                  <p>Hosted by {currentListing.host_name}</p>
                  {currentListing.host_is_superhost && (
                    <span>Superhost · </span>
                  )}
                  <span>host since {currentListing.host_since}</span>
                </div>
              </div>
              <div>
                <p>{currentListing.description}</p>
              </div>
            </div>
            <div className="reserve-form">
              <ReserveForm pricePerNight={currentListing.price} />
            </div>
          </section>
          <hr />
          <section className="reviews">
            <Reviews />
          </section>
          <hr />
          <section className="location-map">
            <LocationMap currentListing={currentListing} />
          </section>
        </div>
      ) : (
        <p>Loading listing...</p>
      )}
    </>
  );
}

export default DetailPage;
