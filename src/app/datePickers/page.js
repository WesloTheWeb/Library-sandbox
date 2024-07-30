'use client'

import ReactDatePicker from "@/components/ReactDatePicker/ReactDatePicker";

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
                <ReactDatePicker />
            </section>
        </>
    );
};