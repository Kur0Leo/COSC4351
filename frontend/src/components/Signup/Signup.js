import React from "react";
import "./Signup.scss";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, useAuth } from '../../firebase-config.js'
import db from '../../firebase-config';
import { addDoc, collection } from 'firebase/firestore';



function Signup(){
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [ firstName, setfirstName ] = useState();
    const [ lastName, setlastName ] = useState();
    const [ email, setEmail ] = useState();

    const auth = getAuth()
    const currentUser = useAuth()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            alert('Passwords do not match.')
        }

        try {
            //setLoading(true)
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            const uid = auth.currentUser.uid;
            const docRef = await addDoc(collection(db,"users"), {
                uid,
                firstName,
                lastName,
                email,
            });

            console.log("Doc with new ID:", docRef.id);
        } catch (err) {
            console.error(err)
            alert("Failed to create an account.")
        }

        navigate('/RegisteredUserInfo');
    };


    return(
        <div className="container" >
            <div className="float-child leftside" ></div>
            <div className="content">
                <div className="signup">
                    <h1>Reservation System</h1>
                    <h2>Sign Up</h2>
                    <input style={{marginBottom: "10px"}} type="text" placeholder="First Name" ref={firstNameRef} required onChange={(e) => {setfirstName(e.target.value);}}/><br/>
                    <input style={{marginBottom: "10px"}} type="text" placeholder="Last Name"  ref={lastNameRef} required onChange={(e) => {setlastName(e.target.value);}}/><br/>
                    <input style={{marginBottom: "10px"}} type="Email" placeholder="Email"  ref={emailRef} required onChange={(e) => {setEmail(e.target.value);}}/><br/>
                    <input style={{marginBottom: "10px"}} type="Password" placeholder="Password" ref={passwordRef} required /><br/>
                    <input style={{marginBottom: "10px"}} type="Password" placeholder="Confirm Password" ref={passwordConfirmRef} required/><br/>

                    <Link to='/Login'>
                    <button className="greenbut"  onClick={register}>Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    );

}

export default Signup;