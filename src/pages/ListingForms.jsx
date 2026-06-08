import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../App";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    pricePerNight: "",
    image: "",
    bedrooms: ""
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/properties", formData);
      alert("Listing created successfully!");
      navigate("/"); // Redirect home after creation
    } catch (error) {
      console.error("Error creating listing:", error);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px" }}>
      <h1>Host your home</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input name="title" placeholder="Title" onChange={handleChange} required style={inputStyle} />
        <input name="location" placeholder="Location (e.g., Lisbon)" onChange={handleChange} required style={inputStyle} />
        <input name="pricePerNight" type="number" placeholder="Price per night" onChange={handleChange} required style={inputStyle} />
        <input name="image" placeholder="Image URL" onChange={handleChange} required style={inputStyle} />
        <textarea name="description" placeholder="Description" onChange={handleChange} required style={inputStyle} />
        <button type="submit" style={buttonStyle}>Create Listing</button>
      </form>
    </div>
  );
};

// Simple reusable styles
const inputStyle = { padding: "12px", borderRadius: "8px", border: "1px solid #ccc" };
const buttonStyle = { padding: "15px", backgroundColor: "#FF385C", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" };

export default CreateListing;