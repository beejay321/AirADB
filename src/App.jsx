import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
