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
            <Col xs={0} sm={0} md={1} ld={2}></Col>
            <Col xs={12} sm={12} md={10} ld={8}>
              <div id="about">
                <h3>Hello!</h3>
                <h2>I'm Zhihao Yang</h2>
                <h4>UI/UX Designer & Frontend Developer</h4>
                <br/>
                <p>Born and grew up in Sichuan, China, I got my bachelor degree of Software Engineering at East China Normal University and am now persuing my master degree at University College London.</p> 
                <p>Previously I have worked in India, China, Switzerland and Sweden as UI/UX Designer and Frontend Developer.</p>
              </div>
            </Col>
            <Col xs={0} sm={0} md={1} ld={2}></Col>
          </Row>
        </div>
        <div className="App-footer">
        </div>
      </div>
      );
  }
}

export default App;
