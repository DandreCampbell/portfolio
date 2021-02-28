/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { ProjectItems } from './ProjectList';

import photosite from './img/visualsbydandre.jpg';
import comparts from './img/choosemyparts.png';
import cryptosite from './img/cryptoupdates.png';
import Footer from '../footer/Footer';

const screenshots = [
    photosite, comparts, cryptosite
];

const ProjectList = styled.div`
    padding-top: 7%;
    width: 100%;
    height: 100%;
`;

const Title = styled.h3`
    display: flex;
    justify-content: center;
    text-decoration: underline;
    padding-bottom: 5%;
    font-size: 44px;
`;

const centering = {
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center"
};  

const Btn = styled.div`
    &:hover {
        transform: scale(1.07);
    }
`;

const End = styled.span`
    display: flex;
    justify-content: center;
    margin: auto;
    width: 90%;
    font-size: 18px;
    font-weight: bold;
    padding-top: 50px;
`;

export default function Projects() {
    return (
        <ProjectList id="projects">
            <Title>Projects</Title>
                {ProjectItems.map((item, index) => (
                    <Row style={{paddingBottom:"35px"}}>
                        <Col md={7} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <img src={screenshots[index]} alt={item.alt} width="90%" height="auto" />
                        </Col>
                        <Col md={5} style={{paddingTop:"50px"}}>
                            <h2 style={{
                                fontSize: "24px",
                                color: "rgb(39, 221, 221)",
                                display:"flex", 
                                justifyContent:"center", 
                                alignItems:"center"
                            }}>
                                {item.website}
                            </h2>
                            <p style={{width:"75%", color:"white", margin:"auto", paddingTop:"10px"}}>
                                {item.description}
                            </p>
                            <ul style={centering}>
                                {ProjectItems.map((item, index) => (
                                    <li style={{fontSize:"30px", padding:"20px"}}>
                                        <i className={item.icons[index]} />
                                    </li>
                                ))}
                            </ul>     
                            <Btn style={centering}>
                                <Button href={item.url} style={{
                                    fontSize: "20px",                                    
                                    backgroundColor: "rgb(39, 221, 221, .9)",
                                    color: "black",
                                    border: "none",
                                }}>
                                    Visit Website
                                </Button>                                   
                            </Btn>                              
                        </Col>
                    </Row>  
                ))}
            <End>
                My other coding projects can be found on my Github. 
            </End>
            
            <Footer />
        </ProjectList>
    )
}
