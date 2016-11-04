import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>

                <div className="section-box" >
                    <h3>Web-based Visualisation Tool of Horizon 2020</h3>
                    <h4>2016.06-2016.09</h4>
                    <p>Build a web-based visualisation tool of Horizon 2020 at the Swedish Innovation Agency.</p>
                    <p>Work mainly focuses on UI/UX design and front-end development.</p>
                </div>

                <div className="section-box" >
                    <h3>Interaction Design of Seizure Alert Watch & APP</h3>
                    <h4>2015.11–2016.01</h4>
                    <p>Design a Assistive Technology to support the epileptic patients and help them live as normal people;</p>
                    <p>Utilize various Interaction Design methodologies including Brainstorming, Persona, Scenario, Storyboard, Prototyping, Evaluation;</p>
                    <p>Work mainly focuses on idea-generation, user research, interaction and graphical design of low-fi and high-fi prototype of the applications.</p>
                </div>

                <div className="section-box" >
                    <h3>WikiPedro - A New Way to Explore WikiPedia</h3>
                    <h4>2016.02–2016.03</h4>
                    <p>WikiPedro provides you a visualised Wiki search results in a transparent format with related articles visible. Users can also build their own libraries to enhance the learning experience.</p>
                    <p>Work mainly focuses on interaction design and front-end programming using D3.js.</p>
                </div>

                <div className="section-box" >
                    <h3>Vinyo iOS APP Development</h3>
                    <h4>2014.06–2015.01</h4>
                    <p>Vinyo APP is a critically-acclaimed, free app that helps you search, find and buy the wine you want. Buying the wine you love has never been easier on mobile. </p>
                    <p>Work focuses on the client end development of this iOS application.</p>
                    <p>Design of API protocol used between server and client.</p>
                </div>

            </div>
        );
    }
}

export default Portfolio;