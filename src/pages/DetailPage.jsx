import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import ReserveForm from "../components/ReserveForm";

function DetailPage() {
  const [currentListing, setCurrentListing] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getCurrentListing = async () => {
      try {
        const response = await axios.get(
          `https://airadb-server.onrender.com/listings/${id}`,
        );
        console.log(response);
        setCurrentListing(response.data);
      } catch (error) {
        console.log(error);
      }
    };
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
      </div>

      {/* 3. New ReserveForm Sidebar */}
      <aside>
        <ReserveForm pricePerNight={currentListing.price} />
      </aside>
      
    </div>
  );
}

export default DetailPage;