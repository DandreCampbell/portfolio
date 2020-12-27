import React from 'react';
import './Contact.css';
import { ContactList } from './ContactList';

export default function Contact() {
    return (
        <div id="contact">
            <h2 className="section-title">Contact</h2>
            <ul className="contact-list">
                {ContactList.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item.url} className={item.cName}></a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}