import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login(){
    return(
        <div className="login">
            <h1>Reservation System</h1>
            <h2>Welcome</h2>
            <input type="Email" placeholder="Email"/><br/>
            <input type="Password" placeholder="Password"/><br/>
            <Link to='/RegisteredUser'>
                <button>Log in</button>
            </Link>
            <br/>
            <Link to='/Guest'>
                <button>Continue as Guest</button>
            </Link>
            <br/>
            <Link to='/Signup'>
            <button>Sign up</button>
            </Link>
        </div>
    );
}

export default Login;