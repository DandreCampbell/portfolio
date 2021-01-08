import React from 'react';
import './Timeline.css'
import { TimelineItems } from './TimelineItems';

export default function Timeline() {
    return (
        <div id="timeline">
            <h2 className="section-title">Timeline</h2>
            <div className="container">
                <div className="timeline">
                    <ul>                  
                        {TimelineItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="timeline-content">
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
