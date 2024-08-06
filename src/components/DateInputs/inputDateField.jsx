'use client';

import { useState, useEffect } from "react";
const InputDateField = () => {
    const [selectedDate, setSelectedDate] = useState("");
    const [displayedDate, setDisplayedDate] = useState([])

    const handleDate = (evnt) => {
        const userInput = evnt.target.value;

        if (userInput.length === 2) {
            userInput.push("/")
        };

        if (userInput.length === 6) {
            userInput.push("/")
        };

        setSelectedDate(userInput);
    };

    const handleDisplayDate = () => {
        
        if (displayedDate.length === 2) {
            displayedDate.push("/")
        };

        if (displayedDate.length === 6) {
            displayedDate.push("/")
        };
    }

    const payload = {
        value: ''
    };

    return (
        <section className="date-input--container">
            <input
                className="inputDateFieldContainer"
                type="text"
                onChange={handleDate}
                placeholder="MM/dd/yyyy"
                maxLength={10}
            />
            <div className="display-value">
                {selectedDate}
            </div>
        </section>

    )
};

export default InputDateField;