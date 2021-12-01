import React, { useEffect, useState }  from "react";
import "./Guest.scss";
import { Link, useNavigate } from "react-router-dom";
import {DatePicker, TimePicker, Select } from 'antd';
import Tablespic from './Tablespic';
import db from '../../firebase-config';
import { collection, onSnapshot, addDoc, setDoc, doc } from "@firebase/firestore";
//import {Link} from "react-router-dom";
import { Navigate } from "react-router";

function Guest(){
    const [value, onChange] = useState(new Date());
    const [reservation, setReservation ] = useState([]);
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ phoneNum, setphoneNum ] = useState();
    const [ numGuests, setnumGuests ] = useState();
    const [ date, setDate ] = useState(new Date());
    const [ time, setTime ] = useState();
    const navigate = useNavigate()

    //console.log(reservation);
    {/*
    useEffect(
        () =>  
            onSnapshot(collection(db, "reservations"),(snapshot) => 
               setReservation(snapshot.docs.map((doc) => doc.data()))
            ),
        []
    );*/}

    
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(date);
        const dateValue = date.format();
        const timeValue = time.format();
        var newDate = new Date(dateValue);
        var newTime = newDate.getTime();
        let day = newDate.getDay();

        if(day == 6 || day == 0){
            alert ("Must be registered and have a valid credit card in the system to reserve on weekends!");
            navigate('/Signup');
        }
        else{
            const collectionRef = collection(db, "reservations");

            const payload = { name, email, phoneNum, numGuests, newDate, newTime };
            const docRef = await addDoc(collectionRef, payload);
            console.log("The new id is: " + docRef.id);
            alert("Registration Successful!")
            navigate('/confirmation');
        } 
    };

    {/*const handleEdit = async (id) => {
        const docRef = doc(db, "reservations", id);

        const payload = { gnameRef, gphoneNumRef, gemailRef, gnumGuestsRef, gdateRef, gtimeRef };


        setDoc(docRef, payload);
    };*/}
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
                <div className="guest">
                    <h1>Reservation System</h1>
                    <h2>Guest</h2>
                    <input style={{marginBottom: "10px"}} type="Text" placeholder="Name" required onChange={(e) => {setName(e.target.value);}} /><br/>
                    <input style={{marginBottom: "10px"}} type="tel" id="phone" placeholder="Phone Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e) => {setphoneNum(e.target.value);}} /><br/>
                    <input style={{marginBottom: "10px"}} type="Email" placeholder="Email" required onChange={(e) => {setEmail(e.target.value);}} /><br/>
                    <input style={{marginBottom: "10px"}} type="number" placeholder="No. of Guests" min="1" max="14" required onChange={(e) => {setnumGuests(e.target.value);}} /><br/>

                    <DatePicker
                     style={{marginBottom: "10px", width:"15em", borderRadius: "12px"}}
                     selected={date}
                     onChange={date => setDate(date)}
                    // value={value}
                    />
                    <br/>
                    <TimePicker  format="HH:mm" minuteStep={15} onChange={onChange} style={{marginBottom: "10px", width:"15em", borderRadius: "12px"}} 
                    required value={time}
                    selected={time}
                    onChange={time => setTime(time)} 
                    /> 
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
                    <Link to='/Confirmation'>
                    <button className="greenbut" onClick={onSubmit}>Reserve</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Guest;