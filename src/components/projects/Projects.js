/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from 'react';
import './Projects.css'
import { ProjectItems } from './ProjectItems';

class Projects extends Component {
    render() {
        return (
            <div id="projects">
                <h2 className="section-title">Projects</h2>
                <div className="projects-container">
                    <div className="project-row">
                        <div className="project-box">
                            <h3 className="project-title"><a href={ProjectItems[0].link}>{ProjectItems[0].projectName}</a></h3>
                            <br/>
                            <p>{ProjectItems[0].description}</p>                            
                            <br/>
                            <span><b>Tools:</b> {ProjectItems[0].tools}</span> 
                        </div>
                        <div className="project-box">
                            <h3 className="project-title"><a href={ProjectItems[1].link}>{ProjectItems[1].projectName}</a></h3>
                            <br/>
                            <p>{ProjectItems[1].description}</p>                            
                            <br/>
                            <span><b>Tools:</b> {ProjectItems[1].tools}</span>                 
                        </div>
                    </div> 
                    <div className="project-row">
                        <div className="project-box">
                            <h3 className="project-title"><a href={ProjectItems[2].link}>{ProjectItems[2].projectName}</a></h3>
                            <br/>
                            <p>{ProjectItems[2].description}</p>                            
                            <br/>
                            <span><b>Tools:</b> {ProjectItems[2].tools}</span>
                        </div>                     
                        <div className="project-box">
                            <h3 className="project-title"><a href={ProjectItems[3].link}>{ProjectItems[3].projectName}</a></h3>
                            <br/>
                            <p>{ProjectItems[3].description}</p>                            
                            <br/>
                            <span><b>Tools:</b> {ProjectItems[3].tools}</span>
                        </div>
                    </div>
                    <div className="project-row">
                        <div className="project-box">
                            <h3 className="project-title"><a href={ProjectItems[4].link}>{ProjectItems[4].projectName}</a></h3>
                            <br/>
                            <p>{ProjectItems[4].description}</p>                            
                            <br/>
                            <span><b>Tools:</b> {ProjectItems[4].tools}</span>
                        </div>
                        <div className="project-box">
                            <h3 className="project-title"><a href={ProjectItems[5].link}>{ProjectItems[5].projectName}</a></h3>
                            <br/>
                            <p>{ProjectItems[5].description}</p>                            
                            <br/>
                            <span><b>Tools:</b> {ProjectItems[5].tools}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;