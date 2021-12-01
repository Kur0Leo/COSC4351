import React from 'react';
import firsttable from '../assets/2p1.png';
import secondtable from '../assets/4p2.png';
import thirdtable from '../assets/6p3.png';
import fifthtable from '../assets/4p5.png';
import fourthtable from'../assets/2p4.png';
import sixthtable from '../assets/8p6.png';
import './table.scss';

function Tablespic(){
    return(
        <div className="row">
            <div className="columns">
               
                <img src={firsttable}/>
                    
                <br/>
                
                    <img src={thirdtable}/>
                   <br/>
                
                    <img src={fifthtable}/>
                    <br/>
            </div>
            <div className="columns">
            
                    <img src={secondtable}/>
                    <br/>
                
                    <img src={fourthtable}/>
                   <br/>
                
                    <img src={sixthtable}/>
                    <br/>
            </div>
            
            
        </div>
    );
}

export default Tablespic;