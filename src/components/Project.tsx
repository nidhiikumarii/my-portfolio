import React from "react";
import zepto from '../assets/images/zepto.png';
import ytm from '../assets/images/ytm.png';
import ap from '../assets/images/ap.png';
import yt from '../assets/images/yt.png';
import fitness from '../assets/images/fitness.png';
import airtribe from '../assets/images/Airtribe.jpg';
import sql from '../assets/images/sql.png';
import uiux from '../assets/images/uiux.png';
import ga from '../assets/images/ga.png';
import P from '../assets/images/P.png';
import gaana from '../assets/images/gaaana.png';
import sri from '../assets/images/sri.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <br /><br /><h1>Personal Projects</h1><br /><br />  
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/Rapido.pdf" target="_blank" rel="noreferrer"><img src={P} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/Rapido.pdf/" target="_blank" rel="noreferrer"><h2>Rapido</h2></a>
                <p>Understand the challenges and experiences of current Rapido drivers and
figure out a short term or medium-term solution for issue of the friction
between the Rapido bike drivers and auto rickshaw drivers, and identify
insights to improve driver retention and growth in supply.</p>
            </div>
            <div className="project">
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/Fitness%20App.pdf" target="_blank" rel="noreferrer"><img src={fitness} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/Fitness%20App.pdf" target="_blank" rel="noreferrer"><h2>Fitness App - Basic Wireframe</h2></a>
                <p>Develop a fitness app that engages users with personalized workout
