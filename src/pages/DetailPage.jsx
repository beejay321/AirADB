import { useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../lib/api";

function DetailPage() {
  const [currentListing, setCurrentListing] = useState([]);
  let params = useParams();
  params.id;

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
  }, [id]);

  return (
   
    <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: "40px" }} className="detail-listing">
      
      {console.log(currentListing)}
      <div>
        <h3>{currentListing.name}</h3>
        <div className="detail-img">
          <img className="" src={currentListing.picture_url} alt="" />
        </div>
        <div className="detail-div">
          <div>
            <p>{currentListing.property_type}</p>
            <p>{currentListing.neighbourhood}</p>
            <span>{currentListing.accommodates} guests · </span>
            <span>{currentListing.bedrooms} bedrooms · </span>
            <span>{currentListing.beds} beds · </span>
            <span>{currentListing.bathroom_text}bath </span>̇
          </div>
          <div className="detail-host">
            <img src={currentListing.host_picture_url} alt="" />
            <p>Hosted by {currentListing.host_name}</p>
            {!currentListing.host_is_superhost && <span>Superhost · </span>}
            <span>host since {currentListing.host_since}</span>
          </div>
          <div>
            <p>{currentListing.description}</p>
          </div>
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
              <span>{currentListing.bathroom_text}bath </span>̇
            </div>
            <div className="detail-host">
              <img
                className="host-img"
                src={currentListing.host_picture_url}
                alt=""
              />
              <div>
                <p>Hosted by {currentListing.host_name}</p>
                {!currentListing.host_is_superhost && <span>Superhost · </span>}
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
          <div>This is the reviews component</div>
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