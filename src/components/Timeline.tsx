import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2021 - June 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Development Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Unacademy</h4>
            <p>
            Managed Development and launch of iconic subscription in the year 2021, oversaw the entire
            product lifecycle from ideation to launch, which resulted in increase in revenue by 65% in the first
            month of launch, enhanced NPS as well.
            </p>
            <p>Launched 3 offline centers for offline education for UPSC, IIT JEE, NEET, segment achieving
            45% of market share in the 1st year of launch.</p>
            <p>Effectively managed all corporate marketing functions, overseeing brand management, product
            launches, features prioritization, social events, promotional campaigns leading to increased brand
            visibility and customer engagement.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2020 - May 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Business Development Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">Unacademy</h4>
            <p>
            Drove the organization to remarkable achievements, realizing an exceptional growth rate
            of 180% over two years. Proactively identified solutions to enhance the sales team's
            capabilities.
            </p>
            <p>Boosted lead conversions by 30% through targeted sales strategies and consultative
            selling.</p>
            <p>Led revenue growth through B2C sales of educational programs, collaborated with cross
            functional (Sales, marketing, and product development).</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="items-container">
        <h1>Education History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2024 - Oct 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Product Management Launchpad</h3>
            <h4 className="vertical-timeline-element-subtitle">Airtribe</h4>
            <p>
            Completed Airtribe’s Product Management Launchpad, gaining skills in strategic roadmap planning, feature prioritization, user-centric design, go-to-market strategy, metrics-driven decision-making, and conducting effective root cause analysis.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of TechnologyBachelor of Technology - Electronics and communication Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Galgotias University</h4>
            <p>
            I completed my B.Tech in Electronics and Communication Engineering, focusing on core subjects like Digital Electronics, Analog Circuits, Communication Systems, and Microprocessors. This program equipped me with strong technical and problem-solving skills.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>

    
  );
}

export default Timeline;
