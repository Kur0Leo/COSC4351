import React from "react";
import "./Signup.scss";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, useAuth } from '../../firebase-config.js'

function Signup(){

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const auth = getAuth()
    const currentUser = useAuth()
    {/*const [PasswordConfirm, setPasswordConfirm] = useState("")
    const [PasswordConfirm, setPasswordConfirm] = useState("")

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")*/}
    const [loading, setLoading] = useState(false)

    const register = async () => {

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            alert('Passwords do not match.')
        }
        setLoading(true)
        {/*//await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
        try {
            
        //function auto logins them in after signup
        const user = await createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value
        );
        console.log(user)
        } catch (error) {
            alert('Failed to create an account.');
        }
    setLoading(false)*/}


        try {
            setLoading(true)
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        } catch {
            alert("Failed to create an account.")
        }
    };


    return(
        <div className="container" >
            <div className="float-child leftside" ></div>
            <div className="content">
                <div className="signup">
                    <h1>Reservation System</h1>
                    <h2>Sign Up</h2>
                    {currentUser}
                    <input style={{marginBottom: "10px"}} type="text" placeholder="First Name" required /><br/>
                    <input style={{marginBottom: "10px"}} type="text" placeholder="Last Name"  required /><br/>
                    <input style={{marginBottom: "10px"}} type="Email" placeholder="Email"  ref={emailRef} required /><br/>
                    <input style={{marginBottom: "10px"}} type="Password" placeholder="Password" ref={passwordRef} required /><br/>
                    <input style={{marginBottom: "10px"}} type="Password" placeholder="Confirm Password" ref={passwordConfirmRef} required/><br/>
                    <button className="greenbut" disabled={loading} onClick={register}>Sign Up</button>
                </div>
            </div>
        </div>
    );

}

export default Signup;