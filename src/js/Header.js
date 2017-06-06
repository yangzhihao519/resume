import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/Header.css'
import { LinkContainer } from 'react-router-bootstrap';
import Scrollchor from 'react-scrollchor';
import { Sticky } from 'react-sticky';

interface HeaderProps {
  currentPathName: string;
}

class Header extends Component<HeaderProps, {}> {
  render() {
    const currentPathName =  this.props.currentPathName;
    var subNav = '';
    switch (currentPathName) {
      case "/resume":
        subNav = (
          <Sticky id="sticky-nav">
            <div className="sub-nav-bar">
              <div className="sub-nav-items">
                <Scrollchor to="#section-profile" className="sub-nav-item">PROFILE</Scrollchor>
                <Scrollchor to="#section-experience" className="sub-nav-item">EXPERIENCE</Scrollchor>
                <Scrollchor to="section-skills" className="sub-nav-item">SKILLS</Scrollchor>
                <Scrollchor to="section-education" className="sub-nav-item">EDUCATION</Scrollchor>
                <Scrollchor to="section-awards" className="sub-nav-item">AWARDS</Scrollchor>
                <Scrollchor to="section-languages" className="sub-nav-item">LANGUAGES</Scrollchor>
              </div>
            </div>
          </Sticky>
        );
        break;
    
      default:
        break;
    }

    return (
      <div id="header">
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{ pathname: '/home' }} style={{color: "white"}}>
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: '/portfolio' }} style={{color: "white"}}>
                <NavItem eventKey={3}>Selected Work</NavItem>
              </LinkContainer>
              <LinkContainer to={{ pathname: '/portfolio' }} style={{color: "white"}}>
                <NavItem eventKey={3}>Contact</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {subNav}
      </div>
      );
  }
}

export {Header};
