import React, { Component } from 'react';
import { Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/Header.css'
import { Link } from 'react-router'

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}><Link to="/home" style={{color: "white"}}>HOME</Link></NavItem>
              <NavItem eventKey={1}><Link to="/resume" style={{color: "white"}}>RESUME</Link></NavItem>
              <NavItem eventKey={2}><Link to="/portfolio" style={{color: "white"}}>PORTFOLIO</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      );
  }
}

export default Header;