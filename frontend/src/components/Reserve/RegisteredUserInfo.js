import React  from "react";
import './RegisteredUser.scss';
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import {DatePicker, TimePicker, Select } from 'antd';
import {Checkbox} from 'antd';
import {Link} from "react-router-dom";


function RegisteredUserInfo(){
    const { Option } = Select;
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
                <br/><strong><label>Preferred Diner #: </label></strong>
                <input type="text" style={{width: "15em"}} defaultValue="00000" inline disabled />
                <br/><strong><label>Earned Points: </label></strong>
                <input type="text" style={{width: "15em"}} defaultValue="0" inline disabled />
                <br/><strong><label>Credit Card Information </label></strong><br/>
                <strong><label>Credit Card No.: </label></strong>
                <EditText type="text" style={{width: '15em'}} defaultValue="0000-0000-0000-0000" inline/>
                <br/><strong><label>Cardholder Name: </label></strong>
                <EditText type="text" defaultValue="Name" style={{width: "15em"}} inline/>
                <br/><strong><label>Exp. Date: </label></strong>
                <EditText type="text" style={{width: "15em"}} defaultValue="MM/YY" inline/>
                <br/><strong><label>CCV: </label></strong>
                <EditText type="text" style={{width: '15em'}} defaultValue="000" inline/>
                <br/><strong><label>Preferred Payment Method: </label></strong>
                <Select defaultValue="credit" style={{width:"15em"}}>
                    <Option value="cash">cash</Option>
                    <Option value="credit">credit</Option>
                    <Option value="check">check</Option>
                </Select>
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
                <br/>
                <Link to="/RegisteredUserReserve">
                <button className="greenbut">Next</button>
                </Link>
                </div>
            </div>
        </div>
    );
}

export default RegisteredUserInfo;