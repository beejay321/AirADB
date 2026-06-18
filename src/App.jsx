import { Routes, Route, useLocation } from "react-router";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ListingForms from "./pages/ListingForms.jsx";
import "./App.css";
import DetailPage from "./pages/DetailPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";

function App() {
  const { pathname } = useLocation();
  const isLanding = pathname === "/";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <main style={{ flex: 1 }}>
        {!isLanding && <Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/listings" element={<Homepage />} />
          <Route path="/listings/:id" element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/host/new" element={<ListingForms />} />
          <Route path="/host/edit/:id" element={<ListingForms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
