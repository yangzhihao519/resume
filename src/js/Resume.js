import React, { Component } from 'react';
import { Row, Col, ProgressBar, Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/App.css';
import '../css/Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <div id="section-profile">
          <div className="section-title">
              <h2>Resume</h2>
          </div>
          <div className="section-box" >
            <h3>Zhihao Yang</h3>
            <h4>Master Student at University College London, UI/UX Designer & Frontend Developer</h4>
            <Row id="section-profile-info">
              <Col xs={12} sm={6} md={6} lg={6}>
                <Row>
                  <Col xs={4} sm={4} md={4} lg={3} className="title">
                    <h4>Age</h4>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={9} className="content">
                    <h4>24</h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} sm={4} md={4} lg={3} className="title">
                    <h4>Location</h4>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={9} className="content">
                    <h4>London, UK</h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} sm={4} md={4} lg={3} className="title">
                    <h4>Email</h4>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={9} className="content">
                    <h4><a href="mailto:yang_zhihao@live.com">yang_zhihao@live.com</a></h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} sm={4} md={4} lg={3} className="title">
                    <h4>Graduate</h4>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={9} className="content">
                    <h4>Sep, 2017</h4>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6}>
                <Row>
                  <Col xs={4} sm={4} md={4} lg={3} className="title">
                    <h4>Website</h4>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={9} className="content">
                    <h4><a href="https://www.yangzhihao.info" target="_blank">yangzhihao.info</a></h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} sm={4} md={4} lg={3} className="title">
                    <h4>Linkedin</h4>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={9} className="content">
                    <h4><a href="https://www.linkedin.com/in/yangzhihao" target="_blank">yangzhihao</a></h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} sm={4} md={4} lg={3} className="title">
                    <h4>Github</h4>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={9} className="content">
                    <h4><a href="https://www.github.com/yangzhihao519" target="_blank">yangzhihao519</a></h4>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4} sm={4} md={4} lg={3} className="title">
                    <h4>Behance</h4>
                  </Col>
                  <Col xs={8} sm={8} md={8} lg={9} className="content">
                    <h4><a href="https://www.behance.net/yangzhihao" target="_blank">yangzhihao</a></h4>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>

        <div id="section-experience">
          <div className="section-title">
            <h3>Experience</h3>
          </div>
          <div className="section-box" >
            <h4 style={{fontWeight: 700}}>UI/UX Designer & Frontend Developer</h4>
            <h4>2016.06-2016.09 VINNOVA Stockholm, Sweden</h4>
            <p>UI/UX design and front-end development for a web-based visualisation tool of Horizon 2020 at the Swedish Innovation Agency</p>
            <hr/>
            <h4 style={{fontWeight: 700}}>Mobile Engineer Intern</h4>
            <h4>2014.02-2015.01 Whitebag GmbH Zurich, Switzerland</h4>
            <p>Development of native iOS app & web apps in Ruby on Rails; Design of API protocol; Start-up working experience</p>
            <hr/>
            <h4 style={{fontWeight: 700}}>R&D Engineer Intern</h4>
            <h4>2013.10-2014.01 AdMaster Inc.Shanghai, China</h4>
            <p>Implementation of the Gender Prediction Algorithm based on Hadoop using Java(Map/Reduce) </p>
            <hr/>
            <h4 style={{fontWeight: 700}}>Web Developer Traninee</h4>
            <h4>2012.07-2012.09 Manipal Institute of Technology Manipal, India</h4>
            <p>Design and implementation of Semantic-based website (search for flights, trains, buses and hotels) </p>
          </div>
        </div>

        <div id="section-skills">
          <div className="section-title">
            <h3>Skills</h3>
          </div>
          <div className="section-box" >
            <Row>
              <Col xs={12} sm={6} md={6} lg={6} className="left">
                <h4>Sketch</h4>
                <ProgressBar now={90} />
                <h4>InVision</h4>
                <ProgressBar now={90} />
                <h4>Photoshop</h4>
                <ProgressBar now={60} />
                <h4>Evaluation</h4>
                <ProgressBar now={80} />
                <h4>Visualisation</h4>
                <ProgressBar now={85} />
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} className="right">
                <h4>Javascript</h4>
                <ProgressBar now={90} />
                <h4>CSS</h4>
                <ProgressBar now={90} />
                <h4>React</h4>
                <ProgressBar now={75} />
                <h4>Angular</h4>
                <ProgressBar now={80} />
                <h4>Java</h4>
                <ProgressBar now={85} />
              </Col>
            </Row>
          </div>
        </div>
        
        <div id="section-education">
          <div className="section-title">
            <h3>Education</h3>
          </div>
          <div className="section-box">
            <h4 style={{fontWeight: 700}}>MSc Human Computer Interaction and Design</h4>
            <h4>2016.09-Present University College London London, UK</h4>
            <p>Exit year of EIT Digital Master Program.Minor in Innovation & Entrepreneurship </p>
            <hr/>
            <h4 style={{fontWeight: 700}}>MSc Human Computer Interaction and Design</h4>
            <h4>2015.08-2016.06 KTH Royal Institute of Technology Stockholm, Sweden</h4>
            <p>Entry year of EIT Digital Master Program.Minor in Innovation & Entrepreneurship </p>
            <hr/>
            <h4 style={{fontWeight: 700}}>BEn Software Engineering</h4>
            <h4>2010.09-2015.06 East China Normal University Shanghai, China</h4>
            <p>Graduate with Honor; Selected in the 21st Century Talent Acedemy and Top Innovative Training Program at ECNU</p>
          </div>
        </div>

        <div id="section-awards">
          <div className="section-title">
            <h3>Honors & Awards</h3>
          </div>
          <div className="section-box">
            <h4 style={{fontWeight: 700}}>EIT Digital Excellence Scholarship</h4>
            <h4>2015.05, EIT Digital Master School</h4>
            <hr/>
            <h4 style={{fontWeight: 700}}>Outstanding University Graduate of Shanghai, <span>Top 3%</span></h4>
            <h4>2015.05, Education Committee of Shanghai, China</h4>
            <hr/>
            <h4 style={{fontWeight: 700}}>National Scholarship, <span>Top 0.2%</span></h4>
            <h4>2013.09, Ministry of Education, China</h4>
            <hr/>
            <h4 style={{fontWeight: 700}}>Excellent Student Leader</h4>
            <h4>2012.09, East China Normal University</h4>
            <hr/>
            <h4 style={{fontWeight: 700}}>Top Grade Scholarship, <span>Top 5%</span></h4>
            <h4>2011.09, East China Normal University</h4>
          </div>
        </div>

        <div id="section-languages">
          <div className="section-title">
            <h3>languages</h3>
          </div>
          <div className="section-box" >
            <Row>
              <Col xs={12} sm={6} md={6} lg={6} className="red">
                <h4>Chinese</h4>
                <ProgressBar now={100} />
                <h5>Native Speaker</h5>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} className="blue">
                <h4>English</h4>
                <ProgressBar now={90} />
                <h5>Professional fluency</h5>
              </Col>
            </Row>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Resume;