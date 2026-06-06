import { useEffect, useState } from "react";
//import api from "../api";
import ListingsCard from "../components/ListingsCard";

const Homepage = () => {
    const [properties, setProperties] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // New: Track loading
    const [error, setError] = useState(null);       // New: Track errors

    //useEffect(() => {
        //api.get("/properties")
          //  .then((response) => {
            //    setProperties(response.data);
              //  setIsLoading(false); // Success: Stop loading
            //})
           // .catch((err) => {
             //   console.error("Error fetching properties:", err);
               // setError("Failed to load listings."); // Show error to user
               // setIsLoading(false);
            //});
   // }, []);

    if (isLoading) return <div>Loading your stays...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
            <h1>Explore Stays</h1>
            <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
                gap: "24px" 
            }}>
                {properties.map((property) => (
                    <ListingsCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default Homepage;