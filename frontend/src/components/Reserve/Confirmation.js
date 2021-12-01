import React from 'react';
import "./Guest.scss";

function Confirmation(){
    return(
        <div className="container" >
            <div className="float-child leftside" >
            </div>
            <div className="content">
                <div className="guest">
                    <h1>Reservation System</h1>
                    <h2></h2>
                    <p1>A confirmation email has been sent to your inbox.</p1><br/>
                    <p2>Your table number is</p2><br/>
                    <br/>
                    <p1>Please arrive 10 minutes before your scheduled time.</p1>
                    </div>
            </div>
        </div>
    );
}

export default Confirmation;