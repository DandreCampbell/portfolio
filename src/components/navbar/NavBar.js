import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import pdf from '../../Resume.pdf';

const Link = styled.span`
    font-size: 18px;        
    color: white;
    padding: 15px;    
    &:hover {
        color: rgb(39, 221, 221);
    }
`;

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav-style">  
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto" style={{fontSize: "24px"}} />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#about"><Link>About</Link></Nav.Link>
                    <Nav.Link href="#timeline"><Link>Timeline</Link></Nav.Link>
                    <Nav.Link href="#projects"><Link>Projects</Link></Nav.Link>
                    <Nav.Link href={pdf}><Link>Resume</Link> </Nav.Link>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}