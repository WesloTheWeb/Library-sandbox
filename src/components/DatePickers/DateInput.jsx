'use client';
import React, { useState, useRef, useEffect } from 'react';

const DateInput = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const inputElement = inputRef.current;

    const handleNativeInput = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);

      // Validate date here if needed
      if (isValidDate(newValue)) {
        setErrorMessage('');
      } else {
        setErrorMessage('Invalid date');
      }
    };

    if (inputElement) {
      inputElement.addEventListener('input', handleNativeInput);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener('input', handleNativeInput);
      }
    };
  }, []);

  const isValidDate = (dateString) => {
    // Implement your date validation logic here
    return dateString === '' || !isNaN(Date.parse(dateString));
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="date"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default DateInput;
