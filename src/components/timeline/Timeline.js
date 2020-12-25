import React, { Component } from 'react';
import './Timeline.css'
import { TimelineItems } from './TimelineItems';

class Timeline extends Component {
    render() {
        return (
            <div id="timeline">
                <h2 className="section-title">Timeline</h2>
                <div className="container">
                    <div className="timeline">
                        <ul>                  
                            {TimelineItems.map((item, index) => {
                                return (
                                    <li>
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
        )
    }
}

export default Timeline;