import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import ListingForms from "./pages/ListingForms.jsx";
import "./App.css";



function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <main style={{ flex: 1 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/host/new" element={<ListingForms />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
