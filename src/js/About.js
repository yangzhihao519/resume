import React, { Component } from 'react';
import '../css/App.css';
import '../css/About.css';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div id="section-profile">
          <div className="section-box" >
            <h1>Zhihao Yang</h1>
            <div id="section-profile__intro">
              <h3>UX Designer & Engineer</h3>
              <h4 style={{fontWeight: 300}}>London, UK</h4>
              <h4 style={{fontWeight: 300}}><a href="mailto:yang_zhihao@live.com">Email</a> | <a href="https://www.linkedin.com/in/yangzhihao" target="_blank">Linkedin</a> | <a href="https://www.github.com/yangzhihao519" target="_blank">Github</a> | <a href="https://www.twitter.com/yangzhihao519" target="_blank">Twitter</a> | <a href="https://www.behance.net/yangzhihao" target="_blank">Behance</a></h4>
            </div>
            <h4 style={{fontWeight: 300}}>
              I am fascinated about using digital solution to change the way we are living using the skills I have: high creativity and efficiency in sketching out prototypes and solid skills in front-end development to bring pure ideas into life. 
            </h4>
          </div>
        </div>

        <div id="about-content">
          <div id="about-content-left">
            <div id="section-experience">
              <div className="section-title">
                <h2>Experience</h2>
              </div>
              <div className="section-box" >
                <div className="section-box-item">
                  <h3 style={{ fontWeight: 700 }}>Front-end Developer</h3>
                  <h4>2018.11-Present, Core Technology Systems, <span>London, UK</span></h4>
                  <h4 style={{ fontWeight: 300 }}>Front-end development of enterprise-level websites and web apps in SharePoint Classic and Modern Framework.</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3 style={{ fontWeight: 700 }}>Front-end Engineer(UX-Focused)</h3>
                  <h4>2017.09-2018.10, viagogo, <span>London, UK</span></h4>
                  <h4 style={{ fontWeight: 300 }}>UI/UX design and front-end development to improve the usability and conversion rate of the ticket-selling web platform.</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3 style={{ fontWeight: 700 }}>UX/UI Developer Intern</h3>
                  <h4>2016.06-2016.09, VINNOVA, <span>Stockholm, Sweden</span></h4>
                  <h4 style={{ fontWeight: 300 }}>UI & UX design and front-end development for a web-based visualisation tool of Horizon 2020 at the Swedish Innovation Agency.</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3 style={{ fontWeight: 700 }}>UX/UI Designer Volunteer</h3>
                  <h4>2016.05-2016.09, Tellus, <span>Stockholm, Sweden</span></h4>
                  <h4 style={{ fontWeight: 300 }}>Evaluation and redesign of Tellus News APP; UI&UX Design of Tellus's other products including Fact Box and Media Coverage Visualisation Dashboard.</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3 style={{ fontWeight: 700 }}>Web&Mobile Engineer Intern</h3>
                  <h4>2014.02-2015.01, Whitebag GmbH, <span>Zurich, Switzerland</span></h4>
                  <h4 style={{ fontWeight: 300 }}>Development of native iOS app & web apps in Ruby on Rails; Design of API protocol; Start-up working experience.</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3 style={{ fontWeight: 700 }}>R&D Engineer Intern</h3>
                  <h4>2013.10-2014.01, AdMaster Inc., <span>Shanghai, China</span></h4>
                  <h4 style={{ fontWeight: 300 }}>Implementation of the Gender Prediction Algorithm based on Hadoop using Java(Map/Reduce).</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3 style={{ fontWeight: 700 }}>Web Developer Trainee</h3>
                  <h4>2012.07-2012.09, Manipal Institute of Technology, <span>Manipal, India</span></h4>
                  <h4 style={{ fontWeight: 300 }}>Design and implementation of Semantic-based website (search for flights, trains, buses and hotels).</h4>
                </div>
              </div>
            </div>
            <div id="section-education">
              <div className="section-title">
                <h2>Education</h2>
              </div>
              <div className="section-box">
                <div className="section-box-item">
                  <h3>MSc / Human Computer Interaction and Design / Distinction</h3>
                  <h4>2016.09-2017.09, University College London, <span>London, UK</span></h4>
                  <h4 style={{ fontWeight: 300 }}>Exit year of EIT Digital Master Program.Minor in Innovation & Entrepreneurship </h4>
                  <h4 style={{ fontWeight: 300 }}><span style={{ fontWeight: 400 }}>Master thesis:</span> <span style={{ fontStyle: "italic"}}>Viewing Augmented Reality at Close Range with Optical See-Through Head-Mounted Display</span></h4>
                  <h4 style={{ fontWeight: 300 }}><span style={{ fontWeight: 400 }}>Minor thesis:</span> <span style={{ fontStyle: "italic"}}>Barriers for Educational Optical See-through Head-mounted Display Augmented Reality to Entering Schools</span></h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3>MSc / Human Computer Interaction and Design</h3>
                  <h4>2015.08-2016.06, KTH Royal Institute of Technology, <span>Stockholm, Sweden</span></h4>
                  <h4 style={{ fontWeight: 300 }}>Entry year of EIT Digital Master Program.Minor in Innovation & Entrepreneurship </h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3>BEn / Software Engineering</h3>
                  <h4>2010.09-2015.06, East China Normal University, <span>Shanghai, China</span></h4>
                  <h4 style={{ fontWeight: 300 }}>Graduate with Honour; Selected in the 21st Century Talent Academy and Top Innovative Training Program at ECNU</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3>Summer School / Entrepreneurship for Engineer in Health and Wellbeing</h3>
                  <h4>2016.08, Eindhoven University of Technology, <span>Eindhoven, Netherlands</span></h4>
                  <h4></h4>
                </div>
              </div>
            </div>
          </div>
          <div id="about-content-right">
            <div id="section-awards">
              <div className="section-title">
                <h2>Honours & Awards</h2>
              </div>
              <div className="section-box">
                <div className="section-box-item">
                  <h3>EIT Digital Excellence Scholarship</h3>
                  <h4>2015.05, EIT Digital Master School</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3>Outstanding University Graduate of Shanghai, <span>Top 3%</span></h3>
                  <h4>2015.05, Education Committee of Shanghai, China</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3>National Scholarship, <span>Top 0.2%</span></h3>
                  <h4>2013.09, Ministry of Education, China</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3>Excellent Student Leader</h3>
                  <h4>2012.09, East China Normal University</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3>Top Grade Scholarship, <span>Top 5%</span></h3>
                  <h4>2011.09, East China Normal University</h4>
                </div>
              </div>
            </div>
            <div id="section-references">
              <div className="section-title">
                <h2>References</h2>
              </div>
              <div className="section-box">
                <div className="section-box-item">
                  <h3>Linda Bell, Head of Unit, EU R&D Relations, VINNOVA</h3>
                  <h4>“Yang proved to be knowledgeable, attentive, task-focused and with a great aptitude for learning. Moreover, Yang showed excellent analytical skills and he distinguished himself by being very fast in finding as well as implementing original and innovative solutions to problems throughout the whole project. Yang also demonstrated his abilities to work effectively with his co-workers and external visitors, making him a valuable addition to the team.”</h4>
                </div>
                <hr />
                <div className="section-box-item">
                  <h3>Giacomo Bordoli, CEO, WHITEBAG GmbH</h3>
                  <h4>“We came to appreciate Mr Yang as a flexible and highly motivated employee who approached his tasks in a constructive and consistently solution-driven way. His exceptionally helpful and team-focused nature ensured that all of his coworkers held him equally high regard. His conduct toward superiors, colleagues and clients was very friendly, pleasant and professional at all times.”</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;