import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/App.css';
import '../css/Home.css'
import { Link } from 'react-router'



class Home extends Component {

  render() {
    return (
      <div className="Home">
        <div id="introduction">
          <Row style={{marginLeft:0, marginRight:0}}>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
              <Col xs={12} sm={10} md={10} lg={10}>
                  <h1 id="hello">Hello!</h1>
                  <h1><span>I'm</span>&nbsp; Zhihao Yang,</h1>
                  <h1><span>a</span>&nbsp; UX Engineer &nbsp;<span>based in London.</span></h1>
                  <div className="call-to-actinon">
                    <Row>
                      <Col xs={4} sm={2} md={2} lg={2}>
                        <Link to="/portfolio" style={{ color: "white" }}>
                          <div id="view-portfolio">
                            <h5>See Work</h5>
                          </div>
                        </Link>
                      </Col>
                      <Col xs={4} sm={2} md={2} lg={2}>
                        <div id="view-cv">
                            <h5><a href="https://drive.google.com/file/d/0B209VNQwXS5QNFhvRmtDUER1Uzg/view?usp=sharing" target="_blank" style={{color: "white"}}>View Resume</a></h5>
                          </div>
                      </Col>
                    </Row>
                  </div>
              </Col>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
          </Row>
        </div>

        <div id="about-me">
            <Row style={{marginLeft:0, marginRight:0}}>
              <Col xs={0} sm={1} md={1} lg={2}></Col>
              <Col xs={12} sm={10} md={10} lg={8}>
                  <h3>Fascinated about using technology to change the way we are living, Zhihao is eager to contribute to the digital transformation era with his high creativity and efficiency in sketching out prototypes and solid skills in front-end development to bring pure ideas into life.</h3>
              </Col>
              <Col xs={0} sm={1} md={1} lg={2}></Col>
            </Row>
        </div>
        
        <div id="work" className="home-work">
          <div className="home-work-item" id="work-item-1">
            <Row style={{marginLeft:0, marginRight:0}}>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
                <Col xs={12} sm={6} md={4} lg={4}>
                    <h3>UX Design & Development</h3>
                    <h1>A Web-based Visualisation Tool for Horizon 2020</h1>
                    <h4>Making it possible to present thousands entries of data in a colorful tree.</h4>
                    <a href="#/portfolio/1" target="_blank">
                       <div className="view-more-button">
                          <h4 style={{fontWeight: 600, margin: 0}}>View more</h4>
                       </div>
                    </a>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1}>
                </Col>
                <Col xs={12} sm={6} md={5} lg={5}>
                    <div className="work-item-image">
                        <img src={require('../images/portfolio/h2020_cover.png')} role="presentation"/>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
            </Row>
          </div>

          <div className="home-work-item" id="work-item-2">
            <Row style={{marginLeft:0, marginRight:0}}>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
                <Col xs={12} sm={6} md={5} lg={5}>
                    <div className="work-item-image">
                        <img src={require('../images/portfolio/saw_cover.png')} role="presentation"/>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1}>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4}>
                    <h3>Interaction Design</h3>
                    <h1>Seizure Alert Watch & APP</h1>
                    <h4>Designing an Assistive Technology to support the epileptic patients and help them live as normal people.</h4>
                    <a href="#/portfolio/2" target="_blank">
                       <div className="view-more-button">
                          <h4 style={{fontWeight: 600, margin: 0}}>View more</h4>
                       </div>
                    </a>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
            </Row>
          </div>

          <div id="more-work">
            <Row style={{marginLeft:0, marginRight:0}}>
              <Col xs={0} sm={1} md={1} lg={2}></Col>
              <Col xs={12} sm={10} md={10} lg={8}>
                   <Link to="/portfolio" target="_blank"  style={{ color: "white" }}>
                      <div id="more-work-button">
                          <h4>See more selected work</h4>
                      </div>
                  </Link>
              </Col>
              <Col xs={0} sm={1} md={1} lg={2}></Col>
            </Row>
          </div>

        </div>

        <div id="references">
            <Row style={{marginLeft:0, marginRight:0}}>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
              <Col xs={12} sm={4} md={4} lg={4}>
                  <h2>“Yang showed excellent analytical skills and he distinguished himself by being very fast in finding as well as implementing original and innovative solutions to problems throughout the whole project.”</h2>
                  <h3>Linda Bell, Head of Unit, EU R&D Relations, VINNOVA</h3>
              </Col>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
              <Col xs={12} sm={5} md={5} lg={5}>
                  <h2>“We came to appreciate Mr Yang as a flexible and highly motivated employee who approached his tasks in a constructive and consistently solution-driven way. His exceptionally helpful and team-focused nature ensured that all of his coworkers held him equally high regard.”</h2>
                  <h3>Giacomo Bordoli, CEO, WHITEBAG GmbH</h3>
              </Col>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
            </Row>
        </div>

        <div id="contact">
            <Row style={{marginLeft:0, marginRight:0}}>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
              <Col xs={12} sm={10} md={10} lg={10}>
                  <h1>Let’s get in touch!</h1>
                  <h1>Let me know if you have any interesting ideas to work on.</h1>
                  <h1><a href="mailto:yang_zhihao@live.com">Email</a>, <a href="https://www.linkedin.com/in/yangzhihao" target="_blank">Linkedin</a>, <a href="https://www.github.com/yangzhihao519" target="_blank">Github</a>, <a href="https://www.twitter.com/yangzhihao519" target="_blank">Twitter</a> & <a href="https://www.behance.net/yangzhihao" target="_blank">Behance</a></h1>
              </Col>
              <Col xs={0} sm={1} md={1} lg={1}></Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default Home;