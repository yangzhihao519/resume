import React, { Component } from 'react';
import '../css/App.css';
import '../css/Home.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd';

const greetings = ["Hello", "你好"];

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div id="introduction">
            <h1 id="hello"></h1>
            <h1><span>I'm</span>&nbsp; Zhihao Yang,</h1>
            <h1><span>a</span>&nbsp; UX Engineer &nbsp;<span>based in London.</span></h1>
            <div className="call-to-actinon">
                <Link to="/about">
                  <Button type="primary">About Me</Button>
                </Link>
                <Link to="/portfolio">
                  <Button type="primary">See work</Button>
                </Link>
            </div>
        </div>

        <div id="about-me">
          <h3>Fascinated about using technology to change the way we are living, Zhihao is eager to contribute to the digital transformation era with his high creativity and efficiency in sketching out prototypes and solid skills in front-end development to bring pure ideas into life.</h3>
        </div>
        
        <div className="home-work">
          <div className="home-work-item" id="work-item-1">
            <div className="work-item-description">
              <h3>UX Design & Development</h3>
              <h1>A Web-based Visualisation Tool for Horizon 2020</h1>
              <h4>Making it possible to present thousands entries of data in a colorful tree.</h4>
              <Link to="/portfolio/work/1">
                <Button type="primary">View more</Button>
              </Link>
            </div>
            <div className="work-item-image">
                <img src={require('../images/portfolio/h2020_cover.png')} role="presentation"/>
            </div>
          </div>

          <div className="home-work-item" id="work-item-2">
            <div className="work-item-image">
                <img src={require('../images/portfolio/saw_cover.png')} role="presentation"/>
            </div>
            <div className="work-item-description">
              <h3>Interaction Design</h3>
              <h1>Seizure Alert Watch & APP</h1>
              <h4>Designing an Assistive Technology to support the epileptic patients and help them live as normal people.</h4>
              <Link to="/portfolio/work/2">
                <Button type="primary">View more</Button>
              </Link>
            </div>
          </div>

          <div id="more-work">
            <Link to="/portfolio">
              <Button type="primary">See more selected work</Button>
            </Link>
          </div>

        </div>

        <div id="references">
            <div className="home-reference">
              <h2>“Yang showed excellent analytical skills and he distinguished himself by being very fast in finding as well as implementing original and innovative solutions to problems throughout the whole project.”</h2>
              <h3>Linda Bell, Head of Unit, EU R&D Relations, VINNOVA</h3>
            </div>
            <div className="home-reference">
              <h2>“We came to appreciate Mr Yang as a flexible and highly motivated employee who approached his tasks in a constructive and consistently solution-driven way. His exceptionally helpful and team-focused nature ensured that all of his coworkers held him equally high regard.”</h2>
              <h3>Giacomo Bordoli, CEO, WHITEBAG GmbH</h3>
            </div>
        </div>

        <div id="contact">
          <h1>Let’s get in touch!</h1>
          <h1>Let me know if you have any interesting ideas to work on.</h1>
          <h1><a href="mailto:yang_zhihao@live.com">Email</a>, <a href="https://www.linkedin.com/in/yangzhihao" target="_blank">Linkedin</a>, <a href="https://www.github.com/yangzhihao519" target="_blank">Github</a>, <a href="https://www.twitter.com/yangzhihao519" target="_blank">Twitter</a> & <a href="https://www.behance.net/yangzhihao" target="_blank">Behance</a></h1>
        </div>
      </div>
    );
  }
}

export default Home;