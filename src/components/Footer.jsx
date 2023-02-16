import React from 'react';
import linkedinIcon from '../images/icons8-linkedin-25.png';
import githubIcon from '../images/icons8-octocat-25.png';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h1>Bulit by Abubakr Farah</h1>
          <ul>
              <li>
                <a href='https://www.linkedin.com/in/abubakr-farah-579177211' target='_blank' rel='noopner noreferrer'>
                  <img src={linkedinIcon} alt="linkedinIcon" title='Linkedin'/>
                </a>
                </li>
              <li>
                <a href='https://github.com/abubkar-ahmed' target='_blank' rel='noopner noreferrer'>
                  <img src={githubIcon} alt="githubIcon" title='Github'/>
                </a>
              </li>

          </ul>
      </div>

        
    </footer>
  )
}

export default Footer