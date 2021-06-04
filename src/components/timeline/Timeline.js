import React from 'react';
import styled from 'styled-components';
import './Timeline.css'
import { TimelineItems } from './TimelineItems';

const Title = styled.h2`
    display: flex;
    justify-content: center;
    text-decoration: underline;
    padding-bottom: 5%;
    font-size: 44px;
`;

export default function Timeline() {
    return (
        <div id="timeline">
            <Title className="section-title">Timeline</Title>
            <div className="container">
                <div className="timeline">
                    <ul>                  
                        {TimelineItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="timeline-content primary-fade">
                                        <h3 className="date">{item.date}</h3>
                                        <h1>{item.header}</h1>
                                        <p>{item.where}</p>
                                        <p>{item.description}</p>
                                    </div>
                                </li>
                            )
                        })}                          
                    </ul>
                </div>
            </div>
        </div>
    );
};
