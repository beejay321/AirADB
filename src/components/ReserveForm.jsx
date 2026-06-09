import { useState } from 'react';

const ReserveForm = ({ pricePerNight }) => {
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });
  const [guests, setGuests] = useState(1);

  // Simple calculation: Price * number of days
  const calculateTotal = () => {
    // In a real app, you'd calculate the difference between dates here
    return pricePerNight * 3 * guests; // Placeholder for demo
  };

  return (
    <div style={{ 
      border: '1px solid #ddd', 
      padding: '24px', 
      borderRadius: '12px', 
      boxShadow: '0 6px 20px rgba(0,0,0,0.1)' 
    }}>
      <h3>${pricePerNight} <span style={{ fontWeight: 'normal', fontSize: '16px' }}>/ night</span></h3>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', margin: '20px 0' }}>
        <input type="date" onChange={(e) => setDates({...dates, checkIn: e.target.value})} style={inputStyle} />
        <input type="date" onChange={(e) => setDates({...dates, checkOut: e.target.value})} style={inputStyle} />
      </div>
      
      <select onChange={(e) => setGuests(Number(e.target.value))} style={{ ...inputStyle, width: '100%', marginBottom: '20px' }}>
        <option value="1">1 guest</option>
        <option value="2">2 guests</option>
      </select>

      <button style={{ 
        width: '100%', 
        padding: '14px', 
        backgroundColor: '#FF385C', 
        color: 'white', 
        border: 'none', 
        borderRadius: '8px', 
        fontSize: '16px', 
        fontWeight: 'bold', 
        cursor: 'pointer' 
      }}>
        Reserve
      </button>
      
      <p style={{ textAlign: 'center', marginTop: '15px', color: '#717171' }}>${calculateTotal()} total</p>
      <p style={{ textAlign: 'center', marginTop: '15px', color: '#717171' }}>You won't be charged yet</p>
    </div>
  );
};

const inputStyle = { padding: '10px', borderRadius: '8px', border: '1px solid #b0b0b0' };

export default ReserveForm;