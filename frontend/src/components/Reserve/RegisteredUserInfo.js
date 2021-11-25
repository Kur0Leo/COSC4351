import React  from "react";
import './RegisteredUser.scss';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import {Checkbox} from 'antd';


function RegisteredUserInfo(){
    return(
        <div className="container" >
            <div className="float-child leftside" ></div>
            <div className="content">
                <div className="user">
                <h1>Reservation System</h1>
                <h2>Registered User</h2>
                <p>Please confirm your information. Click to edit.</p>
                <strong><label>Name: </label></strong>
                <EditText id="fullName" name="fullName" defaultValue="Full Name" style={{width: "15em"}} inline/>
                <br/>
                <strong><label>Email Address: </label></strong>
                <EditText type="email" style={{width: '15em'}} defaultValue="email@domain.com" inline/>
                <br/>
                <strong><label>Phone Number: </label></strong>
                <EditText type="tel" style={{width: '15em'}} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" defaultValue="000-000-0000" inline/>
                <br/><strong><label>Mailing Address</label></strong><br/>
                <strong><label>Address: </label></strong>
                <EditText type="text" style={{width: '15em'}} defaultValue="1234 Reserve Ln" inline/>
                <br/><strong><label>City: </label></strong>
                <EditText type="text" style={{width: '15em'}} defaultValue="Houston" inline/>
                <br/><strong><label>State: </label></strong>
                <EditText type="text" style={{width: '15em'}} defaultValue="TX" inline/>
                <br/><strong><label>Zip Code: </label></strong>
                <EditText type="text" style={{width: '15em'}} defaultValue="77004" inline/>
                <br/><Checkbox>Check if mailing address is the same as your billing address</Checkbox>
                </div>
            </div>
        </div>
    );
}

export default RegisteredUserInfo;