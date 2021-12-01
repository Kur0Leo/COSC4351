import React, { useState }  from "react";
import "./Guest.scss";
import {DatePicker, TimePicker } from 'antd';
import Tablespic from './Tablespic';

function Guest(){
    const [value, onChange] = useState(new Date());
    return(
        <div className="container" >
            <div className="float-child leftside" >
                <Tablespic/>
            </div>
            <div className="content">
                <div className="guest">
                    <h1>Reservation System</h1>
                    <h2>Guest</h2>
                    <input style={{marginBottom: "10px"}} type="Text" placeholder="Name"/><br/>
                    <input style={{marginBottom: "10px"}} type="tel" id="phone" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/><br/>
                    <input style={{marginBottom: "10px"}} type="Email" placeholder="Email"/><br/>
                    <input style={{marginBottom: "10px"}} type="number" placeholder="No. of Guests" min="1" max="14"/><br/>

                    <DatePicker
                    style={{marginBottom: "10px", width:"15em", borderRadius: "12px"}}
                    onChange={onChange}
                    // value={value}
                    />
                    <br/>
                    <TimePicker use12Hours format="h:mm a" minuteStep={15} onChange={onChange} style={{marginBottom: "10px", width:"15em", borderRadius: "12px"}}/>
                    <br/>
                    <button className="greenbut">Reserve</button>
                </div>
            </div>
        </div>
    );
}

export default Guest;