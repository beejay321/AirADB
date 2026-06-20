import { useState, useEffect } from "react";
import api from "../lib/api";
import { useNavigate, useParams } from "react-router";
import UploadImage from "../components/UploadImage";
import { useListingsContext } from "../context/Listings.context";

function ListingForms() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const { updateListing, createListing } = useListingsContext();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    property_type: "",
    description: "",
    neighbourhood: "",
    picture_url: "",
    price: "",
    accommodates: 1,
    bedrooms: 1,
    beds: 1,
    bathroom_text: 1,
    host_name: "",
    host_picture_url: "",
    host_since: "",
    superhost: false,
  });

  useEffect(() => {
    if (!isEditing) return;
    const fetchListing = async () => {
      try {
        const response = await api.get(`listings/${id}`);
        const d = response.data;
        setFormData({
          name: d.name || "",
          property_type: d.property_type || "",
          description: d.description || "",
          neighbourhood: d.neighbourhood || "",
          picture_url: d.picture_url || "",
          price: d.price || "",
          accommodates: d.accommodates || 1,
          bedrooms: d.bedrooms || 1,
          beds: d.beds || 1,
          bathroom_text: d.bathroom_text || 1,
          host_name: d.host_name || "",
          host_picture_url: d.host_picture_url || "",
          host_since: d.host_since || "",
          host_is_superhost: d.host_is_superhost || false,
        });
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };
    fetchListing();
  }, [id, isEditing]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isEditing) {
        await updateListing(id, formData);
        navigate(`/listings/${id}`);
      } else {
        const newListing = await createListing(formData);
        navigate(`/listings/${newListing.id}`);
      }
    } catch (error) {
      console.error("Error saving listing:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form className="listing-form" onSubmit={handleSubmit}>
        <h2>{isEditing ? "Edit listing" : "Host your space"}</h2>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Property type
          <input
            type="text"
            name="property_type"
            value={formData.property_type}
            onChange={handleChange}
          />
        </label>
        <label>
          Location
          <input
            type="text"
            name="neighbourhood"
            value={formData.neighbourhood}
            onChange={handleChange}
          />
        </label>

        <UploadImage
          label="Listing photo"
          value={formData.picture_url}
          onChange={(url) =>
            setFormData((prev) => ({ ...prev, picture_url: url }))
          }
        />

        <label>
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
          />
        </label>
        <label>
          Price per night
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            required
          />
        </label>
        <div className="listing-specifics">
          <label>
            Accommodates
            <input
              type="number"
              name="accommodates"
              value={formData.accommodates}
              onChange={handleChange}
              min="1"
            />
          </label>
          <label>
            Bedrooms
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              min="1"
            />
          </label>
          <label>
            Beds
            <input
              type="number"
              name="beds"
              placeholder="1"
              value={formData.beds}
              onChange={handleChange}
              min="1"
            />
          </label>
          <label>
            Bathroom
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              min="1"
            />
          </label>
        </div>

        <div>
          <h4>Host</h4>
          <div className="host-details">
            <label>
              Host name
              <input
                type="text"
                name="host_name"
                value={formData.host_name}
                onChange={handleChange}
              />
            </label>
            <label>
              Host since
              <input
                type="text"
                name="host_since"
                value={formData.host_since}
                onChange={handleChange}
              />
            </label>
            <label className="superhost-label">
              <input
                type="checkbox"
                name="host_is_superhost"
                checked={formData.host_is_superhost}
                onChange={handleChange}
              />
              Superhost
            </label>
          </div>
          <UploadImage
            label="Host photo"
            value={formData.host_picture_url}
            onChange={(url) =>
              setFormData((prev) => ({ ...prev, host_picture_url: url }))
            }
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="search-button" disabled={isLoading}>
            {isLoading
              ? "Saving..."
              : isEditing
                ? "Save changes"
                : "Create Listing"}
          </button>
          <button
            type="button"
            className="btn-cancel"
            onClick={() =>
              navigate(isEditing ? `/listings/${id}` : "/listings")
            }
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

export default ListingForms;
