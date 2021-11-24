import React from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";

function Signup(){
    return(
        <div className="signup">
             <h1>Reservation System</h1>
            <h2>Sign Up</h2>
            <input type="Text" placeholder="First Name"/><br/>
            <input type="text" placeholder="Last Name"/><br/>
            <input type="Email" placeholder="Email"/><br/>
            <input type="Password" placeholder="Password"/><br/>
            <input type="Password" placeholder="Confirm Password"/><br/>
            <button>Sign Up</button>
        </div>
    );

}

export default Signup;