import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import ListingsProvider from "./context/Listings.context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ListingsProvider>
        <App />
      </ListingsProvider>
    </BrowserRouter>
  </StrictMode>,
);
