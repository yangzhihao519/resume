import React, { Component } from 'react'
import '../css/App.css'
import '../css/Portfolio.css'
import { Row, Col } from 'react-bootstrap'
import {PortfolioItemPageSection} from './PortfolioItemPageSection'

var portfolioItems = require('../data/PortfolioItems.json');

class PortfolioItemPage extends Component {
    componentDidMount() {
        // from the path `/inbox/messages/:id`
        const id = this.props.params.id
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

        var descriptionsHTML = [];
        var descriptions = portfolioItem.descriptions;
        for (var i = 0; i < descriptions.length; i++) {
            var description = descriptions[i];
            descriptionsHTML.push(<h4 key={description}>{description}</h4>);
        }

        const problem = portfolioItem.problem;
        const solution = portfolioItem.solution;
        const process = portfolioItem.result;
        const result = portfolioItem.result

        return (
            <div id="portfolio-item-page">
                <div className="section-title">
                    <h2>{title}</h2>
                </div>
                <div id="portfolio-item-page-intro">
                    <div id="portfolio-item-page-cover-image">
                        <img src={require('../images/' + coverImageName)} />
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
                    </div>
                </div>
                <div className="section-title">
                    <h3>The Story</h3>
                </div>
                <div id="portfolio-item-page-story">
                    {problem === "" ? "" : <PortfolioItemPageSection title={"Problem"} content={problem}/>}
                        {solution === "" ? "" : <PortfolioItemPageSection title={"Solution"} content={solution}/>}
                        {process === "" ? "" : <PortfolioItemPageSection title={"Process"} content={process}/>}
                        {result === "" ? "" : <PortfolioItemPageSection title={"Result"} content={result}/>}
                </div>
            </div>
        );
    }
}

export default PortfolioItemPage;