import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../lib/api";
import LocationMap from "../components/locationMap";
import ReserveForm from "../components/ReserveForm";
import Reviews from "../components/Reviews";
import Calendar from "../components/Calendar";

function DetailPage() {
  const [currentListing, setCurrentListing] = useState(null);

  let params = useParams();

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

  if (!currentListing) {
    return <p>Loading listing...</p>;
  }
  return (
    <>
      <div className="detail-listing">
        <Link to="/" className="back-home-link">
          Back to homes
        </Link>

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
              <span>{currentListing.bathroom_text}bath</span>
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
              <Calendar />
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
    </>
  );
}

export default DetailPage;
