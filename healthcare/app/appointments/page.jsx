'use client'
import React from 'react';
import { useState } from 'react';

const Page = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    return (
        <>
            <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-3xl font-bold text-cyan-700 mb-6">
                        Book Your Appointment
                    </h1>

                    <div className="relative max-w-sm mx-auto">
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="Select a date"
                        />
                    </div>

                    <div className="mt-8">
                        <button
                            type="button"
                            className="bg-cyan-700 hover:bg-cyan-800 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300"
                        >
                            Confirm Appointment
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
