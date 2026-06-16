import { useEffect, useState } from "react";
import ListingsCard from "../components/ListingsCard";
import api from "../lib/api";

function Homepage() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New: Track loading
  const [error, setError] = useState(null); // New: Track errors

  useEffect(() => {
    const getListings = async () => {
      try {
        setIsLoading(true);
        const response = await api.get("/listings");
        setProperties(response.data);
      } catch (error) {
        console.log(error);
        setError(error?.message || "Failed to load listings");
      } finally {
        setIsLoading(false);
      }
    };

    getListings();
  }, []);

  if (isLoading)
    return <div className="state-message">Loading your stays…</div>;
  if (error) return <div className="state-message">{error}</div>;

  return (
    <div className="dashboard">
      <h1>Explore Stays</h1>
      <div className="listings-div">
        {properties.map((property) => (
          <ListingsCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
