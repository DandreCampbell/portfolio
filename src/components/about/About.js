import React from 'react';
import { Row, Col } from 'react-bootstrap';
import dev from './img/dev.svg';
import './About.css';

export default function About() {
    return (
        <div id="about">
            <Row style={{paddingTop:"15px", paddingBottom:"100px"}}>
                <Col lg={6} style={{paddingTop:"25px"}}>
                    <h1 className="line text-typing">
                        D'Andre Campbell
                    </h1>
                    {/* eslint-disable-next-line  */}
                    <h2 className="mb-2" className="position">
                        Developer & Photographer
                    </h2>                        
                    <p className="about-me">
                        Hey, my name is D’Andre. I’m a self taught, aspiring Front End Developer based out 
                        of New York. I choose this area of development because it allows me to combine my 
                        creative side with my love for coding. Currently, I’m working in the IT field as 
                        a Technician but I’ve always had an interest in the Development field. I have 4 
                        years of programming in various different languages such as <span style={{color:"#d9534f"}}>Java</span> and <span style={{color:"#9884fc"}}>Python</span> but 
                        currently <span style={{color:"rgb(39, 221, 221)"}}>React.js</span> is my main focus.
                    </p>                    
                </Col>
                <Col lg={6} style={{paddingTop:"50px"}}>
                    <img src={dev} alt="Goals Illustration"
                    width="70%" height="auto" 
                    className="illustration" />
                </Col>
            </Row>
        </div>
    )
}
