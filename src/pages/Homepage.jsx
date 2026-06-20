import { useEffect, useState } from "react";
import ListingsCard from "../components/ListingsCard";
import api from "../lib/api";
import { useListingsContext } from "../context/Listings.context";

function Homepage() {
  const { listings } = useListingsContext();

  return (
    <div className="dashboard">
      <h1>Explore Stays</h1>
      {listings ? (
        <div className="listings-div">
          {listings.map((listing) => (
            <ListingsCard key={listing.id} property={listing} />
          ))}
        </div>
      ) : (
        <div className="state-message">Loading your stays…</div>
      )}
    </div>
  );
}

export default Homepage;
