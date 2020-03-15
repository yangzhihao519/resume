import React, { Component } from 'react';
import '../css/Header.css'
import { Menu } from 'antd';
import {Link, withRouter} from 'react-router-dom';

class Header extends React.Component {
  state = {
    current: 'home',
  };

  componentWillMount(){
    this.highlightSelectedKey(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.highlightSelectedKey(this.props.location.pathname);
      window.scrollTo(0, 0);
    }
  }

  highlightSelectedKey = (pathname) => {
    console.log(pathname);
    switch(pathname){
      case "/":
        this.setState({
          current: "home",
        });
        break;
      case "/about":
        this.setState({
          current: "about",
        });
        break;
      case "/portfolio":
        this.setState({
          current: "work",
        });
        break;
      default:
        this.setState({
          current: "",
        });
    }
  }

  render() {
    const { match, location, history } = this.props;

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

export default withRouter(Header);
