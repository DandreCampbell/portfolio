import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import dev from './img/dev.svg';

export default function About() {
    return (
        <Card id="about" style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            color: "white",
        }}
        >
            <Card.Body>
                <Card.Title style={{
                    fontSize: "70px",
                    letterSpacing: "10px",
                    textAlign: "center",
                    paddingTop: "5%",
                }}
                >
                    D'Andre Campbell
                </Card.Title>
                <Card.Subtitle className="mb-2" style={{
                    fontSize: "32px",
                    textAlign: "center",
                    color: "rgb(39, 221, 221)",
                    paddingTop: "20px"
                }}
                >
                    Developer & Photographer
                </Card.Subtitle>
                <Row style={{
                    paddingTop:"15px", 
                    paddingBottom:"100px"
                }}
                >
                    <Col lg="6" style={{paddingTop:"25px"}}>
                        <Card.Text style={{
                            width: "87%",
                            margin: "auto",
                            fontSize: "20px",
                            lineHeight: "2.2",
                            paddingTop: "5%"
                        }}>
                            Hey, my name is D’Andre. I’m a self taught, aspiring Front End Developer based out 
                            of New York. I choose this area of development because it allows me to combine my 
                            creative side with my love for coding. Currently, I’m working in the IT field as 
                            a Technician but I’ve always had an interest in the Development field. I have 4 
                            years of programming in various different languages such as <span style={{color:"#d9534f"}}>Java</span> and <span style={{color:"#9884fc"}}>Python</span> but 
                            currently <span style={{color:"rgb(39, 221, 221)"}}>React.js</span> is my main focus.
                        </Card.Text>                    
                    </Col>
                    <Col lg="6" style={{paddingTop:"50px"}}>
                        <img src={dev} 
                        alt="Goals Illustration"
                        width="400px" 
                        height="auto" 
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                        }} 
                        />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
