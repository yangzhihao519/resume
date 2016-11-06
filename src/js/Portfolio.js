import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'
import { Row, Col } from 'react-bootstrap'

var h2020_screenshot = require("../images/H2020_screenshot.png");
var saw_screenshot = require("../images/saw_screenshot.png");
var yorktail_screenshot = require("../images/yorktail_screenshot.png");
var vinyo_screenshot = require("../images/vinyo_screenshot.png");

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <div className="section-title">
                    <h2>Portfolio</h2>
                </div>

                <Row>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <div className="portfolio-item" >
                            <div className="portfolio-item-image">
                                <img src={h2020_screenshot} />
                            </div>
                            <div className="portfolio-item-title">
                                <h3>Web-based Visualisation Tool of Horizon 2020</h3>
                            </div>
                            <div className="portfolio-item-content">
                                <h4>2016.06-2016.09</h4>
                                <p>Build a web-based visualisation tool of Horizon 2020 at the Swedish Innovation Agency.</p>
                                <p>Work mainly focuses on UI/UX design and front-end development.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <div className="portfolio-item" >
                            <div className="portfolio-item-image">
                                <img src={saw_screenshot} />
                            </div>
                            <div className="portfolio-item-title">
                                <h3>Interaction Design of Seizure Alert Watch & APP</h3>
                            </div>
                            <div className="portfolio-item-content">
                                <h4>2015.11–2016.01</h4>
                                <p>Design a Assistive Technology to support the epileptic patients and help them live as normal people;</p>
                                <p>Work mainly focuses on ideation, user research, UI/UX of low-fi and high-fi prototype of the applications.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <div className="portfolio-item" >
                            <div className="portfolio-item-image">
                                <img src={yorktail_screenshot} />
                            </div>
                            <div className="portfolio-item-title">
                                <h3>Yocktail - Great Platform for Cocktail Lovers</h3>
                            </div>
                            <div className="portfolio-item-content">
                                <h4>2016.03–2016.04</h4>
                                <p>Yocktail is a platform offered to cocktail lovers, allowing users to search, collect, create and share cocktails;</p>
                                <p>Work as a full-stack designer and developer, from UI/UX design, to front-end & back-end programming.</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={6}>
                        <div className="portfolio-item" >
                            <div className="portfolio-item-image">
                                <img src={vinyo_screenshot} />
                            </div>
                            <div className="portfolio-item-title">
                                <h3>Vinyo: Buy the wine you love on mobile</h3>
                            </div>
                            <div className="portfolio-item-content">
                                <h4>2014.06–2015.01</h4>
                                <p>Vinyo APP is a critically-acclaimed, free app that helps you search, find and buy the wine you want. </p>
                                <p>Work focuses on the client-end development of this iOS application.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Portfolio;