plans to help them achieve their fitness goals effectively. The outcome is a
user-friendly app that motivates users through their fitness journey and
continuous engagements.</p>
            </div>
            <div className="project">
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/YT%20Shorts.pdf" target="_blank" rel="noreferrer"><img src={yt} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/YT%20Shorts.pdf" target="_blank" rel="noreferrer"><h2>YT Shorts - Problem framing and Prioritisation</h2></a>
                <p>For our project on improving YouTube Shorts engagement, we combined user interviews and secondary research to identify key pain points like UI, sharing, and recommendations. Using the RICE framework, we prioritized solutions such as one-click sharing, enhanced reactions, and simplified saving options, focusing on high-impact, user-centric strategies to boost interaction effectively.</p>
            </div>
            <div className="project">
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/Analytics%20and%20Metrics.pdf" target="_blank" rel="noreferrer"><img src={ap} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/Analytics%20and%20Metrics.pdf" target="_blank" rel="noreferrer"><h2>Analytics and Metrics - Amazon Prime</h2></a>
                <p>To reduce churn, the focus is on retaining subscribers by improving engagement, satisfaction, and loyalty. Key assumptions include the importance of multi-feature usage, exclusive content, efficient support, competitive pricing, and competitor actions. The North Star Metric is Subscriber Retention Rate, supported by churn rate, CLTV, NPS, and engagement metrics. Objectives aim to increase retention by 10%, and boost engagement by 45%, and tracking key user behaviors to drive long-term growth.</p>
            </div>
            <div className="project">
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/Analytics%20and%20Metrics.pdf" target="_blank" rel="noreferrer"><img src={ytm} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/Analytics%20and%20Metrics.pdf" target="_blank" rel="noreferrer"><h2>Analytics and Metrics - Youtube Music</h2></a>
                <p>To outpace Spotify in India, YouTube Music targets a 25% rise in first-time user sign-ups through localized content, seamless onboarding, and competitive pricing. Key metrics include acquisition rate, onboarding completion, and engagement. Goals include boosting MAUs by 20%, achieving a 4.5-star rating, and 30% adoption of localized features to strengthen user retention and market presence.</p>
            </div>
            <div className="project">
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/Analytics%20and%20Metrics.pdf" target="_blank" rel="noreferrer"><img src={zepto} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/Analytics%20and%20Metrics.pdf" target="_blank" rel="noreferrer"><h2>Analytics and Metrics - Zepto</h2></a>
                <p>Zepto aims to reduce contact center costs by 15% through enhanced efficiency and self-service options. Key metrics include cost per support request, first-contact resolution, and self-service utilization. Goals include a 10% drop in support request volume, a 20% improvement in resolution rates, and a 25% increase in self-service usage. Improved user experience, such as reducing common issues by 30% and enhancing in-app guidance, will drive sustainability and scalability.</p>
            </div>
            <div className="project">
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/gaana.pdf" target="_blank" rel="noreferrer"><img src={gaana} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/gaana.pdf" target="_blank" rel="noreferrer"><h2>Problem Solving Case - Gaana</h2></a>
                <p>Gaana users report dissatisfaction due to frequent ads disrupting the listening experience, limited song availability in regional languages, and a perceived drop in audio quality. Additionally, complaints include app performance issues like slow loading and crashes. The lack of unique features compared to competitors intensifies frustration, prompting users to switch platforms.</p>
            </div>
            <div className="project">
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/sri%20mandir.pdf" target="_blank" rel="noreferrer"><img src={sri} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/nidhiikumarii/github.io/blob/main/sri%20mandir.pdf" target="_blank" rel="noreferrer"><h2>Effective Communication as PM - Sri Mandir</h2></a>
                <p>This project aims to boost Sri Mandir’s premium plan renewals by introducing personalized discount nudges. By addressing declining renewals, it focuses on enhancing user retention and recurring revenue. The goal is to identify an optimal discount strategy that supports users’ spiritual journeys while balancing retention and revenue growth sustainably.</p>
            </div>
        </div>
        {/* certification div starts here */}
        <br /><br /><h1>Certifications</h1><br /><br />
        <div className="cert-grid">
            <div className="cert">
                <a href="https://www.airtribe.live/product-management/certificate/09PYEL4NU8JX" target="_blank" rel="noreferrer"><img src={airtribe} className="zoom" alt="thumbnail" width="50%"/></a>
                <a href="https://www.airtribe.live/product-management/certificate/09PYEL4NU8JX" target="_blank" rel="noreferrer"><h2>Airtribe</h2></a>
                <p>Completed Airtribe’s Product Management Launchpad, gaining skills in strategic roadmap planning, feature prioritization, user-centric design, go-to-market strategy, metrics-driven decision-making, and conducting effective root cause analysis.</p>
            </div>
            <div className="cert">
                <a href="https://www.mygreatlearning.com/certificate/FFHNVOUR" target="_blank" rel="noreferrer"><img src={ga} className="zoom" alt="thumbnail" width="50%"/></a>
                <a href="https://www.mygreatlearning.com/certificate/FFHNVOUR" target="_blank" rel="noreferrer"><h2>Google Analytics</h2></a>
                <p>Completed Google Analytics course from Great Learning, acquiring skills in data interpretation, website performance analysis, goal tracking, audience segmentation, and leveraging actionable insights to optimize campaigns and enhance business outcomes.</p>
            </div>
            <div className="cert">
                <a href="https://www.mygreatlearning.com/certificate/RSEAXUVT" target="_blank" rel="noreferrer"><img src={uiux} className="zoom" alt="thumbnail" width="50%"/></a>
                <a href="https://www.mygreatlearning.com/certificate/RSEAXUVT" target="_blank" rel="noreferrer"><h2>UI UX</h2></a>
                <p>Completed UI/UX for Beginners course from Great Learning, gaining foundational skills in user research, wireframing, prototyping, design principles, and creating intuitive, user-centric interfaces to enhance overall experience and engagement.</p>
            </div>
            <div className="cert">
                <a href="https://www.mygreatlearning.com/certificate/QGGRPRPP" target="_blank" rel="noreferrer"><img src={sql} className="zoom" alt="thumbnail" width="50%"/></a>
                <a href="https://www.mygreatlearning.com/certificate/QGGRPRPP" target="_blank" rel="noreferrer"><h2>SQL</h2></a>
                <p>Completed the SQL course from Great Learning, acquiring skills in database management, writing complex queries, data manipulation, and optimization techniques, enabling efficient handling and analysis of structured data for actionable insights.</p>
            </div>
        </div>
    </div>
    
    );
}

export default Project;
