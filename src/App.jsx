import { Routes, Route } from "react-router";
import Homepage from "./pages/Homepage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (

    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh' 
    }}>

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>  
  );
}

export default App;
