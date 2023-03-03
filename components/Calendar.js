import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Calendar({ selectedDate, onChange }) {
  const [startDate, setStartDate] = useState(selectedDate);

  const handleChange = (date) => {
    setStartDate(date);
    onChange(date);
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={handleChange}
      inline
      showTimeSelect
      dateFormat="MMMM d, yyyy h:mm aa"
      timeFormat="h:mm aa"
    />
  );
}

export default Calendar;
