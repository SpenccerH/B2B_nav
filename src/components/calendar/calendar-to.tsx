import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDots } from '@phosphor-icons/react';
import { SearchField, Input } from 'react-aria-components';

function CalendarTo() {

    const DateRangeSelector = () => {

        const today = new Date();
        const lastMonth = new Date(today);
        lastMonth.setMonth(today.getMonth() - 1);

        const [startDate, setStartDate] = useState(null);
        const [endDate, setEndDate] = useState(today);
        const [isStartDatePickerOpen, setStartDatePickerOpen] = useState(false);
        const [isEndDatePickerOpen, setEndDatePickerOpen] = useState(false);

        return (
            <div className="">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row items-center gap-x-1">
                        <div className="w-36 flex flex-row justify-between border border-slate-300 rounded-lg p-2 items-center text-xs h-7">
                            <div>From:</div>
                            <div>{startDate ? startDate.toLocaleDateString() : ''}</div>
                            <button onClick={() => setStartDatePickerOpen(!isStartDatePickerOpen)}>
                                <CalendarDots size={20} weight="light" className="" />
                            </button>
                            {isStartDatePickerOpen && (
                            <div className="absolute mt-72 right-72">
                                <DatePicker
                                selected={startDate}
                                onChange={(date) => {
                                    setStartDate(date);
                                    setStartDatePickerOpen(false);
                                }}
                                inline
                                />
                            </div>
                            )}

                        </div>
                        <div className="w-32 flex flex-row justify-between border border-slate-300 rounded-lg p-2 items-center text-xs h-7">
                            <div>To:</div>
                            <div>{endDate.toLocaleDateString()}</div>
                            <button onClick={() => setEndDatePickerOpen(!isEndDatePickerOpen)}>
                                <CalendarDots size={20} weight="light" className="" />
                            </button>
                            {isEndDatePickerOpen && (
                                <div className="absolute mt-72 right-8">
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => {
                                            setEndDate(date);
                                            setEndDatePickerOpen(false);
                                        }}
                                        inline
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return <DateRangeSelector />;
}

export default CalendarTo;
