import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { ContactList } from './ContactItems';
import Footer from '../footer/Footer';
import styled from 'styled-components';
import './Contact.css';

const SocialName = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 28px;
    color: white;
`;

const SocialIcon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 45px;
    text-decoration: none;
    font-size: 30px;
    color: white;
    &:hover {
        color: rgb(39, 221, 221);
        text-decoration: none;
    }
`;

export default function Contact() {
    return (
        <div id="contact">
            <h2 style={{
                fontSize: "44px",
                display: "flex",
                justifyContent: "center",
                textDecoration: "underline",
                paddingTop: "20px",
                paddingBottom: "30px",
            }}
            >
                Contact
            </h2>
            <ListGroup>
                {ContactList.map(media => ( 
                    <ListGroup.Item style={{border:"none", backgroundColor:"black"}}>
                        <SocialName style={{letterSpacing:"3px"}}>{media.social}</SocialName>
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
            
            <Footer />
        </div>
    );
};
