import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ startDate, endDate, onChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Dates</label>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline // Keeps the calendar open on the page
        minDate={new Date()} // Prevents picking past dates
        calendarClassName="airbnb-calendar"
      />
    </div>
  );
};

export default Calendar;