import React, { Component } from 'react';
import { Row, Col, ProgressBar} from 'react-bootstrap';
import '../css/App.css';
import '../css/Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <div id="section-profile">
          <div className="section-title">
            
          </div>
          <div className="section-box" >
            <h3>Zhihao Yang</h3>
            <Row>
                <Col xs={12} sm={12} md={2} lg={2}>
                  London, UK
                </Col>
                <Col xs={12} sm={12} md={3} lg={3}>
                  <a href="mailto:yang_zhihao@live.com">yang_zhihao@live.com</a>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3}>
                  <a href="https://www.linkedin.com/in/yangzhihao" target="_blank">Linkedin</a>
                </Col>
            </Row>
            <h4>HCI Master Student at UCL, UX Designer & Front-end Developer</h4>
            <p>
              Zhihao is fascinated about using digital solution to change the way we are living using the skills he has: high creativity and efficiency in sketching out prototypes and solid skills in front-end development to bring pure ideas into life. 
            </p>
            <p>
              Zhihao is currently looking for full-time job starting from September 2017 regarding UX Design, Research and Development. (Visa sponsorship is needed for him to apply work permit in UK.)
            </p>
            
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

        <div id="section-experience">
          <div className="section-title">
            <h3>Experience</h3>
          </div>
          <div className="section-box" >
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>UI & UX Designer & Front-end Developer Intern</h4>
              <h4>2016.06-2016.09, VINNOVA, <span>Stockholm, Sweden</span></h4>
              <p>UI & UX design and front-end development for a web-based visualisation tool of Horizon 2020 at the Swedish Innovation Agency</p>
            </div>
            <hr />
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>UI Design Volunteer</h4>
              <h4>2016.05-2016.09, Tellus, <span>Stockholm, Sweden</span></h4>
              <p>Evaluation and redesign of Tellus News APP & UI Design of Tellus's other products including fact Box, dashboard and landing page</p>
            </div>
            <hr />
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>Mobile Engineer Intern</h4>
              <h4>2014.02-2015.01, Whitebag GmbH, <span>Zurich, Switzerland</span></h4>
              <p>Development of native iOS app & web apps in Ruby on Rails; Design of API protocol; Start-up working experience</p>
            </div>
            <hr />
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>R&D Engineer Intern</h4>
              <h4>2013.10-2014.01, AdMaster Inc., <span>Shanghai, China</span></h4>
              <p>Implementation of the Gender Prediction Algorithm based on Hadoop using Java(Map/Reduce) </p>
            </div>
            <hr />
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>Web Developer Trainee</h4>
              <h4>2012.07-2012.09, Manipal Institute of Technology, <span>Manipal, India</span></h4>
              <p>Design and implementation of Semantic-based website (search for flights, trains, buses and hotels) </p>
            </div>
          </div>
        </div>

        <div id="section-education">
          <div className="section-title">
            <h3>Education</h3>
          </div>
          <div className="section-box">
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>MSc Human Computer Interaction and Design</h4>
              <h4>2016.09-Present, University College London, <span>London, UK</span></h4>
              <p>Exit year of EIT Digital Master Program.Minor in Innovation & Entrepreneurship </p>
            </div>
            <hr />
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>MSc Human Computer Interaction and Design</h4>
              <h4>2015.08-2016.06, KTH Royal Institute of Technology, <span>Stockholm, Sweden</span></h4>
              <p>Entry year of EIT Digital Master Program.Minor in Innovation & Entrepreneurship </p>
            </div>
            <hr />
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>BEn Software Engineering</h4>
              <h4>2010.09-2015.06, East China Normal University, <span>Shanghai, China</span></h4>
              <p>Graduate with Honour; Selected in the 21st Century Talent Academy and Top Innovative Training Program at ECNU</p>
            </div>
          </div>
        </div>

        <div id="section-awards">
          <div className="section-title">
            <h3>Honours & Awards</h3>
          </div>
          <div className="section-box">
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>EIT Digital Excellence Scholarship</h4>
              <h4>2015.05, EIT Digital Master School</h4>
            </div>
            <hr />
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>Outstanding University Graduate of Shanghai, <span>Top 3%</span></h4>
              <h4>2015.05, Education Committee of Shanghai, China</h4>
            </div>
            <hr />
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>National Scholarship, <span>Top 0.2%</span></h4>
              <h4>2013.09, Ministry of Education, China</h4>
            </div>
            <hr />
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>Excellent Student Leader</h4>
              <h4>2012.09, East China Normal University</h4>
            </div>
            <hr />
            <div className="section-box-item">
              <h4 style={{ fontWeight: 700 }}>Top Grade Scholarship, <span>Top 5%</span></h4>
              <h4>2011.09, East China Normal University</h4>
            </div>
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