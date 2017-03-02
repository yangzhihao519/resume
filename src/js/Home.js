import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/App.css';
import '../css/Home.css'
import { Link } from 'react-router'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="section-box" id="section-about">
          <h3 id="hello">Hello!</h3>
          <h2><span>I'm</span>&nbsp; Zhihao Yang</h2>
          <h4>UX Designer & Front-end Developer</h4>
          <br />
          <p>Born and grew up in Sichuan, China, I got my bachelor degree of Software Engineering at East China Normal University and am now pursuing my master degree at University College London in Human Computer Interaction and Design.</p>
          <p>Previously I have worked at university, startups and governmental agency in India, China, Switzerland and Sweden as UI/UX Designer and Frontend Developer.</p>
          <div className="call-to-actinon">
            <Row>
              <Col xs={12} sm={2} md={2} lg={2}>
               
              </Col>
              <Col xs={12} sm={4} md={4} lg={4}>
                <Link to="/resume" style={{ color: "white" }}>
                  <div className="view-cv">
                    <h5>VIEW RESUME</h5>
                  </div>
                </Link>
              </Col>
              <Col xs={12} sm={4} md={4} lg={4}>
                <Link to="/portfolio" style={{ color: "white" }}>
                  <div className="view-portfolio">
                    <h5>SEE WORKS</h5>
                  </div>
                </Link>
              </Col>
              <Col xs={12} sm={2} md={2} lg={2}>
                
              </Col>
            </Row>
          </div>
        </div>

        <div className="section-title">
          <h3>Latest works</h3>
        </div>
        <div id="latest-works">
          <Row>
            <Col xs={12} sm={6} md={6} lg={6}>
              <a href="#/portfolio/1" target="_blank">
                <div className="portfolio-item" style={{marginBottom: 10}}>
                  <div className="portfolio-item-image">
                    <img src={require('../images/portfolio/h2020_cover.png')} role="presentation"/>
                    <div className="portfolio-item-content">
                      <h4>Web-based Visualisation Tool of Horizon 2020</h4>
                      <p>Work mainly focuses on UI & UX design and front-end development.</p>
                                <div className="view-more-button">
                        <p style={{ marginBottom: 0 + "px" }}>View More</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Col>
            <Col xs={12} sm={6} md={6} lg={6}>
              <a href="#/portfolio/2" target="_blank">
                <div className="portfolio-item" style={{marginBottom: 0}}>
                  <div className="portfolio-item-image">
                    <img src={require('../images/portfolio/saw_cover.png')} role="presentation"/>
                    <div className="portfolio-item-content">
                      <h4>Interaction Design of Seizure Alert Watch & APP</h4>
                      <p>Work mainly focuses on ideation, user research, UI & UX of low-fi and high-fi prototype of the applications.</p>
                      <div className="view-more-button">
                        <p style={{ marginBottom: 0 + "px" }}>View More</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </Col>
          </Row>
        </div>

        <div className="section-title">
          <h3>Contact me</h3>
        </div>
        <div className="section-box">
          <div id="contact">
            <h4>Currently I am interested in part-time job and looking for full-time job starting from Sep, 2017.</h4>
            <h4 style={{fontWeight: 300}}>Let me know if you have any interesting ideas/projects to work on!</h4>
            <a href="mailto:yang_zhihao@live.com" id="email-box"><h5>SEND ME AN EMAIL</h5></a>
          </div>
          <div id="social-media">
            <Row>
              <Col xs={0} sm={0} md={0} lg={2}>
                
              </Col>
              <Col xs={6} sm={6} md={3} lg={2}>
                <h4><a href="https://www.twitter.com/yangzhihao519" target="_blank">Twitter</a></h4>
              </Col>
              <Col xs={6} sm={6} md={3} lg={2}>
                <h4><a href="https://www.linkedin.com/in/yangzhihao" target="_blank">Linkedin</a></h4>
              </Col>
              
              <Col xs={6} sm={6} md={3} lg={2}>
                <h4><a href="https://www.github.com/yangzhihao519" target="_blank">Github</a></h4>
              </Col>
              <Col xs={6} sm={6} md={3} lg={2}>
                <h4><a href="https://www.behance.net/yangzhihao" target="_blank">Behance</a></h4>
              </Col>
              <Col xs={0} sm={0} md={0} lg={2}>
                
              </Col>
            </Row>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;