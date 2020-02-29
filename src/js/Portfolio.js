import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd';

class Portfolio extends Component {
    render() {
        return (
            <div className="Portfolio">
                <div id="portfolio-intro">
                    <h1>Here is a collection of Zhihao's selected work.</h1>
                    <p>
                        Fascinated about using technology to change the way we are living, Zhihao is eager to contribute to the digital transformation era with his high creativity and efficiency in sketching out prototypes and solid skills in front-end development to bring pure ideas into life.
                    </p>
                </div>
                <div className="portfolio-work">
                    <div className="portfolio-work-item" id="work-item-1">
                        <div className="work-item-description">
                            <h3>UX Design & Development</h3>
                            <h1>A Web-based Visualisation Tool for Horizon 2020</h1>
                            <h4>Making it possible to present thousands entries of data in a colorful tree.</h4>
                            <Link to="/portfolio/work/1" target="_blank">
                                <Button type="primary">View more</Button>
                            </Link>
                            </div>
                        <div className="work-item-image">
                            <img src={require('../images/portfolio/h2020_cover.png')} role="presentation"/>
                        </div>
                    </div>

                    <div className="portfolio-work-item" id="work-item-2">
                        <div className="work-item-image">
                            <img src={require('../images/portfolio/saw_cover.png')} role="presentation"/>
                        </div>
                        <div className="work-item-description">
                            <h3>Interaction Design</h3>
                            <h1>Seizure Alert Watch & APP</h1>
                            <h4>Designing an Assistive Technology to support the epileptic patients and help them live as normal people.</h4>
                            <Link to="/portfolio/work/2" target="_blank">
                                <Button type="primary">View more</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="portfolio-work-item" id="work-item-3">
                        <div className="work-item-description">
                            <h3>iOS APP Development</h3>
                            <h1>Vinyo: Buy the wine you love on mobile</h1>
                            <h4>Vinyo APP is a critically-acclaimed, free app that helps you search, find and buy the wine you want</h4>
                            <Link to="/portfolio/work/5" target="_blank">
                                <Button type="primary">View more</Button>
                            </Link>
                        </div>
                        <div className="work-item-image">
                            <img src={require('../images/portfolio/vinyo_cover.png')} role="presentation"/>
                        </div>
                    </div>

                    <div className="portfolio-work-item" id="work-item-4">
                        <div className="work-item-image">
                            <img src={require('../images/portfolio/yorktail_cover.png')} role="presentation"/>
                        </div>
                        <div className="work-item-description">
                            <h3>Full stack</h3>
                            <h1>Yocktail: Great Platform for Cocktail Lovers</h1>
                            <h4>Yocktail is a platform offered to cocktail lovers, allowing users to search, collect, create and share cocktails.</h4>
                            <Link to="/portfolio/work/4" target="_blank">
                                <Button type="primary">View more</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="portfolio-work-item" id="work-item-5">
                        <div className="work-item-description">
                            <h3>UI Design</h3>
                            <h1>Tellus News: keep up to date</h1>
                            <h4>Developing a technology to summarise and analyse news from all over the world.</h4>
                            <Link to="/portfolio/work/3" target="_blank">
                                <Button type="primary">View more</Button>
                            </Link>
                        </div>
                        <div className="work-item-image">
                            <img src={require('../images/portfolio/tellus_cover.png')} role="presentation"/>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Portfolio;