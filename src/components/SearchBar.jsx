import { useState, useEffect } from "react";
import { useNavigate, useSearchParams, useLocation } from "react-router";

function SearchBar() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = query.trim();
    const target =
      location.pathname === "/listings" ? "/listings" : "/listings";
    navigate(trimmed ? `${target}?q=${encodeURIComponent(trimmed)}` : target);
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search destinations..."
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
