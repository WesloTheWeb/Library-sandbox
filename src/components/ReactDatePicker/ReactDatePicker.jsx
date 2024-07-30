'use-client';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// TODO: Errror message for before a date
// TODO: Errror Message beyond current date
// ? Solves case of invalid date by going before or after, making it not possible.

const ReactDatePicker = ({ }) => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
    );
};

export default ReactDatePicker;