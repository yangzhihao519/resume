import React, { Component } from 'react';
import logo from './logo.svg';
import { Row, Col } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h5>Home</h5>
        </div>
        <div className="App-body">
          <Row style={{marginLeft:0, marginRight:0}}>
            <Col xs={0} sm={1} md={2} ld={3}></Col>
            <Col xs={12} sm={10} md={8} ld={6}>
              <div className="section-box" id="section-about">
                <h3>Hello!</h3>
                <h2><span style={{fontWeight: 300}}>I'm</span>&nbsp; Zhihao Yang</h2>
                <h4>UI/UX Designer & Frontend Developer</h4>
                <br/>
                <p>Born and grew up in Sichuan, China, I got my bachelor degree of Software Engineering at East China Normal University and am now persuing my master degree at University College London in Human Computer Interaction and Design.</p> 
                <p>Previously I have worked at university, startups and governmental agency in India, China, Switzerland and Sweden as UI/UX Designer and Frontend Developer.</p>
              </div>
              <div className="section-title">
                  <h3>Experience</h3>
              </div>
              <div className="section-box" id="section-experience">
                <h3>UI/UX Designer & Frontend Developer</h3>
                <h4>2016.06-2016.09 VINNOVA Stockholm, Sweden</h4>
                <p>UI/UX design and front-end development for a web-based visualisation tool of Horizon 2020 at the Swedish Innovation Agency</p>
                <hr/>
                <h3>Software Engineer Intern</h3>
                <h4>2014.02-2015.01 Whitebag GmbH Zurich, Switzerland</h4>
                <p>Development of native iOS app & web apps in Ruby on Rails; Design of API protocol; Start-up working experience</p>
                <hr/>
                <h3>R&D Engineer Intern</h3>
                <h4>2013.10-2014.01 AdMaster Inc. Shanghai, China</h4>
                <p>Implementation of the Gender Prediction Algorithm based on Hadoop using Java(Map/Reduce)</p>
                <hr/>
                <h3>Web Developer Traninee</h3>
                <h4>2012.07-2012.09 Manipal Institute of Technology Manipal, India</h4>
                <p>Design and implementation of Semantic-based website (search for flights, trains, buses and hotels)</p>
              </div>
            </Col>
            <Col xs={0} sm={1} md={2} ld={3}></Col>
          </Row>
        </div>
        <div className="App-footer">
        </div>
      </div>
      );
  }
}

export default App;
