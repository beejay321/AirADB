import { useState } from "react";
import { useNavigate } from "react-router";
import api from "../lib/api";

function ListingActions({ listingId }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this listing?"))
      return;
    setIsDeleting(true);
    try {
      await api.delete(`listings/${listingId}`);
      navigate("/listings");
    } catch (error) {
      console.error("Error deleting listing:", error);
      setIsDeleting(false);
    }
  };

  return (
    <div className="listing-actions">
      <button
        className="btn-edit"
        onClick={() => {
          navigate(`/host/edit/${listingId}`);
        }}
      >
        Edit
      </button>

      <button
        className="btn-delete"
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}

export default ListingActions;
