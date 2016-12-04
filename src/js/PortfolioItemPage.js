import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'
import { Row, Col } from 'react-bootstrap'
import { PortfolioItemPageSection } from './PortfolioItemPageSection'
import Scrollchor from 'react-scrollchor';

var portfolioItems = require('../data/PortfolioItems.json');

class PortfolioItemPage extends Component {
    componentDidMount() {
        // from the path `/inbox/messages/:id`
        // const id = this.props.params.id
    }

    render() {
        const id = this.props.params.id;
        const portfolioItem = portfolioItems[id - 1];
        const title = portfolioItem.title;
        const coverImageName = portfolioItem.cover_image_name;
        const periodOfTime = portfolioItem.period_of_time;
        const location = portfolioItem.location;
        const teamMembers = portfolioItem.team_members;
        const skills = portfolioItem.skills;
        const website = portfolioItem.website;

        var descriptionsHTML = [];
        var descriptions = portfolioItem.descriptions;
        for (var i = 0; i < descriptions.length; i++) {
            var description = descriptions[i];
            descriptionsHTML.push(<h4 key={description}>{description}</h4>);
        }

        const problem = portfolioItem.problem;
        const solution = portfolioItem.solution;
        const process = portfolioItem.process;
        const result = portfolioItem.result

        return (
            <div id="portfolio-item-page">
                <a href="#/portfolio">
                    <div className="back-to-portfolio-button">
                        <h5><span className="glyphicon glyphicon-chevron-left" />Back to portfolio</h5>
                    </div>
                </a>
                <div className="section-title">
                    <h2>{title}</h2>
                </div>
                <div id="portfolio-item-page-intro">
                    <div id="portfolio-item-page-cover-image">
                        <img src={require('../images/portfolio/' + coverImageName)} role="presentation"/>
                    </div>
                    <div id="portfolio-item-page-descriptions">
                        {descriptionsHTML}
                    </div>
                    <div id="portfolio-item-page-info">
                        <Row>
                            <Col xs={4} sm={4} md={4} lg={3} className="title">
                                <h4>Time</h4>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={9} className="content">
                                <h4>{periodOfTime}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4} sm={4} md={4} lg={3} className="title">
                                <h4>Location</h4>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={9} className="content">
                                <h4>{location}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4} sm={4} md={4} lg={3} className="title">
                                <h4>Team members</h4>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={9} className="content">
                                <h4>{teamMembers}</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4} sm={4} md={4} lg={3} className="title">
                                <h4>Skills Used</h4>
                            </Col>
                            <Col xs={8} sm={8} md={8} lg={9} className="content">
                                <h4>{skills}</h4>
                            </Col>
                        </Row>
                        {website === "" ? "" :
                            <Row>
                                <Col xs={4} sm={4} md={4} lg={3} className="title">
                                    <h4>Website</h4>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={9} className="content">
                                    <a href={website} target="_blank"><h4>{website}</h4></a>
                                </Col>
                            </Row>}
                    </div>
                </div>
                {
                    (problem === "" && solution === "" && process === "" && result === "") ? <div /> :
                        (<div>
                            <div className="section-title">
                                <h3>The Story</h3>
                            </div>
                            <div id="portfolio-item-page-story">
                                {problem === "" ? "" : <PortfolioItemPageSection title={"Problem"} content={problem} />}
                                {solution === "" ? "" : <PortfolioItemPageSection title={"Solution"} content={solution} />}
                                {process === "" ? "" : <PortfolioItemPageSection title={"Process"} content={process} />}
                                {result === "" ? "" : <PortfolioItemPageSection title={"Result"} content={result} />}
                            </div>
                        </div>)
                }
                <Row>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <a href="#/portfolio">
                            <div className="back-to-portfolio-button">
                                <h5><span className="glyphicon glyphicon-chevron-left" />Back to portfolio</h5>
                            </div>
                        </a>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <Scrollchor to="#portfolio-item-page" className="pull-right">
                            <div className="back-to-top-button">
                                <h5>Back to Top<span className="glyphicon glyphicon-arrow-up" /></h5>
                            </div>
                        </Scrollchor>
                    </Col>
                </Row>

            </div>

        );
    }
}

export default PortfolioItemPage;