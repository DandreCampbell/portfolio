import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Foot = styled.h3`
    bottom: 0;
    font-size: 16px;
    font-family: 'Permanent Marker';     
    color: rgb(39, 221, 221);    
`;

export default function Footer() {
    return (
        <Container fluid id="footer" style={{textAlign:"center"}}> 
            <Foot>Designed and Built by D'Andre Campbell, 2020</Foot>
        </Container>
    );
};