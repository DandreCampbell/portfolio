import React, { Component } from 'react';
import './Contact.css';
import { ContactList } from './ContactList';

class Contact extends Component {
    render() {
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
}

export default Contact;