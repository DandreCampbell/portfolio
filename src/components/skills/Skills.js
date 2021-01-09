import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Languages, WebTech, OtherTech } from './SkillsList';
import styled from 'styled-components';

const SkillList = styled.div`
    padding-top: 7%;
    width: 100%;
    height: 85vh;
`;

const Title = styled.h2`
    display: flex;
    justify-content: center;
    text-decoration: underline;
    padding-bottom: 5%;
    font-size: 44px;
`;

const centering = {
    width: "85%",
    paddingLeft: "15%",    
    paddingBottom: "20px",    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    border: "none"
};

const tabTitle = {
    
};

const sList = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const SkillItems = styled.li`
    display: flex;
    justify-content: center;
    font-size: 24px;
    padding: 15px;
`;

export default function Skills() {
    return (
        <SkillList id="skills">
            <Title className="section-title">Skills</Title>
            <Tabs defaultActiveKey="languages" id="skills-tabs" style={centering}>
                <Tab eventKey="languages" title="Programming Languages" style={tabTitle}> 
                    <ul style={sList}>
                        {Languages.map((item, index) => {
                            return (
                                <SkillItems key={index}>
                                    <span>{item.name}</span>
                                    <br /> 
                                    <i className={item.cName}></i>
                                </SkillItems>
                            )
                        })}
                    </ul>
                </Tab>
                <Tab eventKey="web-tech" title="Web Technology"> 
                    
                </Tab>
                <Tab eventKey="other-tech" title="Other Technology"> 
                    
                </Tab>
            </Tabs>
        </SkillList>
    )
}
