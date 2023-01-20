import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Time.css';
import { createPopper } from '@popperjs/core';

const Datetime = () => {
    const [startDate, setStartDate] = 
    useState(new Date());
    return(
        <div className="contenttime">
        <DatePicker className="time" popperClassName="some-custom-class" popperPlacement="bottom" selected={startDate} onChange={(date) => setStartDate(date)}/>
        </div>
    )

}

export default Datetime;