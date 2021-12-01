import React from 'react';
import "./Guest.scss";
import check from '../assets/Group.png';

function Confirmation(){
    return(
        <div className="container" >
            <div className="float-child leftside" >
                <img src={check}/>
                <h1 className="h">Reservation Successfully Submitted!</h1>
            </div>
            <div className="content">
                <div className="guest">
                    <h1>Reservation System</h1>
                    <h2>Confirmation</h2>
                    <p1>A confirmation email has been sent to your inbox.</p1><br/>
                    <br/>
                    <p1>Please arrive 10 minutes before your scheduled time.</p1>
                    </div>
            </div>
        </div>
    );
}

export default Confirmation;