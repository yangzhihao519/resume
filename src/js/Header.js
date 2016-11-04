import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../css/Header.css'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div className="header">
         <nav className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav menu">
              <li><Link to="/home" style={{color: "white"}}>HOME</Link></li>
              <li><Link to="/resume" style={{color: "white"}}>RESUME</Link></li>
              <li><Link to="/portfolio" style={{color: "white"}}>PORTFOLIO</Link></li>
            </ul>
          </nav>
      </div>
      );
  }
}

export default Header;