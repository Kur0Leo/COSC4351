import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { useNavigate } from 'react-router-dom';
import {auth} from '../../firebase-config.js'


function Login(){
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")

    const [error, setError] = useState("")
    const navigate = useNavigate()

    const login = async () => {
        try {
            setError('')
            //function auto logins them in after signup
            const user = await signInWithEmailAndPassword(
                auth, loginEmail, loginPassword
            );
            console.log(user)
            } catch (error) {
                alert("Wrong Credentials. Please try again.")
            }

            navigate('/RegisteredUserInfo');
    }





    return(
        <div className="container" >
            <div className="float-child leftside" ></div>
            <div className="content">
            <div className="login">
                <h1>Reservation System</h1>
                <h2>Welcome</h2>
                <input style={{marginBottom: "10px"}} type="Email" placeholder="Email" required onChange={(event) => {setLoginEmail(event.target.value);}}/><br/>
                <input style={{marginBottom: "10px"}} type="Password" placeholder="Password" required onChange={(event) => {setLoginPassword(event.target.value);}}/><br/>
                {/*<Link to='/RegisteredUserInfo'>*/}
                    <button className="greenbut" onClick={login}>Log in</button>
                {/*</div></Link>*/}
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