'use client'

import InputDateField from "@/components/DateInputs/inputDateField";
import DateInput from "@/components/DatePickers/DateInput";
import ReactDatePicker from "@/components/DatePickers/ReactDatePicker/ReactDatePicker";

export default function DatePickerPage() {
    // helper functions here
    // if using any hooks be sure to have the 'use-client' directive

    return (
        <>
            <h2>Datepickers</h2>
            <p>
                Here are a list of datepickers.
            </p>
            <section>
                <h3>React Date Picker</h3>
                <ReactDatePicker 
                isClearable
                 showTimeSelect
  dateFormat="Pp"
                />
                <h3>Native</h3>
                {/* <DateInput /> */}
                <InputDateField />
            </section>
        </>
    );
};