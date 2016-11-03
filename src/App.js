import React, { Component } from 'react';
import logo from './logo.svg';
import { Row, Col} from 'react-bootstrap';
import './App.css';
import Resume from './Resume'
import { Router, Route, Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <nav className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav menu">
              <li><Link to="/home" style={{color: "white"}}>Home</Link></li>
              <li><Link to="/resume" style={{color: "white"}}>Resume</Link></li>
            </ul>
          </nav>
        </div>
        <div className="App-body">
          <Row style={{marginLeft:0, marginRight:0}}>
            <Col xs={0} sm={1} md={2} ld={3}></Col>
            <Col xs={12} sm={10} md={8} ld={6}>
              {this.props.children}
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
