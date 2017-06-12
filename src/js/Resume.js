import React, { Component } from 'react';
import { Row, Col, ProgressBar} from 'react-bootstrap';
import '../css/App.css';
import '../css/Resume.css';

class Resume extends Component {
  render() {
    return (
      <div className="Resume">
         <Row style={{marginLeft:0, marginRight:0}}>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
              <Col xs={12} sm={10} md={10} lg={10}>
                  <div id="section-profile">
                      
                      <div className="section-box" >
                        <h1>Zhihao Yang</h1>
                        <Row>
                            <Col xs={12} sm={12} md={2} lg={2}>
                              <h4 style={{fontWeight: 300}}>London, UK</h4>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5}>
                              <h4 style={{fontWeight: 300}}><a href="mailto:yang_zhihao@live.com">Email</a> | <a href="https://www.linkedin.com/in/yangzhihao" target="_blank">Linkedin</a> | <a href="https://www.github.com/yangzhihao519" target="_blank">Github</a> | <a href="https://www.twitter.com/yangzhihao519" target="_blank">Twitter</a> | <a href="https://www.behance.net/yangzhihao" target="_blank">Behance</a></h4>
                            </Col>
                            <Col xs={12} sm={12} md={5} lg={5}>
                                <div id="download-cv">
                                  <h4 style={{fontWeight: 300}}><a href="https://drive.google.com/file/d/0B209VNQwXS5QNFhvRmtDUER1Uzg/view?usp=sharing" target="_blank" style={{color: "white"}}>Download CV</a></h4>
                              </div>
                            </Col>
                        </Row>
                        <h3>HCI Master Student at UCL, UX Engineer</h3>
                        <h4 style={{fontWeight: 300}}>
                          I am fascinated about using digital solution to change the way we are living using the skills I have: high creativity and efficiency in sketching out prototypes and solid skills in front-end development to bring pure ideas into life. 
                        </h4>
                        <h4 style={{fontWeight: 300}}>
                          I am currently looking for full-time job starting from September 2017 regarding UX Design, Research and Development.
                        </h4>
                      </div>
                    </div>

                    <div id="section-skills">
                      <div className="section-title">
                        <h2>Skills</h2>
                      </div>
                      <div className="section-box" >
                        <Row>
                          <Col xs={12} sm={6} md={6} lg={6} className="left">
                            <h3>Sketch</h3>
                            <ProgressBar now={90} />
                            <h3>InVision</h3>
                            <ProgressBar now={90} />
                            <h3>Photoshop</h3>
                            <ProgressBar now={60} />
                            <h3>Evaluation</h3>
                            <ProgressBar now={80} />
                            <h3>Visualisation</h3>
                            <ProgressBar now={85} />
                          </Col>
                          <Col xs={12} sm={6} md={6} lg={6} className="right">
                            <h3>Javascript</h3>
                            <ProgressBar now={90} />
                            <h3>CSS</h3>
                            <ProgressBar now={90} />
                            <h3>React</h3>
                            <ProgressBar now={75} />
                            <h3>Angular</h3>
                            <ProgressBar now={80} />
                            <h3>Java</h3>
                            <ProgressBar now={85} />
                          </Col>
                        </Row>
                      </div>
                    </div>

                    <div id="section-experience">
                      <div className="section-title">
                        <h2>Experience</h2>
                      </div>
                      <div className="section-box" >
                        <div className="section-box-item">
                          <h3 style={{ fontWeight: 700 }}>UI & UX Designer & Front-end Developer Intern</h3>
                          <h4>2016.06-2016.09, VINNOVA, <span>Stockholm, Sweden</span></h4>
                          <h4 style={{ fontWeight: 300 }}>UI & UX design and front-end development for a web-based visualisation tool of Horizon 2020 at the Swedish Innovation Agency</h4>
                        </div>
                        <hr />
                        <div className="section-box-item">
                          <h3 style={{ fontWeight: 700 }}>UI Design Volunteer</h3>
                          <h4>2016.05-2016.09, Tellus, <span>Stockholm, Sweden</span></h4>
                          <h4 style={{ fontWeight: 300 }}>Evaluation and redesign of Tellus News APP & UI Design of Tellus's other products including fact Box, dashboard and landing page</h4>
                        </div>
                        <hr />
                        <div className="section-box-item">
                          <h3 style={{ fontWeight: 700 }}>Mobile Engineer Intern</h3>
                          <h4>2014.02-2015.01, Whitebag GmbH, <span>Zurich, Switzerland</span></h4>
                          <h4 style={{ fontWeight: 300 }}>Development of native iOS app & web apps in Ruby on Rails; Design of API protocol; Start-up working experience</h4>
                        </div>
                        <hr />
                        <div className="section-box-item">
                          <h3 style={{ fontWeight: 700 }}>R&D Engineer Intern</h3>
                          <h4>2013.10-2014.01, AdMaster Inc., <span>Shanghai, China</span></h4>
                          <h4 style={{ fontWeight: 300 }}>Implementation of the Gender Prediction Algorithm based on Hadoop using Java(Map/Reduce) </h4>
                        </div>
                        <hr />
                        <div className="section-box-item">
                          <h3 style={{ fontWeight: 700 }}>Web Developer Trainee</h3>
                          <h4>2012.07-2012.09, Manipal Institute of Technology, <span>Manipal, India</span></h4>
                          <h4 style={{ fontWeight: 300 }}>Design and implementation of Semantic-based website (search for flights, trains, buses and hotels) </h4>
                        </div>
                      </div>
                    </div>

                    <div id="section-education">
                      <div className="section-title">
                        <h2>Education</h2>
                      </div>
                      <div className="section-box">
                        <div className="section-box-item">
                          <h3>MSc / Human Computer Interaction and Design</h3>
                          <h4>2016.09-Present, University College London, <span>London, UK</span></h4>
                          <h4 style={{ fontWeight: 300 }}>Exit year of EIT Digital Master Program.Minor in Innovation & Entrepreneurship </h4>
                        </div>
                        <hr />
                        <div className="section-box-item">
                          <h3>MSc / Human Computer Interaction and Design</h3>
                          <h4>2015.08-2016.06, KTH Royal Institute of Technology, <span>Stockholm, Sweden</span></h4>
                          <h4 style={{ fontWeight: 300 }}>Entry year of EIT Digital Master Program.Minor in Innovation & Entrepreneurship </h4>
                        </div>
                        <hr />
                        <div className="section-box-item">
                          <h3>BEn / Software Engineering</h3>
                          <h4>2010.09-2015.06, East China Normal University, <span>Shanghai, China</span></h4>
                          <h4 style={{ fontWeight: 300 }}>Graduate with Honour; Selected in the 21st Century Talent Academy and Top Innovative Training Program at ECNU</h4>
                        </div>
                        <hr />
                        <div className="section-box-item">
                          <h3>Summer School / Entrepreneurship for Engineer in Health and Wellbeing</h3>
                          <h4 style={{ fontWeight: 300 }}>2016.08, Eindhoven University of Technology, <span>Eindhoven, Netherlands</span></h4>
                          <h4></h4>
                        </div>
                      </div>
                    </div>

                    <div id="section-awards">
                      <div className="section-title">
                        <h2>Honours & Awards</h2>
                      </div>
                      <div className="section-box">
                        <div className="section-box-item">
                          <h3>EIT Digital Excellence Scholarship</h3>
                          <h4>2015.05, EIT Digital Master School</h4>
                        </div>
                        <hr />
                        <div className="section-box-item">
                          <h3>Outstanding University Graduate of Shanghai, <span>Top 3%</span></h3>
                          <h4>2015.05, Education Committee of Shanghai, China</h4>
                        </div>
                        <hr />
                        <div className="section-box-item">
                          <h3>National Scholarship, <span>Top 0.2%</span></h3>
                          <h4>2013.09, Ministry of Education, China</h4>
                        </div>
                        <hr />
                        <div className="section-box-item">
                          <h3>Excellent Student Leader</h3>
                          <h4>2012.09, East China Normal University</h4>
                        </div>
                        <hr />
                        <div className="section-box-item">
                          <h3>Top Grade Scholarship, <span>Top 5%</span></h3>
                          <h4>2011.09, East China Normal University</h4>
                        </div>
                      </div>
                    </div>

                    <div id="section-languages">
                      <div className="section-title">
                        <h2>Languages</h2>
                      </div>
                      <div className="section-box" >
                        <Row>
                          <Col xs={12} sm={6} md={6} lg={6} className="red">
                            <h3>Chinese</h3>
                            <ProgressBar now={100} />
                            <h4>Native Speaker</h4>
                          </Col>
                          <Col xs={12} sm={6} md={6} lg={6} className="blue">
                            <h3>English</h3>
                            <ProgressBar now={90} />
                            <h4>Professional fluency</h4>
                          </Col>
                        </Row>
                      </div>
                    </div>
              </Col>
        </Row>
        

      </div>
    );
  }
}

export default Resume;