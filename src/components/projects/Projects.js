import React from 'react';
import './Projects.css';
import { Button, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { ProjectItems } from './ProjectList';
import GitHubCalendar from 'react-github-calendar';

import photosite from './img/visualsbydandre.jpg';
import comparts from './img/choosemyparts.png';
import cryptosite from './img/cryptoupdates.png';

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

const Btn = styled.div`
    &:hover {
        transform: scale(1.05);
    }
`;

const Calendar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
`;

const centering = {
    display:"flex", 
    justifyContent:"center", 
    alignItems:"center",
    paddingTop:"30px"
};  

const calendarTheme = {
    background: 'transparent',
    text: 'white',
    grade4: '#BFD7ED',
    grade3: '#60A3D9',
    grade2: '#0074B7',
    grade1: '#003B73',
    grade0: '#eee',
};

export default function Projects() {
    return (
        <ProjectList id="projects">
            <Title>Projects</Title>
            {ProjectItems.map((item, index) => (
                <Row className="primary-fade" style={{paddingBottom:"35px"}}>
                    <Col style={centering}>
                        <Card style={{width:"500px", height:"500px", backgroundColor:"black", border:"1px solid" ,boxShadow:"5px 5px 10px grey"}}>
                            <Card.Img variant="top" src={screenshots[index]} alt={item.alt} width="90%" height="auto" />    
                            <h2 style={centering}>{item.website}</h2>      
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
                        </Card>
                    </Col>
                </Row>  
            ))}
            <Calendar>
                <GitHubCalendar username="DandreCampbell" theme={calendarTheme} />
            </Calendar>
        </ProjectList>
    )
}
