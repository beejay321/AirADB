import { useEffect, useState } from "react";
import ListingsCard from "../components/ListingsCard";
import axios from "axios";

function Homepage() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New: Track loading
  const [error, setError] = useState(null); // New: Track errors

  useEffect(() => {
    const getListings = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:5005/listings");
        console.log(response);
        setProperties(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getListings();
  }, []);

  if (isLoading) return <div>Loading your stays...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}
      className="dashboard"
    >
      <h1>Explore Stays</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {properties.map((property) => (
          <ListingsCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
