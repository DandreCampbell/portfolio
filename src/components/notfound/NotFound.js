import React from 'react';
import pic from './thinking.svg';

const coolImage = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
 };

export default function NotFound() {
    return (
        <div style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "fixed"
        }}>
            <a href="/" style={{textDecoration: "none"}}>
                <h1 style={{fontSize: "45px"}}>What are you looking for?</h1>
            </a>
            <img src={pic} alt="Productivity Illustration" width="275px" height="auto" style={coolImage} />
            <h2 style={{fontSize: "24px", textAlign:"center", paddingTop:"30px"}}>
                Page Not Available
            </h2>
        </div>
    )
}
