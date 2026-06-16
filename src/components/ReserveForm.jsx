import { useState } from "react";
import Calendar from "./Calendar"; 

const ReserveForm = ({ pricePerNight }) => {
  
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [guests, setGuests] = useState(1);

  const calculateTotal = () => {
    if (!startDate || !endDate) return 0;

    
    const msPerDay = 24 * 60 * 60 * 1000;
    const diff = Math.round((endDate - startDate) / msPerDay);
    const nights = diff > 0 ? diff : 0;

    return pricePerNight * nights * guests;
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h3>
        {pricePerNight}{" "}
        <span style={{ fontWeight: "normal", fontSize: "16px" }}>/ night</span>
      </h3>

      {/* Integrated Calendar Component */}
      <Calendar
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => setDateRange(update)}
      />

      <select
        onChange={(e) => setGuests(Number(e.target.value))}
        style={{
          ...inputStyle,
          width: "100%",
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        <option value="1">1 guest</option>
        <option value="2">2 guests</option>
        <option value="3">3 guests</option>
      </select>

      <button
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "#FF385C",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Reserve
      </button>

      <p style={{ textAlign: "center", marginTop: "15px", color: "#717171" }}>
        You won't be charged yet
      </p>

      {startDate && endDate && (
        <p
          style={{
            textAlign: "center",
            marginTop: "8px",
            color: "#111",
            fontWeight: "600",
          }}
        >
          Total: ${calculateTotal()}
        </p>
      )}
    </div>
  );
};

const inputStyle = {
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #b0b0b0",
};

export default ReserveForm;
