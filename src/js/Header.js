import React, { Component } from 'react';
import { Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/Header.css'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap';

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
              <LinkContainer to={{ pathname: '/home' }} style={{color: "white"}}>
                <NavItem eventKey={1}>HOME</NavItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: '/resume' }} style={{color: "white"}}>
                <NavItem eventKey={2}>RESUME</NavItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: '/portfolio' }} style={{color: "white"}}>
                <NavItem eventKey={3}>PORTFOLIO</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      );
  }
}

export default Header;