import React, { useState } from 'react'
import "./Homepage.css";

export default function HomePage() {
    const[marked,setMarked]=useState("false");
    function handleClick(){
        if(marked=="false"){
            console.log(window.confirm("You have successfully marked your attendance"));
            setMarked("true");
        }
        else{
            console.log(window.confirm("You have already marked your attendance"));
        }
    }
    return (
        <>
            <img src="profile.jpg"/>
            <h4>Total Attendance : 0</h4>
            <div class="card
            ">
                <h1>Greetings!!</h1>
                    <div class="card-body">
                        <h3 class="card-text">Mark your attendance.</h3>
                         <br/>
                         <br/>
                         <br/>
                         <div class="insidediv">
                         <button type="button" class="btn btn-secondary" onClick={handleClick}>Mark Here</button>
                         </div>
                    </div>
            </div>
        </>
    )
}
