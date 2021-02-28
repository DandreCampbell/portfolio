import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Link = styled.span`
    padding: 15px;
    font-family: 'Permanent Marker';   
    font-size: 18px;        
    color: white;
    &:hover {
        color: rgb(39, 221, 221);
    }
`;

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="nav-style" variant="dark">  
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" style={{fontSize: "24px"}} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/"><Link>About</Link></Nav.Link>
                    <Nav.Link href="/timeline"><Link>Timeline</Link></Nav.Link>
                    <Nav.Link href="/projects"><Link>Projects</Link></Nav.Link>
                    <Nav.Link href="/contact"><Link>Contact</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}