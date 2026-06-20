import { useSearchParams } from "react-router";
import ListingsCard from "../components/ListingsCard";
import { useListingsContext } from "../context/Listings.context";

function Homepage() {
  const { listings } = useListingsContext();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const visibleListings = query
    ? listings?.filter(
        (l) =>
          l.name?.toLowerCase().includes(query) ||
          l.neighbourhood?.toLowerCase().includes(query)
      )
    : listings;

  return (
    <div className="dashboard">
      <h1>{query ? `Results for "${searchParams.get("q")}"` : "Explore Stays"}</h1>
      {!listings ? (
        <div className="state-message">Loading your stays…</div>
      ) : visibleListings.length === 0 ? (
        <div className="state-message">No listings found for "{searchParams.get("q")}"</div>
      ) : (
        <div className="listings-div">
          {visibleListings.map((listing) => (
            <ListingsCard key={listing.id} property={listing} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Homepage;
