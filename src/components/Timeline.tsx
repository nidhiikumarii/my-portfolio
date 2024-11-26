import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
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
            date="2022 - present"
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
            date="2020 - 2022"
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
    </div>

    
  );
}

export default Timeline;