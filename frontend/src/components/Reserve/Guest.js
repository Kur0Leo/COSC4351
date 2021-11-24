import React, { useState }  from "react";
import "./Guest.scss";
import {DatePicker, TimePicker } from 'antd';

function Guest(){
    const [value, onChange] = useState(new Date());
    return(
        <div className="guest">
             <h1>Reservation System</h1>
            <h2>Guest</h2>
            <input type="Text" placeholder="Name"/><br/>
            <input type="tel" id="phone" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/><br/>
            <input type="Email" placeholder="Email"/><br/>
            <input type="number" placeholder="No. of Guests" min="1" max="14"/><br/>

            <DatePicker
            onChange={onChange}
            // value={value}
            />
            <br/>
            <TimePicker use12Hours format="h:mm a" minuteStep={15} onChange={onChange} />
            <br/>
            <button>Reserve</button>
        </div>
    );
}

export default Guest;