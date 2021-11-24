import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="container" >
            <div className="float-child leftside" ></div>
            <div className="content">
            <div className="login">
                <h1>Reservation System</h1>
                <h2>Welcome</h2>
                <input style={{marginBottom: "10px"}} type="Email" placeholder=" Email"/><br/>
                <input style={{marginBottom: "10px"}} type="Password" placeholder=" Password"/><br/>
                <Link to='/RegisteredUser'>
                    <button className="greenbut">Log in</button>
                </Link>
                <br/>
                <p>or</p>
                <Link to='/Guest'>
                    <button className="whitebut">Continue as Guest</button>
                </Link>
                <br/>
                <Link to='/Signup'>
                <button className="whitebut" >Sign up</button>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Login;