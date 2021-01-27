import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
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
    // eslint-disable-next-line
    const [socials, setSocials] = useState([
        {
            social: 'Email',
            url: 'mailto:dandrecampbell5@gmail.com',
            cName: 'fas fa-envelope contact-icon'
        },
        {
            social: 'Discord',
            url: 'https://discordapp.com/users/456580598480240672',
            cName: 'fab fa-discord contact-icon'
        },
        {
            social: 'LinkedIn',
            url: 'https://www.linkedin.com/in/dandre-campbell/',
            cName: 'fa fa-linkedin contact-icon'
        },
        {
            social: 'Github',
            url: 'https://github.com/DandreCampbell',
            cName: 'fab fa-github contact-icon'
        },
        {
            social: 'Instagram',
            url: 'https://www.instagram.com/dandre_campbell/',
            cName: 'fab fa-instagram contact-icon' 
        }
    ]);

    return (
        <div id="contact">
            <h2 className="section-title">Contact</h2>
            <ListGroup>
                {socials.map(media => ( 
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
