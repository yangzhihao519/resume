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
            <h3>Hello!</h3>
            <h2><span>I'm</span>&nbsp; Zhihao Yang</h2>
            <h4>UI/UX Designer & Frontend Developer</h4>
            <br/>
            <p>Born and grew up in Sichuan, China, I got my bachelor degree of Software Engineering at East China Normal University and am now pursuing my master degree at University College London in Human Computer Interaction and Design.</p> 
            <p>Previously I have worked at university, startups and governmental agency in India, China, Switzerland and Sweden as UI/UX Designer and Frontend Developer.</p>
            <div className="call-to-actinon">
              <Row>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <Link to="/resume" style={{color: "white"}}>
                    <div className="view-cv">
                      <h5>VIEW RESUME</h5>
                    </div>
                  </Link>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                  <Link to="/portfolio" style={{color: "white"}}>
                    <div className="view-portfolio">
                      <h5>SEE WORKS</h5>
                    </div>
                  </Link>
                </Col>
              </Row>
            </div>
          </div>

          <div className="section-title">
              <h3>Find me somewhere else</h3>
          </div>
          <div className="section-box">
            <div id="social-media">
              <Row>
                <Col xs={6} sm={6} md={4} lg={2}>
                  <h4><a href="https://www.facebook.com/yangzhihaowill" target="_blank">Facebook</a></h4>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2}>
                  <h4><a href="https://www.twitter.com/yangzhihao519" target="_blank">Twitter</a></h4>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2}>
                  <h4><a href="https://www.linkedin.com/in/yangzhihao" target="_blank">Linkedin</a></h4>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2}>
                  <h4><a href="https://www.instagram.com/yang.z.h" target="_blank">Instagram</a></h4>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2}>
                  <h4><a href="https://www.github.com/yangzhihao519" target="_blank">Github</a></h4>
                </Col>
                <Col xs={6} sm={6} md={4} lg={2}>
                  <h4><a href="https://www.behance.net/yangzhihao" target="_blank">Behance</a></h4>
                </Col>
              </Row>
            </div>
          </div>
      </div>
      );
  }
}

export default Home;