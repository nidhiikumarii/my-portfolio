import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import nidhi from '../assets/images/nidhi.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={nidhi} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nidhiikumarii" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nidhi-kumari-805658193/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Nidhi Kumari</h1>
          <p>Product Manager</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/nidhiikumarii" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nidhi-kumari-805658193/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;