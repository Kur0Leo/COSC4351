import React, {useState} from 'react';
import {DatePicker, TimePicker, Select } from 'antd';
import './RegisteredUser.scss';
import Tablespic from './Tablespic';
import db from '../../firebase-config';
import { auth, useAuth } from '../../firebase-config.js'
import { collection, onSnapshot, addDoc, setDoc, doc } from "@firebase/firestore";

function RegisteredUserReserve(){
    const [value, onChange] = useState(new Date());
    
    const [ numGuests, setnumGuests ] = useState();
    const [ date, setDate ] = useState(new Date());
    const [ time, setTime ] = useState();

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(date);
        const dateValue = date.format();
        const timeValue = time.format();

        const uid = auth.currentUser.uid;
        const collectionRef = collection(db, "reservations");

        const payload = { uid, numGuests, dateValue, timeValue };
        const docRef = await addDoc(collectionRef, payload);
        console.log("The new id is: " + docRef.id);
        alert("Reservation completed.")
    };

    const { Option } = Select;
    const children = [];
    for (let i = 1; i <=6; i++) {
        children.push(<Option key={i}>{i}</Option>);
      }
    function handleChange(value) {
        console.log(`selected ${value}`);
      }

    return(
        <div className="container" >
            <div className="float-child leftside" >
                <Tablespic/>
            </div>
            <div className="content">
                <div className="user">
                    <h1>Reservation System</h1>
                    <h2>Registered User</h2>
                    <input style={{marginBottom: "10px"}} type="number" placeholder="No. of Guests" min="1" max="14"
                    required onChange={(e) => {setnumGuests(e.target.value);}} />
                    <br/>

                    <DatePicker
                    style={{marginBottom: "10px", width:"15em", borderRadius: "12px"}}
                    selected={date}
                    onChange={date => setDate(date)}
                    // value={value}
                    />
                    <br/>
                    <TimePicker format="HH:mm" minuteStep={15} onChange={onChange} style={{marginBottom: "10px", width:"15em", borderRadius: "12px"}}
                    required value={time}
                    selected={time}
                    onChange={time => setTime(time)} />
                    <br/>
                    <Select 
                    
                    mode="multiple"
                    allowClear
                    style={{marginBottom: "10px", width:"15em", borderRadius: "12px"}}
                    placeholder="Select your table number(s)"
                    // defaultValue={['a10', 'c12']}
                    onChange={handleChange}
                    >
                    {children}
                    </Select>
                    <br />
                    <button className="greenbut" onClick={onSubmit}>Reserve</button>
                </div>
            </div>
        </div>
    );
}

export default RegisteredUserReserve;