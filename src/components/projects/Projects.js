/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import photosite from './assets/img/visualsbydandre.jpg';
import comparts from './assets/img/choosemyparts.png';

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

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;  
`;

const projectTitle = {
    fontSize: "24px",
    color: "rgb(39, 221, 221)" 
};

const background = {
    backgroundColor: "black",
    color: "white"
};

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
            <Center>
                <Card style={{width: "600px"}}>
                    <Card.Img variant="top" src={photosite} />
                    <Card.Body style={background}>
                        <Center>
                            <Card.Title style={projectTitle}>
                                Photography Portfolio
                            </Card.Title>                        
                        </Center>
                        <Card.Text>
                            <Center>
                                Portfolio website for my photography and videos.
                            </Center>                          
                        </Card.Text>
                        <Center>
                            <Button 
                            variant="primary" 
                            style={{fontSize: "20px"}}
                            href="https://visualsbydandre.com"
                            >
                                Visit Website
                            </Button>                                  
                        </Center>
                    </Card.Body>                
                </Card>     
            </Center>        
            <Center>
                <Card style={{width: "600px"}}>
                    <Card.Img variant="top" src={comparts} />
                    <Card.Body style={background}>
                        <Center>
                            <Card.Title style={projectTitle}>
                                Choose My Parts
                            </Card.Title>                        
                        </Center>
                        <Card.Text>
                            <Center>
                                Website designed to recommend its users different types of computer 
                                parts that can be used to build their own Custom PC. Provides parts 
                                for different budget ranges.
                            </Center>                          
                        </Card.Text>
                        <Center>
                            <Button 
                            variant="primary" 
                            style={{fontSize: "20px"}}
                            href="https://romantic-stonebraker-6b2182.netlify.app/"
                            >
                                Visit Website
                            </Button>                                  
                        </Center>
                    </Card.Body>                
                </Card>                 
            </Center>
            <End>
                My other coding projects can be found on my Github. 
            </End>
        </ProjectList>
    )
}

{/* 
name: 'Fancy Clock',
link: 'https://pensive-newton-dc8f28.netlify.app',
tools: 'HTML | CSS | Javascript',
description: 'Clock showing the time of 4 different U.S. time zones with custom backgrounds for each.'
*/}