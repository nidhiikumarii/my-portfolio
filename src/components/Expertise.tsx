import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProductHunt, faPython, faFigma } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "Project Planning",
    "Risk Management",
    "Project Planning and Execution",
    "Stakeholder Management",
    "Collaboration",
];

const labelsSecond = [
    "User Research",
    "Wireframing",
    "Prototyping",
    "Figma",
    "Design Thinking",
    "Customer Journey Mapping",
    "Usability Testing",
    "Interaction Design",
    
];

const labelsThird = [
    "Google Analytics",
    "SQL",
    "MS Office",
    "Data Analysis",
    "Tableau",
    "Power BI",
    "Python",
    "SQL",

    
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faProductHunt} size="3x"/>
                    <h3>Product Management</h3>
                    <p>Expert in strategic roadmap planning, feature prioritization, and conducting in-depth market analysis to align product vision with business objectives. Highly skilled in developing and executing go-to-market (GTM) strategies, leveraging strong product intuition, and performing comprehensive metrics analysis. Demonstrated expertise in conducting root cause analysis to identify opportunities for continuous improvement, driving data-informed decisions, and optimizing performance outcomes for sustained product success.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} size="3x"/>
                    <h3>UI UX Design</h3>
                    <p>Proficient in user research, design thinking, and customer journey mapping, with a keen focus on identifying and addressing user pain points to enhance overall engagement. Experienced in translating user insights into actionable product strategies, optimizing user flows, and ensuring intuitive, seamless experiences. Adept at leveraging research-driven decisions to create impactful, user-centric designs that drive product success and elevate user satisfaction.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartSimple} size="3x"/>
                    <h3>Data Analytics</h3>
                    <p>As a Project Manager, I excel in leading cross-functional teams to deliver projects on time and within budget. With expertise in creating detailed project plans, managing risks, and adapting to changes using Agile methodologies, I ensure continuous value delivery. My strong communication skills enable effective stakeholder management and collaboration. I am proficient in tracking progress, resolving issues, and optimizing resources to achieve project goals and drive successful business outcomes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;