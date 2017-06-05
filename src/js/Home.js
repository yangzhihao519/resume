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
                        <Link to="/resume" style={{ color: "white" }}>
                          <div id="view-cv">
                            <h5>About me</h5>
                          </div>
                        </Link>
                      </Col>
                      <Col xs={4} sm={2} md={2} lg={2}>
                        <Link to="/portfolio" style={{ color: "white" }}>
                          <div id="view-portfolio">
                            <h5>See work</h5>
                          </div>
                        </Link>
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
                  <Link to="/portfolio" style={{ color: "white" }}>
                    <div id="download-cv">
                      <h4><a href="https://drive.google.com/file/d/0B209VNQwXS5QNFhvRmtDUER1Uzg/view?usp=sharing" target="_blank">Download CV </a></h4>
                    </div>
                  </Link>
              </Col>
              <Col xs={0} sm={1} md={1} lg={2}></Col>
            </Row>
        </div>
        
        <div id="work">
          <div className="work-item" id="work-item-1">
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

          <div className="work-item" id="work-item-2">
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

          <div className="work-item" id="work-item-3">
            <Row style={{marginLeft:0, marginRight:0}}>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
                <Col xs={12} sm={6} md={4} lg={4}>
                    <h3>iOS APP Development</h3>
                    <h1>Vinyo: Buy the wine you love on mobile</h1>
                    <h4>Vinyo APP is a critically-acclaimed, free app that helps you search, find and buy the wine you want</h4>
                    <a href="#/portfolio/5" target="_blank">
                       <div className="view-more-button">
                          <h4 style={{fontWeight: 600, margin: 0}}>View more</h4>
                       </div>
                    </a>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1}>
                </Col>
                <Col xs={12} sm={6} md={5} lg={5}>
                    <div className="work-item-image">
                        <img src={require('../images/portfolio/vinyo_cover.png')} role="presentation"/>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
            </Row>
          </div>

          <div className="work-item" id="work-item-4">
            <Row style={{marginLeft:0, marginRight:0}}>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
                <Col xs={12} sm={6} md={5} lg={5}>
                    <div className="work-item-image">
                        <img src={require('../images/portfolio/yorktail_cover.png')} role="presentation"/>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1}>
                </Col>
                <Col xs={12} sm={6} md={4} lg={4}>
                    <h3>Full stack</h3>
                    <h1>Yocktail: Great Platform for Cocktail Lovers</h1>
                    <h4>Yocktail is a platform offered to cocktail lovers, allowing users to search, collect, create and share cocktails.</h4>
                    <a href="#/portfolio/4" target="_blank">
                       <div className="view-more-button">
                          <h4 style={{fontWeight: 600, margin: 0}}>View more</h4>
                       </div>
                    </a>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
            </Row>
          </div>

          <div className="work-item" id="work-item-5">
            <Row style={{marginLeft:0, marginRight:0}}>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
                <Col xs={12} sm={6} md={4} lg={4}>
                    <h3>UI Design</h3>
                    <h1>Tellus News: keep up to date</h1>
                    <h4>Developing a technology to summarise and analyse news from all over the world.</h4>
                    <a href="#/portfolio/3" target="_blank">
                       <div className="view-more-button">
                          <h4 style={{fontWeight: 600, margin: 0}}>View more</h4>
                       </div>
                    </a>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1}>
                </Col>
                <Col xs={12} sm={6} md={5} lg={5}>
                    <div className="work-item-image">
                        <img src={require('../images/portfolio/tellus_cover.png')} role="presentation"/>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={1} lg={1}></Col>
            </Row>
          </div>
        </div>

        <div id="references">
            
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