import { useState } from "react";
import api from "../lib/api";
import { useNavigate } from "react-router";

function ListingForms() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    property_type: "",
    accommodates: 1,
    amenities: [],
  });

  const handleCheckboxChange = (amenity) => {
    setFormData((prev) => {
      const amenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await api.post("/listings", formData);
      alert("Listing created successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error saving listing:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="listing-form" onSubmit={handleSubmit}>
      <h2>Host your space</h2>

      <div className="amenities-container" style={{ margin: "20px 0" }}>
        <p>Select Amenities:</p>
        <label>
          <input
            type="checkbox"
            checked={formData.amenities.includes("WiFi")}
            onChange={() => handleCheckboxChange("WiFi")}
          />
          WiFi
        </label>
        <label style={{ marginLeft: "15px" }}>
          <input
            type="checkbox"
            checked={formData.amenities.includes("Kitchen")}
            onChange={() => handleCheckboxChange("Kitchen")}
          />
          Kitchen
        </label>
      </div>

      <button type="submit" className="search-button" disabled={isLoading}>
        {isLoading ? "Saving..." : "Create Listing"}
      </button>
    </form>
  );
}

export default ListingForms;
