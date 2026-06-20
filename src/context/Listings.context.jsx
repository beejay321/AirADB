import { createContext, useContext, useEffect, useState } from "react";
import api from "../lib/api";

const ListingsContext = createContext();

export default function ListingsProvider({ children }) {
  const [listings, setListings] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const getListings = async () => {
    try {
      const response = await api.get("/listings");
      setListings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createListing = async (data) => {
    const response = await api.post("/listings", data);
    setListings((prev) => [...prev, response.data]);
    return response.data;
  };

  const updateListing = async (id, data) => {
    const response = await api.patch(`/listings/${id}`, data);
    setListings((prev) =>
      prev.map((l) => (String(l.id) === String(id) ? response.data : l)),
    );
    return response.data;
  };

  const deleteListing = async (id) => {
    await api.delete(`/listings/${id}`);
    setListings((prev) => prev.filter((l) => String(l.id) !== String(id)));
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <ListingsContext.Provider
      value={{
        listings,
        setListings,
        getListings,
        createListing,
        deleteListing,
        updateListing,
      }}
    >
      {children}
    </ListingsContext.Provider>
  );
}

function useListingsContext() {
  const context = useContext(ListingsContext);
  if (!context) {
    return;
  }
  return context;
}
export { ListingsContext, useListingsContext };
