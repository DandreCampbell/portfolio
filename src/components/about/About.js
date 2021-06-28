import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import dev from './img/dev.svg';
import './About.css';
import { ContactList } from './ContactItems';

const SocialIcon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    text-decoration: none;
    font-size: 24px;
    color: white;
    &:hover {
        color: rgb(39, 221, 221);
        text-decoration: none;
    }
`;

const socialstyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20px"
}

export default function About() {
    return (
        <div id="about">
            <Row style={{paddingTop:"15px"}}>
                <Col lg={6} style={{paddingTop:"25px"}}>
                    <h1 className="line text-typing">
                        D'Andre Campbell
                    </h1>
                    {/* eslint-disable-next-line  */}
                    <h2 className="mb-2" className="position primary-fade">
                        Developer & Photographer
                    </h2>                        
                    <p className="about-me primary-fade">
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
                    className="illustration primary-fade" />
                </Col>
            </Row>
            <Row style={socialstyle}>
                <ListGroup horizontal>
                    {ContactList.map(media => ( 
                        <ListGroup.Item className="primary-fade" style={{border:"none", backgroundColor:"black"}}>
                            <SocialIcon 
                            href={media.url} 
                            className={media.cName}
                            data-toggle="tooltip" 
                            data-placement="right" 
                            title={media.social}
                            >
                            </SocialIcon>
                        </ListGroup.Item>
                    ))}
                </ListGroup>  
            </Row>
        </div>
    )
}
