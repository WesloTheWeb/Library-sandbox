'use-client';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// ? Solves case of invalid date by going before or after, making it not possible.

const ReactDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [error, setError] = useState('');

    const handleDateChange = (date) => {
        const minDate = new Date(1900, 0, 1); // January 1, 1900
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Remove time part

        if (date < minDate) {
            setError('Date cannot be before 1900.');
            setSelectedDate(null);
        } else if (date > today) {
            setError('Date cannot be in the future.');
            setSelectedDate(null);
        } else {
            setError('');
            setSelectedDate(date);
        }
    };

    return (
        <div>
            <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                placeholderText="Select a date"
                dateFormat="MM/dd/yyyy"
            />
            {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
    );
};

export default ReactDatePicker;
