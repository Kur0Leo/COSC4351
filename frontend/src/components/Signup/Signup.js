import React from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

function Signup(){
    return(
        <div className="container" >
            <div className="float-child leftside" ></div>
            <div className="content">
                <div className="signup">
                    <h1>Reservation System</h1>
                    <h2>Sign Up</h2>
                    <input style={{marginBottom: "10px"}} type="Text" placeholder="First Name"/><br/>
                    <input style={{marginBottom: "10px"}} type="text" placeholder="Last Name"/><br/>
                    <input style={{marginBottom: "10px"}} type="Email" placeholder="Email"/><br/>
                    <input style={{marginBottom: "10px"}} type="Password" placeholder="Password"/><br/>
                    <input style={{marginBottom: "10px"}} type="Password" placeholder="Confirm Password"/><br/>
                    <Link to='/'>
                    <button className="greenbut">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default Signup;