import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './StyledDatepicker.css'; // Import your custom CSS file

const StyledDatePicker = ({ selectedDate, setSelectedDate}) => {
  return (
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Select your birth date"
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        showMonthDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        className="custom-datepicker-input"
        calendarClassName="custom-calendar"
        />
  );
};

export default StyledDatePicker;