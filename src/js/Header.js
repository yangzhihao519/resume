import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/Header.css'
import { LinkContainer } from 'react-router-bootstrap';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';

const { SubMenu } = Menu;

class Header extends Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {

    return (
      <div id="header">
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="work">
          <Link to="/portfolio">Work</Link>
        </Menu.Item>
        </Menu>
      </div>
      );
  }
}

export {Header};
