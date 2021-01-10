import React from 'react';
import { Card } from 'react-bootstrap';

const aboutStyle = {
    width: "100vw",
    height: "100%",
    backgroundColor: "black",
    color: "white"
};

const name = {
    paddingTop: "8%",
    fontSize: "70px",
    letterSpacing: "10px",
    textAlign: "center"
};

const title = {
    paddingTop: "20px",
    color: "rgb(39, 221, 221)",
    fontSize: "32px",
    textAlign: "center"
};

const aboutText = {
    paddingTop: "5%",
    width: "70%",
    margin: "auto",
    fontSize: "20px",
    lineHeight: "1.8"
};

export default function About() {
    return (
        <Card id="about" style={aboutStyle}>
            <Card.Body>
                <Card.Title style={name}>D'Andre Campbell</Card.Title>
                <Card.Subtitle className="mb-2" style={title}>Developer & Photographer</Card.Subtitle>
                <Card.Text style={aboutText}>
                    Hey, my name is D’Andre. I’m a self taught, aspiring Front End Developer based out 
                    of New York. I choose this area of development because it allows me to combine my 
                    creative side with my love for coding. Currently, I’m working in the IT field as 
                    a Technician but I’ve always had an interest in the Development field. I have 4 
                    years of programming in various different languages such as <span style={{color:"#d9534f"}}>Java</span> and <span style={{color:"#9884fc"}}>Python</span> but 
                    currently <span style={{color:"rgb(39, 221, 221)"}}>React.js</span> is my main focus.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
