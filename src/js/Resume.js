import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/App.css';
import '../css/Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <div id="section-experience">
          <div className="section-title">
            <h3>Experience</h3>
          </div>
          <div className="section-box" >
            <h3>UI/UX Designer & Frontend Developer</h3>
            <h4>2016.06-2016.09 VINNOVA Stockholm, Sweden</h4>
            <p>UI/UX design and front-end development for a web-based visualisation tool of Horizon 2020 at the Swedish Innovation Agency</p>
            <hr/>
            <h3>Software Engineer Intern</h3>
            <h4>2014.02-2015.01 Whitebag GmbH Zurich, Switzerland</h4>
            <p>Development of native iOS app & web apps in Ruby on Rails; Design of API protocol; Start-up working experience</p>
            <hr/>
            <h3>R&D Engineer Intern</h3>
            <h4>2013.10-2014.01 AdMaster Inc.Shanghai, China</h4>
            <p>Implementation of the Gender Prediction Algorithm based on Hadoop using Java(Map/Reduce) </p>
            <hr/>
            <h3>Web Developer Traninee</h3>
            <h4>2012.07-2012.09 Manipal Institute of Technology Manipal, India</h4>
            <p>Design and implementation of Semantic-based website (search for flights, trains, buses and hotels) </p>
          </div>
        </div>
        
        <div id="section-education">
          <div className="section-title">
            <h3>Education</h3>
          </div>
          <div className="section-box">
            <h3>MSc Human Computer Interaction and Design</h3>
            <h4>2016.09-Present University College London London, UK</h4>
            <p>Exit year of EIT Digital Master Program.Minor in Innovation & Entrepreneurship </p>
            <hr/>
            <h3>Msc Human Computer Interaction and Design</h3>
            <h4>2015.08-2016.06 KTH Royal Institute of Technology Stockholm, Sweden</h4>
            <p>Entry year of EIT Digital Master Program.Minor in Innovation & Entrepreneurship </p>
            <hr/>
            <h3>BEn Software Engineering</h3>
            <h4>2010.09-2015.06 East China Normal University Shanghai, China</h4>
            <p>Graduate with Honor; Selected in the 21st Century Talent Acedemy and Top Innovative Training Program at ECNU</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Resume;