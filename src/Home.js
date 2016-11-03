import React, { Component } from 'react';
import logo from './logo.svg';
import { Row, Col } from 'react-bootstrap';
import './App.css';
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="Home">
         <div className="section-box" id="section-about">
            <h3>Hello!</h3>
            <h2><span style={{fontWeight: 300}}>I'm</span>&nbsp; Zhihao Yang</h2>
            <h4>UI/UX Designer & Frontend Developer</h4>
            <br/>
            <p>Born and grew up in Sichuan, China, I got my bachelor degree of Software Engineering at East China Normal University and am now persuing my master degree at University College London in Human Computer Interaction and Design.</p> 
            <p>Previously I have worked at university, startups and governmental agency in India, China, Switzerland and Sweden as UI/UX Designer and Frontend Developer.</p>
          </div>
      </div>
      );
  }
}

export default Home;