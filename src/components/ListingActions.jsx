import { useState } from "react";
import { useNavigate } from "react-router";
import { useListingsContext } from "../context/Listings.context";

function ListingActions({ listingId }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const { deleteListing } = useListingsContext();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this listing?"))
      return;
    setIsDeleting(true);
    try {
      await deleteListing(listingId);
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
