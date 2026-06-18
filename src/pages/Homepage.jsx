import { useEffect, useState } from "react";
import ListingsCard from "../components/ListingsCard";
import api from "../lib/api";

function Homepage() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getListings = async () => {
      try {
        setIsLoading(true);

        const response = await api.get("/listings");

        console.log("RESPONSE DATA:", response.data);

        const listingsData = Array.isArray(response.data)
          ? response.data
          : response.data.listings || [];

        console.log("LISTINGS DATA:", listingsData);

        setProperties(listingsData);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error?.message || "Failed to load listings");
        setIsLoading(false);
      }
    };

    getListings();
  }, []);

  if (isLoading) {
    return <div className="state-message">Loading your stays…</div>;
  }

  if (error) {
    return <div className="state-message">{error}</div>;
  }

  return (
    <div className="dashboard">
      <h1>Explore Stays</h1>

      {properties.length === 0 && (
        <p className="state-message">No listings found.</p>
      )}

      <div className="listings-div">
        {properties.map((property) => (
          <ListingsCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;